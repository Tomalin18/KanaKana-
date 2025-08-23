import type { TranslationResource } from '../types';

const ja: TranslationResource = {
  // プロフィール
  profile: {
    title: 'プロフィール',
    notLoggedIn: 'ログインしていません',
    goToLogin: 'ログインへ',
    anonymous: 'ゲストユーザー',
    statistics: '統計',
    totalGames: '総プレイ回数',
    totalScore: '総スコア',
    achievements: '実績',
    accountSettings: 'アカウント設定',
    syncData: 'データ同期',
    privacy: 'プライバシー設定',
    deleteAccount: 'アカウント削除',
    signOut: 'サインアウト',
    signOutTitle: 'サインアウト確認',
    signOutMessage: 'サインアウトしますか？',
    signOutError: 'サインアウトに失敗しました。後でもう一度お試しください',
    syncDataMessage: 'ローカルデータをクラウドに同期して、進捗が失われないようにします',
    syncDataSuccess: 'データの同期が完了しました',
    syncDataError: 'データの同期に失敗しました。後でもう一度お試しください',
    privacyMessage: '私たちはあなたのプライバシーを大切にし、データは安全に暗号化されて保存されます',
    deleteAccountWarning: 'アカウントを削除すると、すべてのデータが永久に削除され、この操作は元に戻せません',
    deleteAccountConfirm: 'リスクを理解しました',
    deleteAccountFinalWarning: '最終確認',
    deleteAccountFinalMessage: '本当にアカウントを削除しますか？すべてのゲーム進捗と実績が永久に失われます',
    deleteAccountFinalConfirm: '永久に削除',
    deleteAccountError: 'アカウント削除に失敗しました。後でもう一度お試しください',
  },

  // 共通
  common: {
    start: '開始',
    pause: '一時停止',
    resume: '続行',
    stop: '停止',
    back: '戻る',
    next: '次へ',
    cancel: 'キャンセル',
    confirm: '確認',
    save: '保存',
    delete: '削除',
    edit: '編集',
    close: '閉じる',
    loading: '読み込み中...',
    error: 'エラー',
    success: '成功',
    warning: '警告',
    info: '情報',
    ok: 'OK',
  },

  // メインメニュー
  mainMenu: {
    title: 'KanaKana',
    subtitle: '日本語タイピング練習ゲーム',
    practiceKana: '練習モード - 仮名',
    practiceKanaSubtitle: 'PRACTICE - KANA',
    practiceKanaDescription: '限界に挑戦して、どれだけ多くの文字を打てるか試してみよう！',
    practiceKanji: '練習モード - 漢字',
    practiceKanjiSubtitle: 'PRACTICE - KANJI',
    practiceKanjiDescription: '漢字を見て仮名読みを入力し、漢字読み能力を向上させよう！',
    longTextMode: '長文モード',
    longTextModeSubtitle: 'LONG TEXT MODE',
    longTextModeDescription: '長い文章に挑戦して、流暢なタイピングを練習しよう！',
    tetrisMode: 'テトリス',
    tetrisModeSubtitle: 'TETRIS TYPING',
    tetrisModeDescription: 'ブロックが落ちる前にタイピング - 刺激的で楽しい！',
    settings: '設定',
    about: 'について',
    profile: 'プロフィール',
    profileDescription: 'プロフィールと実績統計を表示',
  },

  // ゲーム設定
  gameSettings: {
    title: 'ゲーム設定',
    difficulty: '難易度',
    difficultyEasy: '簡単',
    difficultyNormal: '普通',
    difficultyHard: '難しい',
    difficultyExpert: 'エキスパート',
    vocabularyLevel: '語彙レベル',
    showHints: 'ヒントを表示',
    showMeaning: '意味を表示',
    showRomaji: 'ローマ字を表示',
    showEnglishMeaning: '英語の意味を表示',
    readingType: '読み方タイプ',
    readingTypeHiragana: 'ひらがな',
    readingTypeKatakana: 'カタカナ',
    readingTypeMixed: '混合',
    textLength: '文章の長さ',
    textLengthShort: '短編',
    textLengthMedium: '中編',
    showProgress: '進捗を表示',
    lives: 'ライフ',
    startGame: 'ゲーム開始',
  },

  // ゲームプレイ
  gamePlay: {
    score: 'スコア',
    combo: 'コンボ',
    time: '時間',
    lives: 'ライフ',
    accuracy: '正確性',
    speed: '速度',
    currentWord: '現在の単語',
    yourInput: '入力',
    startTyping: 'タイピングを開始...',
    inputKanaReading: '仮名読みを入力...',
    inputArticleContent: 'ここに記事の内容を入力...',
    difficulty: '難易度',
    meaning: '意味',
    kanji: '漢字',
    reading: '読み方',
    hint: 'ヒント',
    pause: 'ゲーム一時停止',
    gameOver: 'ゲームオーバー',
    congratulations: 'おめでとう！',
    tryAgain: '再試行',
    continue: '続行',
    exit: '終了',
    practiceComplete: '練習完了',
    practiceTime: '練習時間',
    minutes: '分',
    seconds: '秒',
  },

  // ゲーム終了
  gameEnd: {
    title: 'ゲームオーバー',
    finalScore: '最終スコア',
    totalWords: '総単語数',
    accuracy: '正確性',
    averageSpeed: '平均速度',
  },

  // 設定画面
  settings: {
    title: '設定',
    general: '一般',
    audio: '音声',
    visual: '視覚',
    accessibility: 'アクセシビリティ',
    language: '言語',
    about: 'について',
    version: 'バージョン',
    feedback: 'フィードバック',
    rateApp: 'アプリを評価',
    privacyPolicy: 'プライバシーポリシー',
    termsOfService: '利用規約',
    resetSettings: '設定をリセット',
    resetSettingsConfirm: 'すべての設定をリセットしますか？',
  },

  // 音声設定
  audio: {
    title: '音声設定',
    masterVolume: 'マスターボリューム',
    sfxVolume: '効果音ボリューム',
    musicVolume: '音楽ボリューム',
    voiceVolume: '音声ボリューム',
    enableHaptics: '触覚フィードバックを有効化',
    enableSpeech: '音声プロンプトを有効化',
  },

  // 視覚設定
  visual: {
    title: '視覚設定',
    theme: 'テーマ',
    themeLight: 'ライト',
    themeDark: 'ダーク',
    themeAuto: '自動',
    fontSize: 'フォントサイズ',
    fontSizeSmall: '小',
    fontSizeMedium: '中',
    fontSizeLarge: '大',
    highContrast: '高コントラスト',
    reducedMotion: 'モーション削減',
    showParticles: 'パーティクル効果を表示',
  },

  // アクセシビリティ設定
  accessibility: {
    title: 'アクセシビリティ設定',
    voiceOver: '音声ガイド',
    screenReader: 'スクリーンリーダー',
    colorBlindSupport: '色覚サポート',
    motorAccessibility: '運動アクセシビリティ',
    cognitiveSupport: '認知サポート',
    japaneseVoiceGuide: '日本語音声ガイド',
    furiganaSupport: 'ふりがなサポート',
  },

  // 言語設定
  language: {
    title: '言語設定',
    uiLanguage: 'UI言語',
    inputLanguage: '入力言語',
    voiceLanguage: '音声言語',
    selectLanguage: '言語を選択',
    currentLanguage: '現在の言語',
    systemLanguage: 'システム言語',
  },

  // エラーメッセージ
  errors: {
    networkError: 'ネットワーク接続エラー',
    serverError: 'サーバーエラー',
    unknownError: '不明なエラー',
    tryAgainLater: '後でもう一度お試しください',
    checkConnection: 'ネットワーク接続を確認してください',
  },

  // 成功メッセージ
  success: {
    settingsSaved: '設定が保存されました',
    languageChanged: '言語が変更されました',
    dataSynced: 'データが同期されました',
  },

  // 確認ダイアログ
  confirm: {
    deleteData: 'データを削除しますか？',
    resetProgress: '進捗をリセットしますか？',
    exitGame: 'ゲームを終了しますか？',
    unsavedChanges: '保存されていない変更があります。離れますか？',
  },

  // ヒントメッセージ
  hints: {
    swipeToNavigate: 'スワイプしてナビゲート',
    tapToSelect: 'タップして選択',
    longPressForMore: '長押しで詳細オプション',
    doubleTapToZoom: 'ダブルタップでズーム',
  },

  // 実績システム
  achievements: {
    title: '実績',
    unlocked: '解除済み',
    locked: 'ロック中',
    progress: '進捗',
    description: '説明',
    reward: '報酬',
  },

  // 統計
  statistics: {
    title: '統計',
    totalPlayTime: '総プレイ時間',
    totalWordsTyped: '総入力単語数',
    averageAccuracy: '平均正確性',
    bestScore: '最高スコア',
    gamesPlayed: 'プレイ回数',
    streakDays: '連続日数',
  },

  // チュートリアル
  tutorial: {
    title: 'チュートリアル',
    welcome: 'KanaKanaへようこそ！',
    basicControls: '基本操作',
    gameModes: 'ゲームモード',
    tips: 'ヒント',
    skip: 'スキップ',
    next: '次へ',
    finish: '完了',
  },

  // について
  // 強制更新
  forceUpdate: {
    updateRequired: '更新が必要です',
    newVersionAvailable: '新しいバージョン {{version}} が利用可能です。App Storeから更新して最高の体験をお楽しみください。',
    later: '後で',
    updateNow: '今すぐ更新',
    cannotOpenStore: 'App Storeを開けません',
    pleaseUpdateManually: 'App Storeに手動で移動してアプリを更新してください。',
    updateFailed: '更新に失敗しました',
    cannotOpenStorePleaseUpdate: 'App Storeを開けません。手動で更新してください。',
  },

  // 評価
  rating: {
    title: '評価',
    rateUs: '評価する',
    rateUsDescription: 'このアプリが気に入ったら、評価をお願いします',
    rateUsButton: '評価',
  },

  // 評分提示
  ratingPrompt: {
    achievementUnlocked: '🎉 実績解除！',
    gameCompleted: '🎯 素晴らしいパフォーマンス！',
    streakMilestone: '🔥 学習を続けましょう！',
    featureExplored: '🌟 探索完了！',
    sessionCount: '📚 学習パートナー！',
    defaultTitle: '⭐ KanaKanaが気に入りましたか？',
    testTitle: '🧪 テスト評価プロンプト',
    unifiedMessage: 'KanaKanaをダウンロードしていただき、ありがとうございます！このアプリが役立つと思われる場合は、評価をお願いします。あなたのレビューは私たちの改善の原動力です！',
    later: '後で',
    rateNow: '今すぐ評価',
  },

  about: {
    title: 'KanaKanaについて',
    description: 'KanaKanaは日本語タイピング学習のために特別に設計されたゲームアプリケーションです。',
    version: 'バージョン',
    developer: '開発者',
    contact: 'お問い合わせ',
    website: '公式ウェブサイト',
    github: 'GitHub',
  },

  // 難度選択
  difficulty: {
    selectDifficulty: '難度選択',
    selectSuitableLevel: 'あなたに適した学習レベルを選択してください',
    elementaryDescription: '初心者に適しています',
    intermediateDescription: 'ある程度の基礎がある学習者に適しています',
    advancedDescription: '上級学習者に適しています',
    words: '個の単語',
  },

  // テトリスモード
  tetris: {
    title: 'テトリスモード',
    instruction1: '1. 各ブロックに日本語の単語や漢字が表示されます。ブロックが着地する前に正しい仮名やローマ字を入力してブロックを消去してください。',
    instruction2: '2. ブロックは自動的に落下します。正しく入力すると消去されます。',
    instruction3: '3. 5個のブロックを消去するごとにレベルが上がります。レベルが高いほどブロックの落下速度が速くなります。',
    instruction4: '4. ゲーム終了時に最高スコア、最高レベル、最高消去数が記録されます。',
    bestScore: '最高スコア',
    bestLevel: '最高レベル',
    bestCleared: '最高消去数',
    score: 'スコア',
    level: 'レベル',
    cleared: '消去数',
    clearedBlocks: '消去ブロック',
    reading: '読み方',
    pleaseInput: '入力してください',
    pleaseInputFull: '全文を入力してください...',
    gameOver: 'ゲームオーバー',
    finalScore: '最終スコア',
    bestRecord: '最高記録',
    restart: '再開',
    backToMenu: 'メニューに戻る',
    rateUs: '評価する',
    bossDefeated: 'BOSS 撃破！',
    bossFailed: 'BOSS 失敗！',
    bossChallenge: 'BOSS チャレンジ',
    congratulationsChallengeSuccess: 'おめでとう！チャレンジ成功！',
    timeUpChallengeFailed: '時間切れ！チャレンジ失敗！',
    returningToGame: 'ゲームに戻ります...',
    remainingTime: '残り時間',
    seconds: '秒',
    bestCombo: '最高コンボ',
    timeSpent: 'プレイ時間',
    newRecord: '新記録！',
    shareScore: 'スコアを共有',
    playAgain: 'もう一度プレイ',
    reviewMistakes: '間違いを復習',
  },

  // 認証
  auth: {
    welcomeTitle: 'KanaKanaへようこそ',
    welcomeSubtitle: 'サインインして進捗をクラウドに同期',
    saveProgressTitle: '進捗を保存',
    saveProgressSubtitle: 'サインインしてゲーム記録を永続的に保存',
    loginTitle: 'サインイン',
    loginSubtitle: 'サインインして全機能にアクセス',
    continueWithGoogle: 'Googleで続行',
    continueWithApple: 'Appleで続行',
    continueWithEmail: 'メールでサインイン',
    continueAsGuest: 'ゲストとして続行',
    or: 'または',
    privacyNotice: 'サインインすることで、利用規約とプライバシーポリシーに同意したものとみなされます',
    loginSuccess: 'サインイン成功',
    loginFailed: 'サインイン失敗',
    dataWillSync: 'データは自動的にクラウドに同期されます',
    tryAgainLater: '後でもう一度お試しください',
    email: 'メール',
    password: 'パスワード',
    confirmPassword: 'パスワード確認',
    displayName: '表示名',
    signIn: 'サインイン',
    signUp: 'サインアップ',
    signUpSuccess: 'サインアップ成功',
    alreadyHaveAccount: '既にアカウントをお持ちですか？サインインをクリック',
    needAccount: 'アカウントが必要ですか？サインアップをクリック',
    pleaseEnterEmailPassword: 'メールアドレスとパスワードを入力してください',
    passwordsDoNotMatch: 'パスワードが一致しません',
    passwordTooShort: 'パスワードは6文字以上である必要があります',
    unknownError: '不明なエラーが発生しました',
  },
};

export default ja;
