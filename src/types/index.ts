/**
 * 核心類型定義 - Kana Tower
 * 定義了應用程式中使用的所有主要類型和介面
 */

// ============================================================================
// 基礎類型
// ============================================================================

export type GameMode = 'infinite' | 'practice' | 'daily_challenge';
export type DifficultyLevel = 'beginner' | 'normal' | 'hard' | 'expert' | 'adaptive';
export type GameStatus = 'idle' | 'playing' | 'paused' | 'finished' | 'game_over';
export type InputType = 'hiragana' | 'katakana' | 'kanji' | 'mixed' | 'romaji' | 'unknown';
export type VocabularyTheme = 'jlpt_n5' | 'jlpt_n4' | 'jlpt_n3' | 'jlpt_n2' | 'jlpt_n1' 
  | 'anime' | 'business' | 'travel' | 'food' | 'seasonal' | 'custom';
export type PlayerType = 'expert' | 'fast_learner' | 'perfectionist' | 'speed_focused' | 'balanced';
export type IMEStatus = 'enabled' | 'disabled' | 'unknown';
export type Season = 'spring' | 'summer' | 'autumn' | 'winter';
export type TimeOfDay = 'morning' | 'day' | 'evening' | 'night';

// ============================================================================
// 遊戲相關類型
// ============================================================================

export interface Position {
  x: number;
  y: number;
}

export interface Velocity {
  x: number;
  y: number;
}

export interface Word {
  id: string;
  text: string;
  reading?: string;
  meaning?: string;
  difficulty: number;
  theme: VocabularyTheme;
  jlptLevel?: 'n1' | 'n2' | 'n3' | 'n4' | 'n5';
  frequency: number;
}

export interface Bubble {
  id: string;
  word: Word;
  position: Position;
  velocity: Velocity;
  size: number;
  color: string;
  isVisible: boolean;
  createdAt: number;
  timeToLive: number;
}

export interface GameSession {
  id: string;
  mode: GameMode;
  startTime: number;
  endTime?: number;
  score: number;
  wordsTyped: number;
  correctWords: number;
  totalCharacters: number;
  correctCharacters: number;
  wpm: number;
  accuracy: number;
  maxCombo: number;
  difficulty: DifficultyLevel;
  vocabulary: VocabularyTheme[];
  achievements: string[];
}

export interface ScoreState {
  current: number;
  combo: number;
  maxCombo: number;
  multiplier: number;
  lives: number;
  maxLives: number;
}

export interface InputState {
  current: string;
  target: string;
  isComposing: boolean;
  lastInputTime: number;
  inputHistory: InputEvent[];
}

export interface InputEvent {
  timestamp: number;
  input: string;
  target: string;
  isCorrect: boolean;
  timeTaken: number;
  inputMethod: string;
}

// ============================================================================
// 使用者相關類型
// ============================================================================

export interface UserProfile {
  id: string;
  name: string;
  level: number;
  experience: number;
  totalScore: number;
  gamesPlayed: number;
  averageWPM: number;
  averageAccuracy: number;
  preferredMode: GameMode;
  preferredDifficulty: DifficultyLevel;
  createdAt: number;
  lastPlayedAt: number;
  streak: number;
  longestStreak: number;
}

export interface UserProgress {
  masteredWords: Set<string>;
  weakWords: Set<string>;
  levelProgress: Record<VocabularyTheme, number>;
  skillMetrics: SkillMetrics;
  achievements: Achievement[];
  badges: Badge[];
}

export interface SkillMetrics {
  typingSpeed: {
    current: number;
    average: number;
    peak: number;
    trend: number[];
  };
  accuracy: {
    overall: number;
    byCharacter: Map<string, number>;
    byWordLength: Map<number, number>;
    byTimeOfDay: Record<TimeOfDay, number>;
  };
  consistency: {
    sessionVariance: number;
    improvementRate: number;
    learningCurve: number[];
  };
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlockedAt?: number;
  progress?: number;
  maxProgress?: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  earnedAt: number;
}

// ============================================================================
// 設定相關類型
// ============================================================================

export interface GameSettings {
  audio: AudioSettings;
  visual: VisualSettings;
  gameplay: GameplaySettings;
  accessibility: AccessibilitySettings;
  language: LanguageSettings;
}

export interface AudioSettings {
  masterVolume: number;
  sfxVolume: number;
  musicVolume: number;
  voiceVolume: number;
  enableHaptics: boolean;
  enableSpeech: boolean;
}

export interface VisualSettings {
  theme: 'light' | 'dark' | 'auto' | 'seasonal';
  fontSize: 'small' | 'medium' | 'large' | 'extra_large';
  highContrast: boolean;
  reducedMotion: boolean;
  showParticles: boolean;
  particleCount: number;
}

export interface GameplaySettings {
  defaultMode: GameMode;
  defaultDifficulty: DifficultyLevel;
  adaptiveDifficulty: boolean;
  vocabularyThemes: VocabularyTheme[];
  inputValidation: 'strict' | 'lenient' | 'auto_correct';
  showHints: boolean;
  pauseOnBackground: boolean;
}

export interface AccessibilitySettings {
  voiceOver: boolean;
  screenReader: boolean;
  colorBlindSupport: boolean;
  motorAccessibility: boolean;
  cognitiveSupport: boolean;
  japaneseVoiceGuide: boolean;
  furiganaSupport: boolean;
}

export interface LanguageSettings {
  uiLanguage: 'en' | 'ja' | 'ko' | 'zh_tw' | 'zh_cn';
  inputLanguage: 'ja';
  voiceLanguage: 'ja' | 'en';
  showRomaji: boolean;
  showEnglishMeaning: boolean;
}

// ============================================================================
// 分析相關類型
// ============================================================================

export interface GameAnalytics {
  sessions: GameSession[];
  performanceMetrics: PerformanceMetrics;
  learningInsights: LearningInsight[];
  engagementMetrics: EngagementMetrics;
  retentionMetrics: RetentionMetrics;
}

export interface PerformanceMetrics {
  accuracy: number;
  speed: number;
  consistency: number;
  engagement: number;
  frustrationLevel: number;
  flowState: number;
  learningCurve: number;
}

export interface LearningInsight {
  type: 'improvement' | 'achievement' | 'pattern' | 'recommendation';
  title: string;
  description: string;
  confidence: number;
  actionable: boolean;
  recommendation?: string;
  celebratory?: boolean;
}

export interface EngagementMetrics {
  sessionFrequency: number;
  averageSessionLength: number;
  retentionRate: number;
  featureUsage: Record<string, number>;
  dropOffPoints: string[];
}

export interface RetentionMetrics {
  d1: number;
  d7: number;
  d30: number;
  dailyStreak: number;
  weeklyActivity: number[];
  monthlyActivity: number[];
}

// ============================================================================
// UI/UX相關類型
// ============================================================================

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  accent: string;
  success: string;
  warning: string;
  error: string;
  overlay: string;
  border: string;
}

export interface Animation {
  name: string;
  duration: number;
  easing: string;
  delay?: number;
  iterations?: number;
}

export interface Particle {
  id: string;
  position: Position;
  velocity: Velocity;
  color: string;
  size: number;
  life: number;
  decay: number;
  type: 'bubble_pop' | 'combo' | 'achievement' | 'ambient';
}

// ============================================================================
// 多人遊戲類型
// ============================================================================

export interface MultiplayerSession {
  id: string;
  players: Player[];
  mode: 'speed_typing' | 'survival' | 'word_race';
  status: 'waiting' | 'playing' | 'finished';
  startTime: number;
  endTime?: number;
  wordSequence: Word[];
  syncedRandomSeed: string;
}

export interface Player {
  id: string;
  name: string;
  avatar: string;
  score: number;
  wpm: number;
  accuracy: number;
  isOnline: boolean;
  position: Position;
  currentInput: string;
  activeBubbles: string[];
  skillLevel: number;
}

// ============================================================================
// 錯誤處理類型
// ============================================================================

export interface AppError {
  code: string;
  message: string;
  stack?: string;
  timestamp: number;
  context?: Record<string, unknown>;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export interface InputValidationResult {
  isValid: boolean;
  type: InputType;
  confidence: number;
  errors: string[];
  suggestions: string[];
}

// ============================================================================
// 導出所有類型 (其他類型定義檔案將在專案發展過程中逐步添加)
// ============================================================================ 