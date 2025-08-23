/**
 * i18n 翻譯類型定義
 * 確保所有語言都有相同的翻譯鍵值
 */

export interface TranslationResource {
  // 個人檔案
  profile: {
    title: string;
    notLoggedIn: string;
    goToLogin: string;
    anonymous: string;
    statistics: string;
    totalGames: string;
    totalScore: string;
    achievements: string;
    accountSettings: string;
    syncData: string;
    privacy: string;
    deleteAccount: string;
    signOut: string;
    signOutTitle: string;
    signOutMessage: string;
    signOutError: string;
    syncDataMessage: string;
    syncDataSuccess: string;
    syncDataError: string;
    privacyMessage: string;
    deleteAccountWarning: string;
    deleteAccountConfirm: string;
    deleteAccountFinalWarning: string;
    deleteAccountFinalMessage: string;
    deleteAccountFinalConfirm: string;
    deleteAccountError: string;
  };

  // 通用
  common: {
    start: string;
    pause: string;
    resume: string;
    stop: string;
    back: string;
    next: string;
    cancel: string;
    confirm: string;
    save: string;
    delete: string;
    edit: string;
    close: string;
    loading: string;
    error: string;
    success: string;
    warning: string;
    info: string;
    ok: string;
  };

  // 主選單
  mainMenu: {
    title: string;
    subtitle: string;
    practiceKana: string;
    practiceKanaSubtitle: string;
    practiceKanaDescription: string;
    practiceKanji: string;
    practiceKanjiSubtitle: string;
    practiceKanjiDescription: string;
    longTextMode: string;
    longTextModeSubtitle: string;
    longTextModeDescription: string;
    tetrisMode: string;
    tetrisModeSubtitle: string;
    tetrisModeDescription: string;
    settings: string;
    about: string;
    profile: string;
    profileDescription: string;
  };

  // 遊戲設定
  gameSettings: {
    title: string;
    difficulty: string;
    difficultyEasy: string;
    difficultyNormal: string;
    difficultyHard: string;
    difficultyExpert: string;
    vocabularyLevel: string;
    showHints: string;
    showMeaning: string;
    showRomaji: string;
    showEnglishMeaning: string;
    readingType: string;
    readingTypeHiragana: string;
    readingTypeKatakana: string;
    readingTypeMixed: string;
    textLength: string;
    textLengthShort: string;
    textLengthMedium: string;
    showProgress: string;
    lives: string;
    startGame: string;
  };

  // 遊戲進行中
  gamePlay: {
    score: string;
    combo: string;
    time: string;
    lives: string;
    accuracy: string;
    speed: string;
    currentWord: string;
    yourInput: string;
    startTyping: string;
    inputKanaReading: string;
    inputArticleContent: string;
    difficulty: string;
    meaning: string;
    kanji: string;
    reading: string;
    hint: string;
    pause: string;
    gameOver: string;
    congratulations: string;
    tryAgain: string;
    continue: string;
    exit: string;
    practiceComplete: string;
    practiceTime: string;
    minutes: string;
    seconds: string;
  };

  // 遊戲結束
  gameEnd: {
    title: string;
    finalScore: string;
    totalWords: string;
    accuracy: string;
    averageSpeed: string;
  };

  // 難度選擇
  difficulty: {
    selectDifficulty: string;
    selectSuitableLevel: string;
    elementaryDescription: string;
    intermediateDescription: string;
    advancedDescription: string;
    words: string;
  };

  // Tetris 模式
  tetris: {
    title: string;
    instruction1: string;
    instruction2: string;
    instruction3: string;
    instruction4: string;
    bestScore: string;
    bestLevel: string;
    bestCleared: string;
    score: string;
    level: string;
    cleared: string;
    clearedBlocks: string;
    reading: string;
    pleaseInput: string;
    pleaseInputFull: string;
    gameOver: string;
    finalScore: string;
    bestRecord: string;
    restart: string;
    backToMenu: string;
    rateUs: string;
    bossDefeated: string;
    bossFailed: string;
    bossChallenge: string;
    congratulationsChallengeSuccess: string;
    timeUpChallengeFailed: string;
    returningToGame: string;
    remainingTime: string;
    seconds: string;
    bestCombo: string;
    timeSpent: string;
    newRecord: string;
    shareScore: string;
    playAgain: string;
    reviewMistakes: string;
  };

  // 設定畫面
  settings: {
    title: string;
    general: string;
    audio: string;
    visual: string;
    accessibility: string;
    language: string;
    about: string;
    version: string;
    feedback: string;
    rateApp: string;
    privacyPolicy: string;
    termsOfService: string;
    resetSettings: string;
    resetSettingsConfirm: string;
  };

  // 音效設定
  audio: {
    title: string;
    masterVolume: string;
    sfxVolume: string;
    musicVolume: string;
    voiceVolume: string;
    enableHaptics: string;
    enableSpeech: string;
  };

  // 視覺設定
  visual: {
    title: string;
    theme: string;
    themeLight: string;
    themeDark: string;
    themeAuto: string;
    fontSize: string;
    fontSizeSmall: string;
    fontSizeMedium: string;
    fontSizeLarge: string;
    highContrast: string;
    reducedMotion: string;
    showParticles: string;
  };

  // 無障礙設定
  accessibility: {
    title: string;
    voiceOver: string;
    screenReader: string;
    colorBlindSupport: string;
    motorAccessibility: string;
    cognitiveSupport: string;
    japaneseVoiceGuide: string;
    furiganaSupport: string;
  };

  // 語言設定
  language: {
    title: string;
    uiLanguage: string;
    inputLanguage: string;
    voiceLanguage: string;
    selectLanguage: string;
    currentLanguage: string;
    systemLanguage: string;
  };

  // 錯誤訊息
  errors: {
    networkError: string;
    serverError: string;
    unknownError: string;
    tryAgainLater: string;
    checkConnection: string;
  };

  // 成功訊息
  success: {
    settingsSaved: string;
    languageChanged: string;
    dataSynced: string;
  };

  // 確認對話框
  confirm: {
    deleteData: string;
    resetProgress: string;
    exitGame: string;
    unsavedChanges: string;
  };

  // 提示訊息
  hints: {
    swipeToNavigate: string;
    tapToSelect: string;
    longPressForMore: string;
    doubleTapToZoom: string;
  };

  // 成就系統
  achievements: {
    title: string;
    unlocked: string;
    locked: string;
    progress: string;
    description: string;
    reward: string;
  };

  // 統計資料
  statistics: {
    title: string;
    totalPlayTime: string;
    totalWordsTyped: string;
    averageAccuracy: string;
    bestScore: string;
    gamesPlayed: string;
    streakDays: string;
  };

  // 教學
  tutorial: {
    title: string;
    welcome: string;
    basicControls: string;
    gameModes: string;
    tips: string;
    skip: string;
    next: string;
    finish: string;
  };

  // 強制更新
  forceUpdate: {
    updateRequired: string;
    newVersionAvailable: string;
    later: string;
    updateNow: string;
    cannotOpenStore: string;
    pleaseUpdateManually: string;
    updateFailed: string;
    cannotOpenStorePleaseUpdate: string;
  };

  // 評分
  rating: {
    title: string;
    rateUs: string;
    rateUsDescription: string;
    rateUsButton: string;
  };

  // 評分提示
  ratingPrompt: {
    achievementUnlocked: string;
    gameCompleted: string;
    streakMilestone: string;
    featureExplored: string;
    sessionCount: string;
    defaultTitle: string;
    testTitle: string;
    unifiedMessage: string;
    later: string;
    rateNow: string;
  };

  // 關於
  about: {
    title: string;
    description: string;
    version: string;
    developer: string;
    contact: string;
    website: string;
    github: string;
  };

  // 認證
  auth: {
    welcomeTitle: string;
    welcomeSubtitle: string;
    saveProgressTitle: string;
    saveProgressSubtitle: string;
    loginTitle: string;
    loginSubtitle: string;
    continueWithGoogle: string;
    continueWithApple: string;
    continueWithEmail: string;
    continueAsGuest: string;
    or: string;
    privacyNotice: string;
    loginSuccess: string;
    loginFailed: string;
    dataWillSync: string;
    tryAgainLater: string;
    email: string;
    password: string;
    confirmPassword: string;
    displayName: string;
    signIn: string;
    signUp: string;
    signUpSuccess: string;
    alreadyHaveAccount: string;
    needAccount: string;
    pleaseEnterEmailPassword: string;
    passwordsDoNotMatch: string;
    passwordTooShort: string;
    unknownError: string;
  };
}

export default TranslationResource;