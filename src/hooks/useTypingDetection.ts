import { useState, useCallback } from 'react';
import { validateJapaneseInput } from '@/utils/japaneseInput';

export interface TypingDetectionConfig {
  onCorrect: (word: string, score: number) => void;
  onError: () => void;
  onComplete?: () => void;
  baseScoreMultiplier?: number;
  comboMultiplier?: number;
}

export interface TypingState {
  userInput: string;
  combo: number;
  score: number;
  isTyping: boolean;
}

export const useTypingDetection = (
  targetWord: string,
  config: TypingDetectionConfig
) => {
  const [userInput, setUserInput] = useState('');
  const [combo, setCombo] = useState(0);
  const [score, setScore] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const {
    onCorrect,
    onError,
    onComplete,
    baseScoreMultiplier = 10,
    comboMultiplier = 1
  } = config;

  const handleInputChange = useCallback((text: string) => {
    setUserInput(text);
    setIsTyping(text.length > 0);

    if (!targetWord) return;

    // 跟 Tetris mode 一樣，直接比對
    if (text === targetWord) {
      const baseScore = targetWord.length * baseScoreMultiplier;
      const comboBonus = combo * comboMultiplier;
      const totalScore = baseScore + comboBonus;

      setScore(prev => prev + totalScore);
      setCombo(prev => prev + 1);
      setUserInput('');
      setIsTyping(false);

      onCorrect(targetWord, totalScore);
      if (onComplete) onComplete();
    }
    // 其餘情況不做任何進階判斷
  }, [targetWord, combo, onCorrect, onError, onComplete, baseScoreMultiplier, comboMultiplier]);

  const resetState = useCallback(() => {
    setUserInput('');
    setCombo(0);
    setScore(0);
    setIsTyping(false);
  }, []);

  const resetCombo = useCallback(() => {
    setCombo(0);
  }, []);

  return {
    userInput,
    combo,
    score,
    isTyping,
    handleInputChange,
    resetState,
    resetCombo,
    setScore
  };
}; 