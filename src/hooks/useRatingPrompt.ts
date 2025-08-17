import { useCallback } from 'react';
import { showRatingPrompt, updateRatingState } from '@/utils/ratingPrompt';
import { showNativeRating, updateNativeRatingState, checkNativeRatingAvailability } from '@/utils/nativeRating';

export const useRatingPrompt = () => {
  // 成就解鎖時觸發
  const triggerOnAchievement = useCallback(async (achievementType: string, achievementName: string) => {
    await showRatingPrompt('achievement_unlocked', {
      achievementType,
      achievementName,
    });
  }, []);

  // 遊戲完成時觸發
  const triggerOnGameCompleted = useCallback(async (score: number, accuracy: number, mode: string, gameTime?: number, additionalData?: any) => {
    console.log('🚀 useRatingPrompt: triggerOnGameCompleted 被調用:', { score, accuracy, mode, gameTime, additionalData });
    
    // 檢查原生評分是否可用
    const nativeAvailable = checkNativeRatingAvailability();
    console.log('🔍 原生評分可用性:', nativeAvailable);
    
    try {
      if (nativeAvailable) {
        // 優先使用原生評分
        console.log('📱 使用原生評分對話框');
        await showNativeRating('game_completed', {
          score,
          accuracy,
          mode,
          gameTime: gameTime || 0,
          ...additionalData, // 傳遞額外的遊戲數據
        });
      } else {
        // 回退到自定義評分提示
        console.log('📱 使用自定義評分提示');
        await showRatingPrompt('game_completed', {
          score,
          accuracy,
          mode,
        });
      }
      console.log('✅ useRatingPrompt: 評分提示調用成功');
    } catch (error) {
      console.error('❌ useRatingPrompt: 評分提示調用失敗:', error);
    }
  }, []);

  // 連續使用里程碑觸發
  const triggerOnStreakMilestone = useCallback(async (streak: number) => {
    await showRatingPrompt('streak_milestone', {
      streak,
    });
  }, []);

  // 功能探索完成觸發
  const triggerOnFeatureExplored = useCallback(async (exploredFeatures: number) => {
    await showRatingPrompt('feature_explored', {
      exploredFeatures,
    });
  }, []);

  // 會話數量里程碑觸發
  const triggerOnSessionCount = useCallback(async (sessionCount: number) => {
    await showRatingPrompt('session_count', {
      sessionCount,
    });
  }, []);

  // 記錄會話
  const recordSession = useCallback(async () => {
    await updateRatingState('session');
    await updateNativeRatingState('session');
  }, []);

  return {
    triggerOnAchievement,
    triggerOnGameCompleted,
    triggerOnStreakMilestone,
    triggerOnFeatureExplored,
    triggerOnSessionCount,
    recordSession,
  };
};
