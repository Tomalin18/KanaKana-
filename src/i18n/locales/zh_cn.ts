import type { TranslationResource } from '../types';

const zhCN: TranslationResource = {
  // 个人资料
  profile: {
    title: '个人资料',
    notLoggedIn: '尚未登录',
    goToLogin: '前往登录',
    anonymous: '匿名用户',
    statistics: '统计资料',
    totalGames: '总游戏次数',
    totalScore: '总得分',
    achievements: '成就',
    accountSettings: '账号设置',
    syncData: '同步数据',
    privacy: '隐私设置',
    deleteAccount: '删除账号',
    signOut: '退出登录',
    signOutTitle: '确认退出登录',
    signOutMessage: '您确定要退出登录吗？',
    signOutError: '退出登录失败，请稍后再试',
    syncDataMessage: '将本地数据同步到云端，确保您的进度不会丢失',
    syncDataSuccess: '数据同步成功',
    syncDataError: '数据同步失败，请稍后再试',
    privacyMessage: '我们重视您的隐私，您的数据将被安全加密存储',
    deleteAccountWarning: '删除账号将永久移除所有数据，此操作无法恢复',
    deleteAccountConfirm: '我了解风险',
    deleteAccountFinalWarning: '最后确认',
    deleteAccountFinalMessage: '您真的确定要删除账号吗？所有游戏进度和成就将永久消失',
    deleteAccountFinalConfirm: '永久删除',
    deleteAccountError: '删除账号失败，请稍后再试',
  },

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
    ok: '确定',
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
    profile: '个人资料',
    profileDescription: '查看个人资料与成就统计',
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
    practiceComplete: '练习完成',
    practiceTime: '练习时间',
    minutes: '分',
    seconds: '秒',
  },

  // 游戏结束
  gameEnd: {
    title: '游戏结束',
    finalScore: '最终分数',
    totalWords: '总单词数',
    accuracy: '准确率',
    averageSpeed: '平均速度',
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

  // 强制更新
  forceUpdate: {
    updateRequired: '需要更新',
    newVersionAvailable: '目前应用程序有最新版本 {{version}}，请至 App Store 更新以获得最佳体验。',
    later: '稍后再说',
    updateNow: '立即更新',
    cannotOpenStore: '无法打开应用商店',
    pleaseUpdateManually: '请手动前往应用商店更新应用',
    updateFailed: '更新失败',
    cannotOpenStorePleaseUpdate: '无法打开应用商店，请手动前往更新',
  },

  // 评分
  rating: {
    title: '评分',
    rateUs: '给我们评分',
    rateUsDescription: '如果您喜欢这个应用，请给我们一个评分',
    rateUsButton: '评分',
  },

  // 评分提示
  ratingPrompt: {
    achievementUnlocked: '🎉 恭喜获得成就！',
    gameCompleted: '🎯 精彩表现！',
    streakMilestone: '🔥 坚持学习！',
    featureExplored: '🌟 探索完成！',
    sessionCount: '📚 学习伙伴！',
    defaultTitle: '⭐ 喜欢 KanaKana 吗？',
    testTitle: '🧪 测试评分提示',
    unifiedMessage: '感谢您下载KanaKana！如果觉得这个App对您有帮助，欢迎给我们一个评分。您的评论是我们前进的动力！',
    later: '稍后再说',
    rateNow: '立即评价',
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

  // 难度选择
  difficulty: {
    selectDifficulty: '选择难度',
    selectSuitableLevel: '选择适合你的学习等级',
    elementaryDescription: '适合初学者',
    intermediateDescription: '适合有一定基础的学习者',
    advancedDescription: '适合进阶学习者',
    words: '个单词',
  },

  // 俄罗斯方块模式
  tetris: {
    title: '俄罗斯方块模式',
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
    bossDefeated: 'BOSS 击败！',
    bossFailed: 'BOSS 失败！',
    bossChallenge: 'BOSS 挑战',
    congratulationsChallengeSuccess: '恭喜！挑战成功！',
    timeUpChallengeFailed: '时间到！挑战失败！',
    returningToGame: '即将返回游戏...',
    remainingTime: '剩余时间',
    seconds: '秒',
    bestCombo: '最佳连击',
    timeSpent: '游戏时间',
    newRecord: '新记录！',
    shareScore: '分享分数',
    playAgain: '再玩一次',
    reviewMistakes: '复习错误',
  },

  // 认证
  auth: {
    welcomeTitle: '欢迎来到 KanaKana',
    welcomeSubtitle: '登录以同步您的进度到云端',
    saveProgressTitle: '保存您的进度',
    saveProgressSubtitle: '登录以永久保存您的游戏记录',
    loginTitle: '登录',
    loginSubtitle: '登录以访问完整功能',
    continueWithGoogle: '使用 Google 继续',
    continueWithApple: '使用 Apple 继续',
    continueWithEmail: '使用邮箱登录',
    continueAsGuest: '以访客身份继续',
    or: '或',
    privacyNotice: '登录即表示您同意我们的服务条款和隐私政策',
    loginSuccess: '登录成功',
    loginFailed: '登录失败',
    dataWillSync: '您的数据将自动同步到云端',
    tryAgainLater: '请稍后再试',
    email: '邮箱',
    password: '密码',
    confirmPassword: '确认密码',
    displayName: '显示名称',
    signIn: '登录',
    signUp: '注册',
    signUpSuccess: '注册成功',
    alreadyHaveAccount: '已有账号？点击登录',
    needAccount: '需要账号？点击注册',
    pleaseEnterEmailPassword: '请输入邮箱和密码',
    passwordsDoNotMatch: '两次密码输入不一致',
    passwordTooShort: '密码长度至少需要 6 位',
    unknownError: '发生未知错误',
  },
};

export default zhCN;
