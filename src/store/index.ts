import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';
import type { 
  GameMode, 
  GameStatus, 
  GameSettings,
  UserProfile,
  Word 
} from '@/types';

// ============================================================================
// 遊戲狀態介面
// ============================================================================

interface GameState {
  mode: GameMode;
  status: GameStatus;
  score: number;
  combo: number;
  lives: number;
  currentWord: Word | null;
  userInput: string;
  gameTime: number;
  bubblesActive: number;
}

interface AppState {
  // 遊戲狀態
  game: GameState;
  
  // 用戶資料
  user: UserProfile | null;
  
  // 應用設定
  settings: GameSettings;
  
  // 是否已初始化
  isInitialized: boolean;
}

interface AppActions {
  // 遊戲動作
  startGame: (mode: GameMode) => void;
  endGame: () => void;
  updateScore: (points: number) => void;
  updateCombo: (combo: number) => void;
  updateLives: (lives: number) => void;
  setCurrentWord: (word: Word | null) => void;
  setUserInput: (input: string) => void;
  updateGameTime: (time: number) => void;
  
  // 用戶動作
  setUser: (user: UserProfile) => void;
  updateUserStats: (stats: Partial<UserProfile>) => void;
  
  // 設定動作
  updateSettings: (settings: Partial<GameSettings>) => void;
  
  // 應用動作
  setInitialized: (initialized: boolean) => void;
  reset: () => void;
}

// ============================================================================
// 初始狀態
// ============================================================================

const initialGameState: GameState = {
  mode: 'classic',
  status: 'idle',
  score: 0,
  combo: 0,
  lives: 3,
  currentWord: null,
  userInput: '',
  gameTime: 0,
  bubblesActive: 0,
};

const initialSettings: GameSettings = {
  audio: {
    masterVolume: 0.8,
    sfxVolume: 0.7,
    musicVolume: 0.5,
    voiceVolume: 0.8,
    enableHaptics: true,
    enableSpeech: false,
  },
  visual: {
    theme: 'seasonal',
    fontSize: 'medium',
    highContrast: false,
    reducedMotion: false,
    showParticles: true,
    particleCount: 30,
  },
  gameplay: {
    defaultMode: 'classic',
    defaultDifficulty: 'normal',
    adaptiveDifficulty: true,
    vocabularyThemes: ['jlpt_n5'],
    inputValidation: 'lenient',
    showHints: true,
    pauseOnBackground: true,
  },
  accessibility: {
    voiceOver: false,
    screenReader: false,
    colorBlindSupport: false,
    motorAccessibility: false,
    cognitiveSupport: false,
    japaneseVoiceGuide: false,
    furiganaSupport: false,
  },
  language: {
    uiLanguage: 'zh_tw',
    inputLanguage: 'ja',
    voiceLanguage: 'ja',
    showRomaji: false,
    showEnglishMeaning: true,
  },
};

// ============================================================================
// Zustand Store
// ============================================================================

export const useAppStore = create<AppState & AppActions>()(
  persist(
    immer((set) => ({
      // 初始狀態
      game: initialGameState,
      user: null,
      settings: initialSettings,
      isInitialized: false,

      // 遊戲動作
      startGame: (mode: GameMode) => 
        set((state) => {
          state.game.mode = mode;
          state.game.status = 'playing';
          state.game.score = 0;
          state.game.combo = 0;
          state.game.lives = 3;
          state.game.userInput = '';
          state.game.gameTime = 0;
          state.game.bubblesActive = 0;
        }),

      endGame: () =>
        set((state) => {
          state.game.status = 'finished';
        }),

      updateScore: (points: number) =>
        set((state) => {
          state.game.score += points;
        }),

      updateCombo: (combo: number) =>
        set((state) => {
          state.game.combo = combo;
        }),

      updateLives: (lives: number) =>
        set((state) => {
          state.game.lives = Math.max(0, lives);
          if (state.game.lives === 0 && state.game.status === 'playing') {
            state.game.status = 'finished';
          }
        }),

      setCurrentWord: (word: Word | null) =>
        set((state) => {
          state.game.currentWord = word;
        }),

      setUserInput: (input: string) =>
        set((state) => {
          state.game.userInput = input;
        }),

      updateGameTime: (time: number) =>
        set((state) => {
          state.game.gameTime = time;
        }),

      // 用戶動作
      setUser: (user: UserProfile) =>
        set((state) => {
          state.user = user;
        }),

      updateUserStats: (stats: Partial<UserProfile>) =>
        set((state) => {
          if (state.user) {
            Object.assign(state.user, stats);
          }
        }),

      // 設定動作
      updateSettings: (newSettings: Partial<GameSettings>) =>
        set((state) => {
          // 深度合併設定
          Object.keys(newSettings).forEach((key) => {
            const settingKey = key as keyof GameSettings;
            if (typeof newSettings[settingKey] === 'object') {
              Object.assign(state.settings[settingKey], newSettings[settingKey]);
            } else {
              (state.settings as any)[settingKey] = newSettings[settingKey];
            }
          });
        }),

      // 應用動作
      setInitialized: (initialized: boolean) =>
        set((state) => {
          state.isInitialized = initialized;
        }),

      reset: () =>
        set((state) => {
          state.game = { ...initialGameState };
          state.user = null;
          state.settings = { ...initialSettings };
          state.isInitialized = false;
        }),
    })),
    {
      name: 'kana-tower-store', // 本地存儲的鍵名
      partialize: (state) => ({
        user: state.user,
        settings: state.settings,
        isInitialized: state.isInitialized,
        // 不持久化遊戲狀態，每次重新開始
      }),
    }
  )
);

// ============================================================================
// 選擇器 (Selectors)
// ============================================================================

export const useGameState = () => useAppStore((state) => state.game);
export const useUserProfile = () => useAppStore((state) => state.user);
export const useSettings = () => useAppStore((state) => state.settings);
export const useIsInitialized = () => useAppStore((state) => state.isInitialized);

// 遊戲狀態選擇器
export const useIsGameActive = () => 
  useAppStore((state) => state.game.status === 'playing');

export const useGameScore = () => 
  useAppStore((state) => ({
    score: state.game.score,
    combo: state.game.combo,
    lives: state.game.lives,
  }));

export const useCurrentWord = () => 
  useAppStore((state) => state.game.currentWord);

export const useUserInput = () => 
  useAppStore((state) => state.game.userInput);

// 設定選擇器
export const useAudioSettings = () => 
  useAppStore((state) => state.settings.audio);

export const useVisualSettings = () => 
  useAppStore((state) => state.settings.visual);

export const useGameplaySettings = () => 
  useAppStore((state) => state.settings.gameplay);

export const useLanguageSettings = () => 
  useAppStore((state) => state.settings.language); 