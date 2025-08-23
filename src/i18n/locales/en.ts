import type { TranslationResource } from '../types';

const en: TranslationResource = {
  // Profile
  profile: {
    title: 'Profile',
    notLoggedIn: 'Not logged in',
    goToLogin: 'Go to login',
    anonymous: 'Anonymous user',
    statistics: 'Statistics',
    totalGames: 'Total games played',
    totalScore: 'Total score',
    achievements: 'Achievements',
    accountSettings: 'Account settings',
    syncData: 'Sync data',
    privacy: 'Privacy settings',
    deleteAccount: 'Delete account',
    signOut: 'Sign out',
    signOutTitle: 'Confirm sign out',
    signOutMessage: 'Are you sure you want to sign out?',
    signOutError: 'Sign out failed, please try again later',
    syncDataMessage: 'Sync local data to cloud to ensure your progress is not lost',
    syncDataSuccess: 'Data synced successfully',
    syncDataError: 'Data sync failed, please try again later',
    privacyMessage: 'We value your privacy, your data will be securely encrypted and stored',
    deleteAccountWarning: 'Deleting your account will permanently remove all data, this action cannot be undone',
    deleteAccountConfirm: 'I understand the risks',
    deleteAccountFinalWarning: 'Final confirmation',
    deleteAccountFinalMessage: 'Are you absolutely sure you want to delete your account? All game progress and achievements will be permanently lost',
    deleteAccountFinalConfirm: 'Delete permanently',
    deleteAccountError: 'Account deletion failed, please try again later',
  },

  // Common
  common: {
    start: 'Start',
    pause: 'Pause',
    resume: 'Resume',
    stop: 'Stop',
    back: 'Back',
    next: 'Next',
    cancel: 'Cancel',
    confirm: 'Confirm',
    save: 'Save',
    delete: 'Delete',
    edit: 'Edit',
    close: 'Close',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    warning: 'Warning',
    info: 'Info',
    ok: 'OK',
  },

  // Main Menu
  mainMenu: {
    title: 'KanaKana',
    subtitle: 'Japanese Typing Practice Game',
    practiceKana: 'Practice Mode - Kana',
    practiceKanaSubtitle: 'PRACTICE - KANA',
    practiceKanaDescription: 'Challenge your limits and see how many characters you can type!',
    practiceKanji: 'Practice Mode - Kanji',
    practiceKanjiSubtitle: 'PRACTICE - KANJI',
    practiceKanjiDescription: 'Look at kanji and input kana readings to improve your kanji reading skills!',
    longTextMode: 'Long Text Mode',
    longTextModeSubtitle: 'LONG TEXT MODE',
    longTextModeDescription: 'Challenge yourself with long articles and practice fluent typing!',
    tetrisMode: 'Tetris',
    tetrisModeSubtitle: 'TETRIS TYPING',
    tetrisModeDescription: 'Type before the blocks fall - exciting and fun!',
    settings: 'Settings',
    about: 'About',
    profile: 'Profile',
    profileDescription: 'View personal profile and achievement statistics',
  },

  // Game Settings
  gameSettings: {
    title: 'Game Settings',
    difficulty: 'Difficulty',
    difficultyEasy: 'Easy',
    difficultyNormal: 'Normal',
    difficultyHard: 'Hard',
    difficultyExpert: 'Expert',
    vocabularyLevel: 'Vocabulary Level',
    showHints: 'Show Hints',
    showMeaning: 'Show Meaning',
    showRomaji: 'Show Romaji',
    showEnglishMeaning: 'Show English Meaning',
    readingType: 'Reading Type',
    readingTypeHiragana: 'Hiragana',
    readingTypeKatakana: 'Katakana',
    readingTypeMixed: 'Mixed',
    textLength: 'Text Length',
    textLengthShort: 'Short',
    textLengthMedium: 'Medium',
    showProgress: 'Show Progress',
    lives: 'Lives',
    startGame: 'Start Game',
  },

  // Game Play
  gamePlay: {
    score: 'Score',
    combo: 'Combo',
    time: 'Time',
    lives: 'Lives',
    accuracy: 'Accuracy',
    speed: 'Speed',
    currentWord: 'Current Word',
    yourInput: 'Your Input',
    startTyping: 'Start typing...',
    inputKanaReading: 'Input kana reading...',
    inputArticleContent: 'Type article content here...',
    difficulty: 'Difficulty',
    meaning: 'Meaning',
    kanji: 'Kanji',
    reading: 'Reading',
    hint: 'Hint',
    pause: 'Game Paused',
    gameOver: 'Game Over',
    congratulations: 'Congratulations!',
    tryAgain: 'Try Again',
    continue: 'Continue',
    exit: 'Exit',
    practiceComplete: 'Practice Complete',
    practiceTime: 'Practice Time',
    minutes: 'min',
    seconds: 'sec',
  },

  // Game End
  gameEnd: {
    title: 'Game Over',
    finalScore: 'Final Score',
    totalWords: 'Total Words',
    accuracy: 'Accuracy',
    averageSpeed: 'Average Speed',
  },

  // Difficulty Selection
  difficulty: {
    selectDifficulty: 'Select Difficulty',
    selectSuitableLevel: 'Choose your suitable learning level',
    elementaryDescription: 'Suitable for beginners',
    intermediateDescription: 'Suitable for learners with some foundation',
    advancedDescription: 'Suitable for advanced learners',
    words: 'words',
  },

  // Tetris Mode
  tetris: {
    title: 'Tetris Mode',
    instruction1: '1. Each block will display a Japanese word or kanji. Please input the correct kana or romaji before the block lands to eliminate it.',
    instruction2: '2. Blocks will fall automatically. Input correctly to eliminate them.',
    instruction3: '3. Every 5 blocks eliminated will increase your level. The higher the level, the faster the blocks fall.',
    instruction4: '4. At the end of the game, your highest score, highest level, and highest number of eliminations will be recorded.',
    bestScore: 'Best Score',
    bestLevel: 'Best Level',
    bestCleared: 'Best Cleared',
    score: 'Score',
    level: 'Level',
    cleared: 'Cleared',
    clearedBlocks: 'Cleared Blocks',
    reading: 'Reading',
    pleaseInput: 'Please input',
    pleaseInputFull: 'Please input full text...',
    gameOver: 'Game Over',
    finalScore: 'Final Score',
    bestRecord: 'Best Record',
    restart: 'Restart',
    backToMenu: 'Back to Menu',
    rateUs: 'Rate Us',
    bossDefeated: 'BOSS Defeated!',
    bossFailed: 'BOSS Failed!',
    bossChallenge: 'BOSS Challenge',
    congratulationsChallengeSuccess: 'Congratulations! Challenge Success!',
    timeUpChallengeFailed: 'Time\'s up! Challenge Failed!',
    returningToGame: 'Returning to game...',
    remainingTime: 'Remaining Time',
    seconds: 'sec',
    bestCombo: 'Best Combo',
    timeSpent: 'Time Spent',
    newRecord: 'New Record!',
    shareScore: 'Share Score',
    playAgain: 'Play Again',
    reviewMistakes: 'Review Mistakes',
  },

  // Settings
  settings: {
    title: 'Settings',
    general: 'General',
    audio: 'Audio',
    visual: 'Visual',
    accessibility: 'Accessibility',
    language: 'Language',
    about: 'About',
    version: 'Version',
    feedback: 'Feedback',
    rateApp: 'Rate App',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    resetSettings: 'Reset Settings',
    resetSettingsConfirm: 'Are you sure you want to reset all settings?',
  },

  // Audio Settings
  audio: {
    title: 'Audio Settings',
    masterVolume: 'Master Volume',
    sfxVolume: 'SFX Volume',
    musicVolume: 'Music Volume',
    voiceVolume: 'Voice Volume',
    enableHaptics: 'Enable Haptic Feedback',
    enableSpeech: 'Enable Speech Prompts',
  },

  // Visual Settings
  visual: {
    title: 'Visual Settings',
    theme: 'Theme',
    themeLight: 'Light',
    themeDark: 'Dark',
    themeAuto: 'Auto',
    fontSize: 'Font Size',
    fontSizeSmall: 'Small',
    fontSizeMedium: 'Medium',
    fontSizeLarge: 'Large',
    highContrast: 'High Contrast',
    reducedMotion: 'Reduce Motion',
    showParticles: 'Show Particle Effects',
  },

  // Accessibility Settings
  accessibility: {
    title: 'Accessibility Settings',
    voiceOver: 'Voice Over',
    screenReader: 'Screen Reader',
    colorBlindSupport: 'Color Blind Support',
    motorAccessibility: 'Motor Accessibility',
    cognitiveSupport: 'Cognitive Support',
    japaneseVoiceGuide: 'Japanese Voice Guide',
    furiganaSupport: 'Furigana Support',
  },

  // Language Settings
  language: {
    title: 'Language Settings',
    uiLanguage: 'UI Language',
    inputLanguage: 'Input Language',
    voiceLanguage: 'Voice Language',
    selectLanguage: 'Select Language',
    currentLanguage: 'Current Language',
    systemLanguage: 'System Language',
  },

  // Error Messages
  errors: {
    networkError: 'Network Connection Error',
    serverError: 'Server Error',
    unknownError: 'Unknown Error',
    tryAgainLater: 'Please try again later',
    checkConnection: 'Please check your network connection',
  },

  // Success Messages
  success: {
    settingsSaved: 'Settings saved',
    languageChanged: 'Language changed',
    dataSynced: 'Data synchronized',
  },

  // Confirm Dialogs
  confirm: {
    deleteData: 'Are you sure you want to delete the data?',
    resetProgress: 'Are you sure you want to reset progress?',
    exitGame: 'Are you sure you want to exit the game?',
    unsavedChanges: 'You have unsaved changes. Are you sure you want to leave?',
  },

  // Hint Messages
  hints: {
    swipeToNavigate: 'Swipe to navigate',
    tapToSelect: 'Tap to select',
    longPressForMore: 'Long press for more options',
    doubleTapToZoom: 'Double tap to zoom',
  },

  // Achievement System
  achievements: {
    title: 'Achievements',
    unlocked: 'Unlocked',
    locked: 'Locked',
    progress: 'Progress',
    description: 'Description',
    reward: 'Reward',
  },

  // Statistics
  statistics: {
    title: 'Statistics',
    totalPlayTime: 'Total Play Time',
    totalWordsTyped: 'Total Words Typed',
    averageAccuracy: 'Average Accuracy',
    bestScore: 'Best Score',
    gamesPlayed: 'Games Played',
    streakDays: 'Streak Days',
  },

  // Tutorial
  tutorial: {
    title: 'Tutorial',
    welcome: 'Welcome to KanaKana!',
    basicControls: 'Basic Controls',
    gameModes: 'Game Modes',
    tips: 'Tips',
    skip: 'Skip',
    next: 'Next',
    finish: 'Finish',
  },

  // Force Update
  forceUpdate: {
    updateRequired: 'Update Required',
    newVersionAvailable: 'A new version {{version}} is available. Please update from the App Store for the best experience.',
    later: 'Later',
    updateNow: 'Update Now',
    cannotOpenStore: 'Cannot Open App Store',
    pleaseUpdateManually: 'Please manually go to the App Store to update the app.',
    updateFailed: 'Update Failed',
    cannotOpenStorePleaseUpdate: 'Cannot open App Store, please update manually.',
  },

  // Rating
  rating: {
    title: 'Rating',
    rateUs: 'Rate Us',
    rateUsDescription: 'If you like this app, please give us a rating',
    rateUsButton: 'Rate',
  },

  // Rating Prompt
  ratingPrompt: {
    achievementUnlocked: '🎉 Achievement Unlocked!',
    gameCompleted: '🎯 Great Performance!',
    streakMilestone: '🔥 Keep Learning!',
    featureExplored: '🌟 Exploration Complete!',
    sessionCount: '📚 Learning Partner!',
    defaultTitle: '⭐ Like KanaKana?',
    testTitle: '🧪 Test Rating Prompt',
    unifiedMessage: 'Thank you for downloading KanaKana! If you find this app helpful, please give us a rating. Your review is our motivation to improve!',
    later: 'Later',
    rateNow: 'Rate Now',
  },

  // About
  about: {
    title: 'About KanaKana',
    description: 'KanaKana is a game application designed specifically for learning Japanese typing.',
    version: 'Version',
    developer: 'Developer',
    contact: 'Contact Us',
    website: 'Official Website',
    github: 'GitHub',
  },

  // Authentication
  auth: {
    welcomeTitle: 'Welcome to KanaKana',
    welcomeSubtitle: 'Sign in to sync your progress to the cloud',
    saveProgressTitle: 'Save Your Progress',
    saveProgressSubtitle: 'Sign in to permanently save your game records',
    loginTitle: 'Sign In',
    loginSubtitle: 'Sign in to access full features',
    continueWithGoogle: 'Continue with Google',
    continueWithApple: 'Continue with Apple',
    continueWithEmail: 'Sign in with Email',
    continueAsGuest: 'Continue as Guest',
    or: 'or',
    privacyNotice: 'By signing in, you agree to our Terms of Service and Privacy Policy',
    loginSuccess: 'Sign in successful',
    loginFailed: 'Sign in failed',
    dataWillSync: 'Your data will automatically sync to the cloud',
    tryAgainLater: 'Please try again later',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    displayName: 'Display Name',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    signUpSuccess: 'Sign up successful',
    alreadyHaveAccount: 'Already have an account? Click to sign in',
    needAccount: 'Need an account? Click to sign up',
    pleaseEnterEmailPassword: 'Please enter email and password',
    passwordsDoNotMatch: 'Passwords do not match',
    passwordTooShort: 'Password must be at least 6 characters',
    unknownError: 'An unknown error occurred',
  },
};

export default en;

