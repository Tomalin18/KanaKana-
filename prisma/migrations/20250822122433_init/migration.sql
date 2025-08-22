-- CreateTable
CREATE TABLE "public"."users" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "email" TEXT,
    "username" TEXT,
    "is_anonymous" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "last_login_at" TIMESTAMP(3),
    "auth_id" UUID,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_profiles" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "display_name" TEXT,
    "avatar_url" TEXT,
    "level" INTEGER NOT NULL DEFAULT 1,
    "experience" INTEGER NOT NULL DEFAULT 0,
    "total_games_played" INTEGER NOT NULL DEFAULT 0,
    "total_words_typed" INTEGER NOT NULL DEFAULT 0,
    "total_score" BIGINT NOT NULL DEFAULT 0,
    "average_wpm" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "average_accuracy" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "preferred_difficulty" TEXT NOT NULL DEFAULT 'normal',

    CONSTRAINT "user_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_settings" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "sound_enabled" BOOLEAN NOT NULL DEFAULT true,
    "haptic_enabled" BOOLEAN NOT NULL DEFAULT true,
    "language" TEXT NOT NULL DEFAULT 'zh_tw',
    "theme" TEXT NOT NULL DEFAULT 'auto',
    "font_size" TEXT NOT NULL DEFAULT 'medium',
    "show_furigana" BOOLEAN NOT NULL DEFAULT true,
    "show_meaning" BOOLEAN NOT NULL DEFAULT true,
    "auto_play_audio" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."vocabulary" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "word" TEXT NOT NULL,
    "kana" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,
    "chinese_meaning" TEXT,
    "difficulty" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "jlpt_level" TEXT,
    "kanji" TEXT,
    "is_kanji" BOOLEAN NOT NULL DEFAULT false,
    "alternative_readings" JSONB,
    "compound_info" JSONB,
    "metadata" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vocabulary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."long_texts" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "display_content" TEXT,
    "input_content" TEXT,
    "difficulty" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "estimated_time" INTEGER NOT NULL,
    "vocabulary_list" TEXT[],
    "text_mapping" JSONB,
    "character_count" INTEGER,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "long_texts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."game_sessions" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID,
    "mode" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3),
    "duration" INTEGER,
    "score" INTEGER NOT NULL DEFAULT 0,
    "words_typed" INTEGER NOT NULL DEFAULT 0,
    "correct_words" INTEGER NOT NULL DEFAULT 0,
    "total_characters" INTEGER NOT NULL DEFAULT 0,
    "correct_characters" INTEGER NOT NULL DEFAULT 0,
    "wpm" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "accuracy" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "max_combo" INTEGER NOT NULL DEFAULT 0,
    "game_details" JSONB,

    CONSTRAINT "game_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."data_versions" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "table_name" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "description" TEXT,
    "applied_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "data_versions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."system_configs" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "key" TEXT NOT NULL,
    "value" JSONB NOT NULL,
    "description" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "system_configs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "public"."users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_auth_id_key" ON "public"."users"("auth_id");

-- CreateIndex
CREATE INDEX "users_auth_id_idx" ON "public"."users"("auth_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_profiles_user_id_key" ON "public"."user_profiles"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_settings_user_id_key" ON "public"."user_settings"("user_id");

-- CreateIndex
CREATE INDEX "vocabulary_difficulty_idx" ON "public"."vocabulary"("difficulty");

-- CreateIndex
CREATE INDEX "vocabulary_category_idx" ON "public"."vocabulary"("category");

-- CreateIndex
CREATE INDEX "vocabulary_jlpt_level_idx" ON "public"."vocabulary"("jlpt_level");

-- CreateIndex
CREATE INDEX "vocabulary_difficulty_category_idx" ON "public"."vocabulary"("difficulty", "category");

-- CreateIndex
CREATE INDEX "vocabulary_difficulty_jlpt_level_idx" ON "public"."vocabulary"("difficulty", "jlpt_level");

-- CreateIndex
CREATE INDEX "vocabulary_is_kanji_difficulty_idx" ON "public"."vocabulary"("is_kanji", "difficulty");

-- CreateIndex
CREATE INDEX "vocabulary_word_idx" ON "public"."vocabulary"("word");

-- CreateIndex
CREATE INDEX "vocabulary_kana_idx" ON "public"."vocabulary"("kana");

-- CreateIndex
CREATE INDEX "long_texts_difficulty_idx" ON "public"."long_texts"("difficulty");

-- CreateIndex
CREATE INDEX "long_texts_category_idx" ON "public"."long_texts"("category");

-- CreateIndex
CREATE INDEX "long_texts_difficulty_category_idx" ON "public"."long_texts"("difficulty", "category");

-- CreateIndex
CREATE INDEX "game_sessions_user_id_idx" ON "public"."game_sessions"("user_id");

-- CreateIndex
CREATE INDEX "game_sessions_mode_idx" ON "public"."game_sessions"("mode");

-- CreateIndex
CREATE INDEX "game_sessions_score_idx" ON "public"."game_sessions"("score");

-- CreateIndex
CREATE INDEX "game_sessions_start_time_idx" ON "public"."game_sessions"("start_time");

-- CreateIndex
CREATE INDEX "game_sessions_user_id_mode_idx" ON "public"."game_sessions"("user_id", "mode");

-- CreateIndex
CREATE UNIQUE INDEX "data_versions_table_name_version_key" ON "public"."data_versions"("table_name", "version");

-- CreateIndex
CREATE UNIQUE INDEX "system_configs_key_key" ON "public"."system_configs"("key");

-- AddForeignKey
ALTER TABLE "public"."user_profiles" ADD CONSTRAINT "user_profiles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_settings" ADD CONSTRAINT "user_settings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."game_sessions" ADD CONSTRAINT "game_sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
