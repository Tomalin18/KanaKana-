import { Alert, Linking, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';

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
  
  // 頻率控制 - 生產環境設定
  MIN_DAYS_BETWEEN_PROMPTS: 7, // 最少間隔7天
  MAX_PROMPTS_PER_MONTH: 3,    // 每月最多3次
  MIN_SESSIONS_BEFORE_FIRST: 5, // 至少使用5次才提示
  
  // 評分 URL - 使用實際的 KanaKana App Store 連結
  APP_STORE_URL: Platform.select({
    ios: 'https://apps.apple.com/tw/app/kanakana-%E3%81%8B%E3%81%AA%E3%82%AB%E3%83%8A/id6748865873?action=write-review',
    android: 'market://details?id=com.kanakana.app&showAllReviews=true',
  }),
  
  // 備用 URL
  FALLBACK_URL: Platform.select({
    ios: 'https://apps.apple.com/tw/app/kanakana-%E3%81%8B%E3%81%AA%E3%82%AB%E3%83%8A/id6748865873',
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
      // 遊戲完成時，檢查表現是否良好
      const hasGoodPerformance = additionalData?.score > 1000 || additionalData?.accuracy > 0.9;
      console.log('🎯 遊戲完成檢查:', { score: additionalData?.score, accuracy: additionalData?.accuracy, hasGoodPerformance });
      return hasGoodPerformance;
      
    case RATING_CONFIG.TRIGGERS.STREAK_MILESTONE:
      // 連續使用里程碑
      const isMilestone = additionalData?.streak >= 7 || additionalData?.streak % 10 === 0;
      console.log('🔥 連續使用檢查:', { streak: additionalData?.streak, isMilestone });
      return isMilestone;
      
    case RATING_CONFIG.TRIGGERS.FEATURE_EXPLORED:
      // 功能探索完成
      const hasExplored = additionalData?.exploredFeatures >= 3;
      console.log('🌟 功能探索檢查:', { exploredFeatures: additionalData?.exploredFeatures, hasExplored });
      return hasExplored;
      
    case RATING_CONFIG.TRIGGERS.SESSION_COUNT:
      // 會話數量里程碑
      const isSessionMilestone = additionalData?.sessionCount % 10 === 0;
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
  
  // 根據觸發條件選擇不同的標題，但統一使用相同的訊息
  const getPromptContent = () => {
    const t = i18next.t;
    const unifiedMessage = t('ratingPrompt.unifiedMessage');
    
    switch (trigger) {
      case RATING_CONFIG.TRIGGERS.ACHIEVEMENT_UNLOCKED:
        return {
          title: t('ratingPrompt.achievementUnlocked'),
          message: unifiedMessage,
        };
        
      case RATING_CONFIG.TRIGGERS.GAME_COMPLETED:
        return {
          title: t('ratingPrompt.gameCompleted'),
          message: unifiedMessage,
        };
        
      case RATING_CONFIG.TRIGGERS.STREAK_MILESTONE:
        return {
          title: t('ratingPrompt.streakMilestone'),
          message: unifiedMessage,
        };
        
      case RATING_CONFIG.TRIGGERS.FEATURE_EXPLORED:
        return {
          title: t('ratingPrompt.featureExplored'),
          message: unifiedMessage,
        };
        
      case RATING_CONFIG.TRIGGERS.SESSION_COUNT:
        return {
          title: t('ratingPrompt.sessionCount'),
          message: unifiedMessage,
        };
        
      default:
        return {
          title: t('ratingPrompt.defaultTitle'),
          message: unifiedMessage,
        };
    }
  };
  
  const { title, message } = getPromptContent();
  const t = i18next.t;
  
  console.log('📱 顯示評分提示對話框:', { title, message });
  
  // 顯示原生 Alert
  Alert.alert(
    title,
    message,
    [
      {
        text: t('ratingPrompt.later'),
        style: 'cancel',
        onPress: async () => {
          console.log('👤 用戶選擇稍後再說');
          await updateRatingState('declined');
        },
      },
      {
        text: t('ratingPrompt.rateNow'),
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
  
  const t = i18next.t;
  const { title, message } = {
    title: t('ratingPrompt.testTitle'),
    message: t('ratingPrompt.unifiedMessage'),
  };
  
  console.log('📱 顯示測試評分提示對話框:', { title, message });
  
  // 顯示原生 Alert
  Alert.alert(
    title,
    message,
    [
      {
        text: t('ratingPrompt.later'),
        style: 'cancel',
        onPress: async () => {
          console.log('👤 測試：用戶選擇稍後再說');
        },
      },
      {
        text: t('ratingPrompt.rateNow'),
        onPress: async () => {
          console.log('👤 測試：用戶選擇立即評價');
          await openAppStoreRating();
        },
      },
    ],
    { cancelable: true }
  );
};
