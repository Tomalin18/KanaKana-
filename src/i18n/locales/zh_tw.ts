export default {
  // 通用
  common: {
    start: '開始',
    pause: '暫停',
    resume: '繼續',
    stop: '停止',
    back: '返回',
    next: '下一步',
    cancel: '取消',
    confirm: '確認',
    save: '儲存',
    delete: '刪除',
    edit: '編輯',
    close: '關閉',
    loading: '載入中...',
    error: '錯誤',
    success: '成功',
    warning: '警告',
    info: '資訊',
  },

  // 主選單
  mainMenu: {
    title: 'KanaKana',
    subtitle: '日文打字練習遊戲',
    practiceKana: '練習模式-假名',
    practiceKanaSubtitle: 'PRACTICE - KANA',
    practiceKanaDescription: '挑戰你的極限，看看能打多少字！',
    practiceKanji: '練習模式-漢字',
    practiceKanjiSubtitle: 'PRACTICE - KANJI',
    practiceKanjiDescription: '看漢字輸入假名，提升漢字讀音能力！',
    longTextMode: '長文模式',
    longTextModeSubtitle: 'LONG TEXT MODE',
    longTextModeDescription: '挑戰長篇文章，練習流暢輸入！',
    tetrisMode: '俄羅斯方塊',
    tetrisModeSubtitle: 'TETRIS TYPING',
    tetrisModeDescription: '在方塊掉落前輸入完成，刺激有趣！',
    settings: '設定',
    about: '關於',
  },

  // 遊戲設定
  gameSettings: {
    title: '遊戲設定',
    difficulty: '難度',
    difficultyEasy: '簡單',
    difficultyNormal: '普通',
    difficultyHard: '困難',
    difficultyExpert: '專家',
    vocabularyLevel: '詞彙等級',
    showHints: '顯示提示',
    showMeaning: '顯示意思',
    showRomaji: '顯示羅馬字',
    showEnglishMeaning: '顯示英文意思',
    readingType: '讀音類型',
    readingTypeHiragana: '平假名',
    readingTypeKatakana: '片假名',
    readingTypeMixed: '混合',
    textLength: '文章長度',
    textLengthShort: '短篇',
    textLengthMedium: '中篇',
    showProgress: '顯示進度',
    lives: '生命',
    startGame: '開始遊戲',
  },

  // 遊戲進行中
  gamePlay: {
    score: '分數',
    combo: '連擊',
    time: '時間',
    lives: '生命',
    accuracy: '準確率',
    speed: '速度',
    currentWord: '當前單字',
    yourInput: '你的輸入',
    startTyping: '開始輸入...',
    inputKanaReading: '輸入假名讀音...',
    inputArticleContent: '在這裡輸入文章內容...',
    difficulty: '難度',
    meaning: '解釋',
    kanji: '漢字',
    reading: '讀音',
    hint: '提示',
    pause: '遊戲暫停',
    gameOver: '遊戲結束',
    congratulations: '恭喜！',
    tryAgain: '再試一次',
    continue: '繼續',
    exit: '退出',
  },

  // 遊戲結束
  gameEnd: {
    title: '遊戲結束',
    finalScore: '最終分數',
    totalWords: '總單字數',
    accuracy: '準確率',
    averageSpeed: '平均速度',

  // Tetris 模式
  tetris: {
    instruction1: '1. 每個方塊上會顯示日文單字或漢字，請在方塊落地前輸入正確的假名或羅馬拼音消除方塊。',
    instruction2: '2. 方塊會自動下落，輸入正確即可消除。',
    instruction3: '3. 每消除 5 個方塊會提升等級，等級越高方塊下落速度越快。',
    instruction4: '4. 遊戲結束時會記錄你的最高分、最高等級與最高消除數。',
    bestScore: '最高分',
    bestLevel: '最高等級',
    bestCleared: '最高消除數',
    score: '分數',
    level: '等級',
    cleared: '消除數',
    clearedBlocks: '消除方塊',
    reading: '讀音',
    pleaseInput: '請輸入',
    pleaseInputFull: '請輸入全文...',
    gameOver: '遊戲結束',
    finalScore: '最終分數',
    bestRecord: '最高紀錄',
    restart: '重新開始',
    backToMenu: '返回主選單',
    rateUs: '給我們評分',
  },
    bestCombo: '最佳連擊',
    timeSpent: '遊戲時間',
    newRecord: '新紀錄！',
    shareScore: '分享分數',
    playAgain: '再玩一次',
    backToMenu: '返回主選單',
    reviewMistakes: '複習錯誤',
  },

  // 設定畫面
  settings: {
    title: '設定',
    general: '一般',
    audio: '音效',
    visual: '視覺',
    accessibility: '無障礙',
    language: '語言',
    about: '關於',
    version: '版本',
    feedback: '意見回饋',
    rateApp: '評分應用',
    privacyPolicy: '隱私政策',
    termsOfService: '服務條款',
    resetSettings: '重設設定',
    resetSettingsConfirm: '確定要重設所有設定嗎？',
  },

  // 音效設定
  audio: {
    title: '音效設定',
    masterVolume: '主音量',
    sfxVolume: '音效音量',
    musicVolume: '音樂音量',
    voiceVolume: '語音音量',
    enableHaptics: '啟用震動回饋',
    enableSpeech: '啟用語音提示',
  },

  // 視覺設定
  visual: {
    title: '視覺設定',
    theme: '主題',
    themeLight: '淺色',
    themeDark: '深色',
    themeAuto: '自動',
    fontSize: '字體大小',
    fontSizeSmall: '小',
    fontSizeMedium: '中',
    fontSizeLarge: '大',
    highContrast: '高對比度',
    reducedMotion: '減少動畫',
    showParticles: '顯示粒子效果',
  },

  // 無障礙設定
  accessibility: {
    title: '無障礙設定',
    voiceOver: '語音朗讀',
    screenReader: '螢幕閱讀器',
    colorBlindSupport: '色盲支援',
    motorAccessibility: '運動無障礙',
    cognitiveSupport: '認知支援',
    japaneseVoiceGuide: '日文語音導引',
    furiganaSupport: '振假名支援',
  },

  // 語言設定
  language: {
    title: '語言設定',
    uiLanguage: '介面語言',
    inputLanguage: '輸入語言',
    voiceLanguage: '語音語言',
    selectLanguage: '選擇語言',
    currentLanguage: '當前語言',
    systemLanguage: '系統語言',
  },

  // 錯誤訊息
  errors: {
    networkError: '網路連線錯誤',
    serverError: '伺服器錯誤',
    unknownError: '未知錯誤',
    tryAgainLater: '請稍後再試',
    checkConnection: '請檢查網路連線',
  },

  // 成功訊息
  success: {
    settingsSaved: '設定已儲存',
    languageChanged: '語言已切換',
    dataSynced: '資料已同步',
  },

  // 確認對話框
  confirm: {
    deleteData: '確定要刪除資料嗎？',
    resetProgress: '確定要重設進度嗎？',
    exitGame: '確定要退出遊戲嗎？',
    unsavedChanges: '有未儲存的變更，確定要離開嗎？',
  },

  // 提示訊息
  hints: {
    swipeToNavigate: '滑動來導航',
    tapToSelect: '點擊來選擇',
    longPressForMore: '長按查看更多選項',
    doubleTapToZoom: '雙擊來縮放',
  },

  // 成就系統
  achievements: {
    title: '成就',
    unlocked: '已解鎖',
    locked: '未解鎖',
    progress: '進度',
    description: '描述',
    reward: '獎勵',
  },

  // 統計資料
  statistics: {
    title: '統計資料',
    totalPlayTime: '總遊戲時間',
    totalWordsTyped: '總輸入單字數',
    averageAccuracy: '平均準確率',
    bestScore: '最佳分數',
    gamesPlayed: '遊戲次數',
    streakDays: '連續天數',
  },

  // 教學
  tutorial: {
    title: '教學',
    welcome: '歡迎來到 KanaKana！',
    basicControls: '基本操作',
    gameModes: '遊戲模式',
    tips: '小技巧',
    skip: '跳過',
    next: '下一步',
    finish: '完成',
  },

  // 關於
  about: {
    title: '關於 KanaKana',
    description: 'KanaKana 是一個專為學習日文打字而設計的遊戲應用程式。',
    version: '版本',
    developer: '開發者',
    contact: '聯絡我們',
    website: '官方網站',
    github: 'GitHub',
  },
};
