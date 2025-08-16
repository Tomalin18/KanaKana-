export default {
  // 通用
  common: {
    start: '开始',
    pause: '暂停',
    resume: '继续',
    stop: '停止',
    back: '返回',
    next: '下一步',
    cancel: '取消',
    confirm: '确认',
    save: '保存',
    delete: '删除',
    edit: '编辑',
    close: '关闭',
    loading: '加载中...',
    error: '错误',
    success: '成功',
    warning: '警告',
    info: '信息',
  },

  // 主菜单
  mainMenu: {
    title: 'KanaKana',
    subtitle: '日语打字练习游戏',
    practiceKana: '练习模式-假名',
    practiceKanaSubtitle: 'PRACTICE - KANA',
    practiceKanaDescription: '挑战你的极限，看看能打多少字！',
    practiceKanji: '练习模式-汉字',
    practiceKanjiSubtitle: 'PRACTICE - KANJI',
    practiceKanjiDescription: '看汉字输入假名，提升汉字读音能力！',
    longTextMode: '长文模式',
    longTextModeSubtitle: 'LONG TEXT MODE',
    longTextModeDescription: '挑战长篇文章，练习流畅输入！',
    tetrisMode: '俄罗斯方块',
    tetrisModeSubtitle: 'TETRIS TYPING',
    tetrisModeDescription: '在方块掉落前输入完成，刺激有趣！',
    settings: '设置',
    about: '关于',
  },

  // 游戏设置
  gameSettings: {
    title: '游戏设置',
    difficulty: '难度',
    difficultyEasy: '简单',
    difficultyNormal: '普通',
    difficultyHard: '困难',
    difficultyExpert: '专家',
    vocabularyLevel: '词汇等级',
    showHints: '显示提示',
    showMeaning: '显示意思',
    showRomaji: '显示罗马字',
    showEnglishMeaning: '显示英文意思',
    readingType: '读音类型',
    readingTypeHiragana: '平假名',
    readingTypeKatakana: '片假名',
    readingTypeMixed: '混合',
    textLength: '文章长度',
    textLengthShort: '短篇',
    textLengthMedium: '中篇',
    showProgress: '显示进度',
    lives: '生命',
    startGame: '开始游戏',
  },

  // 游戏进行中
  gamePlay: {
    score: '分数',
    combo: '连击',
    time: '时间',
    lives: '生命',
    accuracy: '准确率',
    speed: '速度',
    currentWord: '当前单词',
    yourInput: '你的输入',
    startTyping: '开始输入...',
    inputKanaReading: '输入假名读音...',
    inputArticleContent: '在这里输入文章内容...',
    difficulty: '难度',
    meaning: '解释',
    kanji: '汉字',
    reading: '读音',
    hint: '提示',
    pause: '游戏暂停',
    gameOver: '游戏结束',
    congratulations: '恭喜！',
    tryAgain: '再试一次',
    continue: '继续',
    exit: '退出',
  },

  // 游戏结束
  gameEnd: {
    title: '游戏结束',
    finalScore: '最终分数',
    totalWords: '总单词数',
    accuracy: '准确率',
    averageSpeed: '平均速度',
    bestCombo: '最佳连击',
    timeSpent: '游戏时间',
    newRecord: '新纪录！',
    shareScore: '分享分数',
    playAgain: '再玩一次',
    backToMenu: '返回主菜单',
    reviewMistakes: '复习错误',
  },

  // 设置画面
  settings: {
    title: '设置',
    general: '一般',
    audio: '音效',
    visual: '视觉',
    accessibility: '无障碍',
    language: '语言',
    about: '关于',
    version: '版本',
    feedback: '意见反馈',
    rateApp: '评分应用',
    privacyPolicy: '隐私政策',
    termsOfService: '服务条款',
    resetSettings: '重置设置',
    resetSettingsConfirm: '确定要重置所有设置吗？',
  },

  // 音效设置
  audio: {
    title: '音效设置',
    masterVolume: '主音量',
    sfxVolume: '音效音量',
    musicVolume: '音乐音量',
    voiceVolume: '语音音量',
    enableHaptics: '启用震动反馈',
    enableSpeech: '启用语音提示',
  },

  // 视觉设置
  visual: {
    title: '视觉设置',
    theme: '主题',
    themeLight: '浅色',
    themeDark: '深色',
    themeAuto: '自动',
    fontSize: '字体大小',
    fontSizeSmall: '小',
    fontSizeMedium: '中',
    fontSizeLarge: '大',
    highContrast: '高对比度',
    reducedMotion: '减少动画',
    showParticles: '显示粒子效果',
  },

  // 无障碍设置
  accessibility: {
    title: '无障碍设置',
    voiceOver: '语音朗读',
    screenReader: '屏幕阅读器',
    colorBlindSupport: '色盲支持',
    motorAccessibility: '运动无障碍',
    cognitiveSupport: '认知支持',
    japaneseVoiceGuide: '日语语音引导',
    furiganaSupport: '振假名支持',
  },

  // 语言设置
  language: {
    title: '语言设置',
    uiLanguage: '界面语言',
    inputLanguage: '输入语言',
    voiceLanguage: '语音语言',
    selectLanguage: '选择语言',
    currentLanguage: '当前语言',
    systemLanguage: '系统语言',
  },

  // 错误消息
  errors: {
    networkError: '网络连接错误',
    serverError: '服务器错误',
    unknownError: '未知错误',
    tryAgainLater: '请稍后再试',
    checkConnection: '请检查网络连接',
  },

  // 成功消息
  success: {
    settingsSaved: '设置已保存',
    languageChanged: '语言已切换',
    dataSynced: '数据已同步',
  },

  // 确认对话框
  confirm: {
    deleteData: '确定要删除数据吗？',
    resetProgress: '确定要重置进度吗？',
    exitGame: '确定要退出游戏吗？',
    unsavedChanges: '有未保存的变更，确定要离开吗？',
  },

  // 提示消息
  hints: {
    swipeToNavigate: '滑动来导航',
    tapToSelect: '点击来选择',
    longPressForMore: '长按查看更多选项',
    doubleTapToZoom: '双击来缩放',
  },

  // 成就系统
  achievements: {
    title: '成就',
    unlocked: '已解锁',
    locked: '未解锁',
    progress: '进度',
    description: '描述',
    reward: '奖励',
  },

  // 统计数据
  statistics: {
    title: '统计数据',
    totalPlayTime: '总游戏时间',
    totalWordsTyped: '总输入单词数',
    averageAccuracy: '平均准确率',
    bestScore: '最佳分数',
    gamesPlayed: '游戏次数',
    streakDays: '连续天数',
  },

  // 教学
  tutorial: {
    title: '教学',
    welcome: '欢迎来到 KanaKana！',
    basicControls: '基本操作',
    gameModes: '游戏模式',
    tips: '小技巧',
    skip: '跳过',
    next: '下一步',
    finish: '完成',
  },

  // 关于
  about: {
    title: '关于 KanaKana',
    description: 'KanaKana 是一个专为学习日语打字而设计的游戏应用程序。',
    version: '版本',
    developer: '开发者',
    contact: '联系我们',
    website: '官方网站',
    github: 'GitHub',
  },

  // 俄罗斯方块模式
  tetris: {
    instruction1: '1. 每个方块上会显示日语单词或汉字，请在方块落地前输入正确的假名或罗马拼音消除方块。',
    instruction2: '2. 方块会自动下落，输入正确即可消除。',
    instruction3: '3. 每消除 5 个方块会提升等级，等级越高方块下落速度越快。',
    instruction4: '4. 游戏结束时会记录你的最高分、最高等级与最高消除数。',
    bestScore: '最高分',
    bestLevel: '最高等级',
    bestCleared: '最高消除数',
    score: '分数',
    level: '等级',
    cleared: '消除数',
    clearedBlocks: '消除方块',
    reading: '读音',
    pleaseInput: '请输入',
    pleaseInputFull: '请输入全文...',
    gameOver: '游戏结束',
    finalScore: '最终分数',
    bestRecord: '最高纪录',
    restart: '重新开始',
    backToMenu: '返回主菜单',
    rateUs: '给我们评分',
  },
};
