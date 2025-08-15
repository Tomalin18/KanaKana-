import { Alert, Linking, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 評分提示配置
const RATING_CONFIG = {
  // 觸發條件
  TRIGGERS: {
    ACHIEVEMENT_UNLOCKED: 'achievement_unlocked',
    GAME_COMPLETED: 'game_completed',
    STREAK_MILESTONE: 'streak_milestone',
    FEATURE_EXPLORED: 'feature_explored',
    SESSION_COUNT: 'session_count',
  },
  
  // 頻率控制 - 簡化為測試模式
  MIN_DAYS_BETWEEN_PROMPTS: 0, // 測試時設為0，允許立即觸發
  MAX_PROMPTS_PER_MONTH: 10,   // 測試時增加限制
  MIN_SESSIONS_BEFORE_FIRST: 1, // 測試時設為1，允許立即觸發
  
  // 評分 URL (需要替換為實際的 App ID)
  APP_STORE_URL: Platform.select({
    ios: 'https://apps.apple.com/app/id1234567890?action=write-review',
    android: 'market://details?id=com.kanakana.app&showAllReviews=true',
  }),
  
  // 備用 URL
  FALLBACK_URL: Platform.select({
    ios: 'https://apps.apple.com/app/id1234567890',
    android: 'https://play.google.com/store/apps/details?id=com.kanakana.app',
  }),
} as const;

// 評分狀態介面
interface RatingState {
  lastPromptDate: number | null;
  promptCount: number;
  lastPromptMonth: number | null;
  hasRated: boolean;
  sessionCount: number;
  lastSessionDate: number | null;
}

// 獲取評分狀態
export const getRatingState = async (): Promise<RatingState> => {
  try {
    const stored = await AsyncStorage.getItem('rating_prompt_state');
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to get rating state:', error);
  }
  
  return {
    lastPromptDate: null,
    promptCount: 0,
    lastPromptMonth: null,
    hasRated: false,
    sessionCount: 0,
    lastSessionDate: null,
  };
};

// 保存評分狀態
export const saveRatingState = async (state: RatingState): Promise<void> => {
  try {
    await AsyncStorage.setItem('rating_prompt_state', JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save rating state:', error);
  }
};

// 檢查是否應該顯示評分提示 - 簡化版本
export const shouldShowRatingPrompt = async (
  trigger: string,
  additionalData?: any
): Promise<boolean> => {
  const state = await getRatingState();
  const now = Date.now();
  const currentMonth = new Date().getMonth();
  
  console.log('🔍 檢查評分提示條件:', {
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
    if (daysSinceLastPrompt < RATING_CONFIG.MIN_DAYS_BETWEEN_PROMPTS) {
      console.log('❌ 時間間隔太短:', daysSinceLastPrompt, '天');
      return false;
    }
  }
  
  // 檢查月度限制
  if (state.lastPromptMonth === currentMonth && state.promptCount >= RATING_CONFIG.MAX_PROMPTS_PER_MONTH) {
    console.log('❌ 本月提示次數已達上限:', state.promptCount);
    return false;
  }
  
  // 檢查會話數量
  if (state.sessionCount < RATING_CONFIG.MIN_SESSIONS_BEFORE_FIRST) {
    console.log('❌ 會話數量不足:', state.sessionCount);
    return false;
  }
  
  // 根據觸發條件進行額外檢查 - 簡化條件
  switch (trigger) {
    case RATING_CONFIG.TRIGGERS.ACHIEVEMENT_UNLOCKED:
      // 成就解鎖時，檢查是否為重要成就
      const isImportantAchievement = additionalData?.achievementType === 'rare' || additionalData?.achievementType === 'epic';
      console.log('🎉 成就解鎖檢查:', { achievementType: additionalData?.achievementType, isImportant: isImportantAchievement });
      return isImportantAchievement;
      
    case RATING_CONFIG.TRIGGERS.GAME_COMPLETED:
      // 遊戲完成時，檢查表現是否良好 - 降低門檻
      const hasGoodPerformance = additionalData?.score > 500 || additionalData?.accuracy > 0.7;
      console.log('🎯 遊戲完成檢查:', { score: additionalData?.score, accuracy: additionalData?.accuracy, hasGoodPerformance });
      return hasGoodPerformance;
      
    case RATING_CONFIG.TRIGGERS.STREAK_MILESTONE:
      // 連續使用里程碑 - 降低門檻
      const isMilestone = additionalData?.streak >= 3 || additionalData?.streak % 5 === 0;
      console.log('🔥 連續使用檢查:', { streak: additionalData?.streak, isMilestone });
      return isMilestone;
      
    case RATING_CONFIG.TRIGGERS.FEATURE_EXPLORED:
      // 功能探索完成 - 降低門檻
      const hasExplored = additionalData?.exploredFeatures >= 2;
      console.log('🌟 功能探索檢查:', { exploredFeatures: additionalData?.exploredFeatures, hasExplored });
      return hasExplored;
      
    case RATING_CONFIG.TRIGGERS.SESSION_COUNT:
      // 會話數量里程碑 - 降低門檻
      const isSessionMilestone = additionalData?.sessionCount % 5 === 0;
      console.log('📚 會話數量檢查:', { sessionCount: additionalData?.sessionCount, isSessionMilestone });
      return isSessionMilestone;
      
    default:
      console.log('❌ 未知觸發條件:', trigger);
      return false;
  }
};

// 更新評分狀態
export const updateRatingState = async (
  action: 'prompted' | 'rated' | 'declined' | 'session'
): Promise<void> => {
  const state = await getRatingState();
  const now = Date.now();
  const currentMonth = new Date().getMonth();
  
  console.log('📝 更新評分狀態:', { action, currentState: state });
  
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
  }
  
  console.log('📝 更新後的狀態:', state);
  await saveRatingState(state);
};

// 打開 App Store 評分頁面
export const openAppStoreRating = async (): Promise<void> => {
  try {
    console.log('🔗 嘗試打開 App Store...');
    const canOpen = await Linking.canOpenURL(RATING_CONFIG.APP_STORE_URL!);
    
    if (canOpen) {
      await Linking.openURL(RATING_CONFIG.APP_STORE_URL!);
    } else {
      // 如果無法打開評分頁面，打開應用頁面
      await Linking.openURL(RATING_CONFIG.FALLBACK_URL!);
    }
    
    // 標記為已評分
    await updateRatingState('rated');
  } catch (error) {
    console.error('Failed to open App Store:', error);
    // 即使失敗也標記為已評分，避免重複提示
    await updateRatingState('rated');
  }
};

// 顯示評分提示對話框
export const showRatingPrompt = async (
  trigger: string,
  additionalData?: any
): Promise<void> => {
  console.log('🚀 開始顯示評分提示:', { trigger, additionalData });
  
  // 檢查是否應該顯示
  const shouldShow = await shouldShowRatingPrompt(trigger, additionalData);
  console.log('✅ 是否應該顯示評分提示:', shouldShow);
  
  if (!shouldShow) {
    console.log('❌ 不顯示評分提示');
    return;
  }
  
  // 更新狀態
  await updateRatingState('prompted');
  
  // 根據觸發條件選擇不同的提示文案
  const getPromptContent = () => {
    switch (trigger) {
      case RATING_CONFIG.TRIGGERS.ACHIEVEMENT_UNLOCKED:
        return {
          title: '🎉 恭喜獲得成就！',
          message: '您剛剛解鎖了一個重要成就！如果 KanaKana 對您的日語學習有幫助，請給我們一個評價吧！',
        };
        
      case RATING_CONFIG.TRIGGERS.GAME_COMPLETED:
        return {
          title: '🎯 精彩表現！',
          message: '您剛才的表現太棒了！如果喜歡這個遊戲，請在 App Store 給我們一個評價，這對我們很重要！',
        };
        
      case RATING_CONFIG.TRIGGERS.STREAK_MILESTONE:
        return {
          title: '🔥 堅持學習！',
          message: `您已經連續使用 KanaKana ${additionalData?.streak} 天了！如果這個應用對您有幫助，請給我們一個評價！`,
        };
        
      case RATING_CONFIG.TRIGGERS.FEATURE_EXPLORED:
        return {
          title: '🌟 探索完成！',
          message: '您已經體驗了 KanaKana 的主要功能！如果喜歡這個應用，請給我們一個評價，幫助更多學習者！',
        };
        
      case RATING_CONFIG.TRIGGERS.SESSION_COUNT:
        return {
          title: '📚 學習夥伴！',
          message: `您已經使用 KanaKana ${additionalData?.sessionCount} 次了！如果這個應用對您的日語學習有幫助，請給我們一個評價！`,
        };
        
      default:
        return {
          title: '⭐ 喜歡 KanaKana 嗎？',
          message: '如果 KanaKana 對您的日語學習有幫助，請給我們一個評價！您的反饋對我們很重要！',
        };
    }
  };
  
  const { title, message } = getPromptContent();
  
  console.log('📱 顯示評分提示對話框:', { title, message });
  
  // 顯示原生 Alert
  Alert.alert(
    title,
    message,
    [
      {
        text: '稍後再說',
        style: 'cancel',
        onPress: async () => {
          console.log('👤 用戶選擇稍後再說');
          await updateRatingState('declined');
        },
      },
      {
        text: '立即評價',
        onPress: async () => {
          console.log('👤 用戶選擇立即評價');
          await openAppStoreRating();
        },
      },
    ],
    { cancelable: true }
  );
};

// 測試函數 - 直接顯示評分提示，跳過所有條件檢查
export const testRatingPrompt = async (): Promise<void> => {
  console.log('🧪 執行測試評分提示');
  
  const { title, message } = {
    title: '🧪 測試評分提示',
    message: '這是一個測試評分提示，用於驗證功能是否正常工作！',
  };
  
  console.log('📱 顯示測試評分提示對話框:', { title, message });
  
  // 顯示原生 Alert
  Alert.alert(
    title,
    message,
    [
      {
        text: '稍後再說',
        style: 'cancel',
        onPress: async () => {
          console.log('👤 測試：用戶選擇稍後再說');
        },
      },
      {
        text: '立即評價',
        onPress: async () => {
          console.log('👤 測試：用戶選擇立即評價');
          await openAppStoreRating();
        },
      },
    ],
    { cancelable: true }
  );
};
