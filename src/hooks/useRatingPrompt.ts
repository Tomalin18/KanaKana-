import { useCallback } from 'react';
import { showRatingPrompt, updateRatingState } from '@/utils/ratingPrompt';

export const useRatingPrompt = () => {
  // 成就解鎖時觸發
  const triggerOnAchievement = useCallback(async (achievementType: string, achievementName: string) => {
    await showRatingPrompt('achievement_unlocked', {
      achievementType,
      achievementName,
    });
  }, []);

  // 遊戲完成時觸發
  const triggerOnGameCompleted = useCallback(async (score: number, accuracy: number, mode: string) => {
    await showRatingPrompt('game_completed', {
      score,
      accuracy,
      mode,
    });
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
