import { useState, useCallback } from 'react';
import type { GameMode, GameStatus } from '@/types';

// ============================================================================
// 遊戲狀態介面
// ============================================================================

export interface GameState {
  mode: GameMode;
  status: GameStatus;
  score: number;
  combo: number;
  lives: number;
  currentWord: string;
  userInput: string;
  gameTime: number;
}

// ============================================================================
// 遊戲設定介面
// ============================================================================

export interface GameSettings {
  volume: number;
  difficulty: 'easy' | 'normal' | 'hard';
  theme: 'light' | 'dark' | 'seasonal';
  enableHaptics: boolean;
}

// ============================================================================
// 遊戲狀態Hook
// ============================================================================

export const useGameStore = () => {
  const [gameState, setGameState] = useState<GameState>({
    mode: 'classic',
    status: 'idle',
    score: 0,
    combo: 0,
    lives: 3,
    currentWord: '',
    userInput: '',
    gameTime: 0,
  });

  const [settings, setSettings] = useState<GameSettings>({
    volume: 0.8,
    difficulty: 'normal',
    theme: 'seasonal',
    enableHaptics: true,
  });

  // 遊戲動作
  const startGame = useCallback((mode: GameMode) => {
    setGameState(prev => ({
      ...prev,
      mode,
      status: 'playing',
      score: 0,
      combo: 0,
      lives: 3,
      userInput: '',
      gameTime: 0,
    }));
  }, []);

  const endGame = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      status: 'finished',
    }));
  }, []);

  const updateScore = useCallback((points: number) => {
    setGameState(prev => ({
      ...prev,
      score: prev.score + points,
    }));
  }, []);

  const updateCombo = useCallback((combo: number) => {
    setGameState(prev => ({
      ...prev,
      combo,
    }));
  }, []);

  const updateLives = useCallback((lives: number) => {
    setGameState(prev => {
      const newLives = Math.max(0, lives);
      return {
        ...prev,
        lives: newLives,
        status: newLives === 0 ? 'finished' : prev.status,
      };
    });
  }, []);

  const setCurrentWord = useCallback((word: string) => {
    setGameState(prev => ({
      ...prev,
      currentWord: word,
    }));
  }, []);

  const setUserInput = useCallback((input: string) => {
    setGameState(prev => ({
      ...prev,
      userInput: input,
    }));
  }, []);

  const updateGameTime = useCallback((time: number) => {
    setGameState(prev => ({
      ...prev,
      gameTime: time,
    }));
  }, []);

  const pauseGame = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      status: prev.status === 'playing' ? 'paused' : 'playing',
    }));
  }, []);

  // 設定動作
  const updateSettings = useCallback((newSettings: Partial<GameSettings>) => {
    setSettings(prev => ({
      ...prev,
      ...newSettings,
    }));
  }, []);

  const resetGame = useCallback(() => {
    setGameState({
      mode: 'classic',
      status: 'idle',
      score: 0,
      combo: 0,
      lives: 3,
      currentWord: '',
      userInput: '',
      gameTime: 0,
    });
  }, []);

  return {
    // 狀態
    gameState,
    settings,
    
    // 動作
    startGame,
    endGame,
    updateScore,
    updateCombo,
    updateLives,
    setCurrentWord,
    setUserInput,
    updateGameTime,
    pauseGame,
    updateSettings,
    resetGame,
    
    // 計算屬性
    isGameActive: gameState.status === 'playing',
    isGamePaused: gameState.status === 'paused',
    isGameFinished: gameState.status === 'finished',
  };
};

// ============================================================================
// 詞彙管理
// ============================================================================

export const sampleWords = [
  'あい', 'いえ', 'うみ', 'えき', 'おと',
  'かお', 'きもの', 'くも', 'こえ', 'さくら',
  'しお', 'すし', 'せかい', 'そら', 'つき',
  'ともだち', 'なまえ', 'にほん', 'ねこ', 'はな',
  'ひと', 'ふね', 'へや', 'ほし', 'まち',
  'みず', 'やま', 'ゆめ', 'よる', 'わたし',
  'がっこう', 'せんせい', 'がくせい', 'ありがとう'
];

export const getRandomWord = (): string => {
  const index = Math.floor(Math.random() * sampleWords.length);
  return sampleWords[index] || 'あい'; // 確保返回值不為undefined
}; 