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
  
  // 頻率控制
  MIN_DAYS_BETWEEN_PROMPTS: 7, // 最少間隔7天
  MAX_PROMPTS_PER_MONTH: 3,    // 每月最多3次
  MIN_SESSIONS_BEFORE_FIRST: 5, // 至少使用5次才提示
  
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

// 檢查是否應該顯示評分提示
export const shouldShowRatingPrompt = async (
  trigger: string,
  additionalData?: any
): Promise<boolean> => {
  const state = await getRatingState();
  const now = Date.now();
  const currentMonth = new Date().getMonth();
  
  // 如果已經評分過，不再提示
  if (state.hasRated) {
    return false;
  }
  
  // 檢查時間間隔
  if (state.lastPromptDate) {
    const daysSinceLastPrompt = (now - state.lastPromptDate) / (1000 * 60 * 60 * 24);
    if (daysSinceLastPrompt < RATING_CONFIG.MIN_DAYS_BETWEEN_PROMPTS) {
      return false;
    }
  }
  
  // 檢查月度限制
  if (state.lastPromptMonth === currentMonth && state.promptCount >= RATING_CONFIG.MAX_PROMPTS_PER_MONTH) {
    return false;
  }
  
  // 檢查會話數量
  if (state.sessionCount < RATING_CONFIG.MIN_SESSIONS_BEFORE_FIRST) {
    return false;
  }
  
  // 根據觸發條件進行額外檢查
  switch (trigger) {
    case RATING_CONFIG.TRIGGERS.ACHIEVEMENT_UNLOCKED:
      // 成就解鎖時，檢查是否為重要成就
      return additionalData?.achievementType === 'rare' || additionalData?.achievementType === 'epic';
      
    case RATING_CONFIG.TRIGGERS.GAME_COMPLETED:
      // 遊戲完成時，檢查表現是否良好
      return additionalData?.score > 1000 || additionalData?.accuracy > 0.9;
      
    case RATING_CONFIG.TRIGGERS.STREAK_MILESTONE:
      // 連續使用里程碑
      return additionalData?.streak >= 7 || additionalData?.streak % 10 === 0;
      
    case RATING_CONFIG.TRIGGERS.FEATURE_EXPLORED:
      // 功能探索完成
      return additionalData?.exploredFeatures >= 3;
      
    case RATING_CONFIG.TRIGGERS.SESSION_COUNT:
      // 會話數量里程碑
      return additionalData?.sessionCount % 10 === 0;
      
    default:
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
  
  await saveRatingState(state);
};

// 打開 App Store 評分頁面
export const openAppStoreRating = async (): Promise<void> => {
  try {
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
  // 檢查是否應該顯示
  const shouldShow = await shouldShowRatingPrompt(trigger, additionalData);
  if (!shouldShow) {
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
  
  // 顯示原生 Alert
  Alert.alert(
    title,
    message,
    [
      {
        text: '稍後再說',
        style: 'cancel',
        onPress: async () => {
          await updateRatingState('declined');
        },
      },
      {
        text: '立即評價',
        onPress: async () => {
          await openAppStoreRating();
        },
      },
    ],
    { cancelable: true }
  );
};
