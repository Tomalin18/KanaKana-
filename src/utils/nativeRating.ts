import { Platform } from 'react-native';
import { requestReview } from 'react-native-store-review';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';

// 檢查原生評分是否可用
const isAvailable = (): boolean => {
  // iOS 10.3+ 和 Android 5.0+ 支援應用內評分
  if (Platform.OS === 'ios') {
    const majorVersionIOS = parseInt(Platform.Version as string, 10);
    return majorVersionIOS >= 10;
  } else if (Platform.OS === 'android') {
    return Platform.Version >= 21; // Android 5.0 (API 21)
  }
  return false;
};

// 原生評分配置
const NATIVE_RATING_CONFIG = {
  // 觸發條件
  TRIGGERS: {
    ACHIEVEMENT_UNLOCKED: 'achievement_unlocked',
    GAME_COMPLETED: 'game_completed',
    STREAK_MILESTONE: 'streak_milestone',
    FEATURE_EXPLORED: 'feature_explored',
    SESSION_COUNT: 'session_count',
  },
  
  // 頻率控制 - 更寬鬆的設定以增加評分機會
  MIN_DAYS_BETWEEN_PROMPTS: 3, // 最少間隔3天
  MAX_PROMPTS_PER_MONTH: 5,    // 每月最多5次
  MIN_SESSIONS_BEFORE_FIRST: 3, // 至少使用3次才提示
  
  // 各遊戲模式的評分條件
  GAME_MODE_CONDITIONS: {
    // 經典模式條件
    classic: {
      MIN_SCORE: 800,           // 最低分數要求
      MIN_ACCURACY: 0.7,        // 最低準確率要求
      MIN_GAME_TIME: 45,        // 最低遊戲時間要求（秒）
      MIN_COMBO: 10,            // 最低連擊數要求
    },
    
    // 漢字模式條件
    kanji_to_kana: {
      MIN_SCORE: 600,           // 最低分數要求
      MIN_ACCURACY: 0.65,       // 最低準確率要求
      MIN_GAME_TIME: 60,        // 最低遊戲時間要求（秒）
      MIN_WORDS_COMPLETED: 15,  // 最低完成單字數
    },
    
    // 長文模式條件
    long_text: {
      MIN_SCORE: 1000,          // 最低分數要求
      MIN_ACCURACY: 0.75,       // 最低準確率要求
      MIN_GAME_TIME: 120,       // 最低遊戲時間要求（秒）
      MIN_TEXT_COMPLETED: 0.8,  // 最低文章完成度
    },
    
    // 俄羅斯方塊模式條件
    tetris_typing: {
      MIN_SCORE: 1500,          // 最低分數要求
      MIN_LEVEL: 8,             // 最低等級要求
      MIN_PIECES_CLEARED: 25,   // 最低消除方塊數
      MIN_COMBO: 5,             // 最低連擊數
      NEW_RECORD: true,         // 是否為新紀錄
    },
  },
} as const;

// 評分狀態介面
interface NativeRatingState {
  lastPromptDate: number | null;
  promptCount: number;
  lastPromptMonth: number | null;
  hasRated: boolean;
  sessionCount: number;
  lastSessionDate: number | null;
  totalGamesPlayed: number;
  totalScore: number;
}

// 獲取評分狀態
export const getNativeRatingState = async (): Promise<NativeRatingState> => {
  try {
    const stored = await AsyncStorage.getItem('native_rating_state');
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to get native rating state:', error);
  }
  
  return {
    lastPromptDate: null,
    promptCount: 0,
    lastPromptMonth: null,
    hasRated: false,
    sessionCount: 0,
    lastSessionDate: null,
    totalGamesPlayed: 0,
    totalScore: 0,
  };
};

// 保存評分狀態
export const saveNativeRatingState = async (state: NativeRatingState): Promise<void> => {
  try {
    await AsyncStorage.setItem('native_rating_state', JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save native rating state:', error);
  }
};

// 檢查是否應該顯示原生評分提示
export const shouldShowNativeRating = async (
  trigger: string,
  additionalData?: any
): Promise<boolean> => {
  // 檢查原生評分是否可用
  if (!isAvailable()) {
    console.log('❌ 原生評分不可用');
    return false;
  }

  const state = await getNativeRatingState();
  const now = Date.now();
  const currentMonth = new Date().getMonth();
  
  console.log('🔍 檢查原生評分條件:', {
    trigger,
    additionalData,
    state,
    currentMonth,
  });
  
  // 如果已經評分過，不再提示
  if (state.hasRated) {
    console.log('❌ 用戶已經評分過');
    return false;
  }
  
  // 檢查時間間隔
  if (state.lastPromptDate) {
    const daysSinceLastPrompt = (now - state.lastPromptDate) / (1000 * 60 * 60 * 24);
    if (daysSinceLastPrompt < NATIVE_RATING_CONFIG.MIN_DAYS_BETWEEN_PROMPTS) {
      console.log('❌ 時間間隔太短:', daysSinceLastPrompt, '天');
      return false;
    }
  }
  
  // 檢查月度限制
  if (state.lastPromptMonth === currentMonth && state.promptCount >= NATIVE_RATING_CONFIG.MAX_PROMPTS_PER_MONTH) {
    console.log('❌ 本月提示次數已達上限:', state.promptCount);
    return false;
  }
  
  // 檢查會話數量
  if (state.sessionCount < NATIVE_RATING_CONFIG.MIN_SESSIONS_BEFORE_FIRST) {
    console.log('❌ 會話數量不足:', state.sessionCount);
    return false;
  }
  
  // 根據觸發條件進行額外檢查
  switch (trigger) {
    case NATIVE_RATING_CONFIG.TRIGGERS.ACHIEVEMENT_UNLOCKED:
      // 成就解鎖時，檢查是否為重要成就
      const isImportantAchievement = additionalData?.achievementType === 'rare' || additionalData?.achievementType === 'epic';
      console.log('🎉 成就解鎖檢查:', { achievementType: additionalData?.achievementType, isImportant: isImportantAchievement });
      return isImportantAchievement;
      
    case NATIVE_RATING_CONFIG.TRIGGERS.GAME_COMPLETED:
      // 遊戲完成時，根據遊戲模式檢查表現
      const mode = additionalData?.mode || 'classic';
      const score = additionalData?.score || 0;
      const accuracy = additionalData?.accuracy || 0;
      const gameTime = additionalData?.gameTime || 0;
      
      // 獲取對應遊戲模式的條件
      const modeConditions = NATIVE_RATING_CONFIG.GAME_MODE_CONDITIONS[mode as keyof typeof NATIVE_RATING_CONFIG.GAME_MODE_CONDITIONS];
      
      if (!modeConditions) {
        console.log('❌ 未知遊戲模式:', mode);
        return false;
      }
      
      let hasGoodPerformance = false;
      
      switch (mode) {
        case 'classic': {
          const classicConditions = modeConditions as typeof NATIVE_RATING_CONFIG.GAME_MODE_CONDITIONS.classic;
          const combo = additionalData?.combo || 0;
          hasGoodPerformance = 
            score >= classicConditions.MIN_SCORE ||
            accuracy >= classicConditions.MIN_ACCURACY ||
            gameTime >= classicConditions.MIN_GAME_TIME ||
            combo >= classicConditions.MIN_COMBO;
          console.log('🎯 經典模式檢查:', { 
            score, accuracy, gameTime, combo, hasGoodPerformance,
            conditions: classicConditions
          });
          break;
        }
          
        case 'kanji_to_kana': {
          const kanjiConditions = modeConditions as typeof NATIVE_RATING_CONFIG.GAME_MODE_CONDITIONS.kanji_to_kana;
          const wordsCompleted = additionalData?.wordsCompleted || 0;
          hasGoodPerformance = 
            score >= kanjiConditions.MIN_SCORE ||
            accuracy >= kanjiConditions.MIN_ACCURACY ||
            gameTime >= kanjiConditions.MIN_GAME_TIME ||
            wordsCompleted >= kanjiConditions.MIN_WORDS_COMPLETED;
          console.log('🎯 漢字模式檢查:', { 
            score, accuracy, gameTime, wordsCompleted, hasGoodPerformance,
            conditions: kanjiConditions
          });
          break;
        }
          
        case 'long_text': {
          const longTextConditions = modeConditions as typeof NATIVE_RATING_CONFIG.GAME_MODE_CONDITIONS.long_text;
          const textCompleted = additionalData?.textCompleted || 0;
          hasGoodPerformance = 
            score >= longTextConditions.MIN_SCORE ||
            accuracy >= longTextConditions.MIN_ACCURACY ||
            gameTime >= longTextConditions.MIN_GAME_TIME ||
            textCompleted >= longTextConditions.MIN_TEXT_COMPLETED;
          console.log('🎯 長文模式檢查:', { 
            score, accuracy, gameTime, textCompleted, hasGoodPerformance,
            conditions: longTextConditions
          });
          break;
        }
          
        case 'tetris_typing': {
          const tetrisConditions = modeConditions as typeof NATIVE_RATING_CONFIG.GAME_MODE_CONDITIONS.tetris_typing;
          const level = additionalData?.level || 0;
          const piecesCleared = additionalData?.piecesCleared || 0;
          const tetrisCombo = additionalData?.combo || 0;
          const isNewRecord = additionalData?.isNewRecord || false;
          
          hasGoodPerformance = 
            score >= tetrisConditions.MIN_SCORE ||
            level >= tetrisConditions.MIN_LEVEL ||
            piecesCleared >= tetrisConditions.MIN_PIECES_CLEARED ||
            tetrisCombo >= tetrisConditions.MIN_COMBO ||
            isNewRecord;
          console.log('🎯 俄羅斯方塊模式檢查:', { 
            score, level, piecesCleared, combo: tetrisCombo, isNewRecord, hasGoodPerformance,
            conditions: tetrisConditions
          });
          break;
        }
          
        default:
          console.log('❌ 未處理的遊戲模式:', mode);
          return false;
      }
      
      return hasGoodPerformance;
      
    case NATIVE_RATING_CONFIG.TRIGGERS.STREAK_MILESTONE:
      // 連續使用里程碑
      const isMilestone = additionalData?.streak >= 5 || additionalData?.streak % 7 === 0;
      console.log('🔥 連續使用檢查:', { streak: additionalData?.streak, isMilestone });
      return isMilestone;
      
    case NATIVE_RATING_CONFIG.TRIGGERS.FEATURE_EXPLORED:
      // 功能探索完成
      const hasExplored = additionalData?.exploredFeatures >= 2;
      console.log('🌟 功能探索檢查:', { exploredFeatures: additionalData?.exploredFeatures, hasExplored });
      return hasExplored;
      
    case NATIVE_RATING_CONFIG.TRIGGERS.SESSION_COUNT:
      // 會話數量里程碑
      const isSessionMilestone = additionalData?.sessionCount % 5 === 0;
      console.log('📚 會話數量檢查:', { sessionCount: additionalData?.sessionCount, isSessionMilestone });
      return isSessionMilestone;
      
    default:
      console.log('❌ 未知觸發條件:', trigger);
      return false;
  }
};

// 更新評分狀態
export const updateNativeRatingState = async (
  action: 'prompted' | 'rated' | 'declined' | 'session' | 'game_completed',
  additionalData?: any
): Promise<void> => {
  const state = await getNativeRatingState();
  const now = Date.now();
  const currentMonth = new Date().getMonth();
  
  console.log('📝 更新原生評分狀態:', { action, currentState: state, additionalData });
  
  switch (action) {
    case 'prompted':
      state.lastPromptDate = now;
      state.promptCount += 1;
      state.lastPromptMonth = currentMonth;
      break;
      
    case 'rated':
      state.hasRated = true;
      break;
      
    case 'declined':
      // 拒絕時不更新計數，但記錄時間
      state.lastPromptDate = now;
      break;
      
    case 'session':
      // 檢查是否為新的一天
      if (!state.lastSessionDate || 
          new Date(state.lastSessionDate).getDate() !== new Date(now).getDate()) {
        state.sessionCount += 1;
      }
      state.lastSessionDate = now;
      break;
      
    case 'game_completed':
      state.totalGamesPlayed += 1;
      if (additionalData?.score) {
        state.totalScore += additionalData.score;
      }
      break;
  }
  
  console.log('📝 更新後的狀態:', state);
  await saveNativeRatingState(state);
};

// 顯示原生評分對話框
// 使用 Apple 官方的 SKStoreReviewController
// 優點：
// 1. 用戶不會離開應用
// 2. 評分會真實反映在 App Store
// 3. 使用系統原生的評分對話框
// 4. 更好的用戶體驗
export const showNativeRating = async (
  trigger: string,
  additionalData?: any
): Promise<void> => {
  console.log('🚀 開始顯示原生評分:', { trigger, additionalData });
  
  // 檢查是否應該顯示
  const shouldShow = await shouldShowNativeRating(trigger, additionalData);
  console.log('✅ 是否應該顯示原生評分:', shouldShow);
  
  if (!shouldShow) {
    console.log('❌ 不顯示原生評分');
    return;
  }
  
  // 更新狀態
  await updateNativeRatingState('prompted');
  
  try {
    console.log('📱 顯示原生評分對話框');
    
    // 顯示原生評分對話框
    await requestReview();
    
    console.log('✅ 原生評分對話框顯示成功');
    
    // 標記為已評分（用戶可能已經評分了）
    await updateNativeRatingState('rated');
    
  } catch (error) {
    console.error('❌ 顯示原生評分失敗:', error);
    // 即使失敗也標記為已提示，避免重複提示
    await updateNativeRatingState('declined');
  }
};

// 檢查原生評分是否可用
export const checkNativeRatingAvailability = (): boolean => {
  const available = isAvailable();
  console.log('🔍 原生評分可用性檢查:', available);
  return available;
};

// 測試函數 - 直接顯示原生評分，跳過所有條件檢查
export const testNativeRating = async (): Promise<void> => {
  console.log('🧪 執行測試原生評分');
  
  if (!isAvailable()) {
    console.log('❌ 原生評分不可用，無法測試');
    return;
  }
  
  try {
    console.log('📱 顯示測試原生評分對話框');
    await requestReview();
    console.log('✅ 測試原生評分成功');
  } catch (error) {
    console.error('❌ 測試原生評分失敗:', error);
  }
};
