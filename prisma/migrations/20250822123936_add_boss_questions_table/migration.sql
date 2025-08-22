-- CreateTable
CREATE TABLE "public"."boss_questions" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "content" TEXT NOT NULL,
    "display_content" TEXT NOT NULL,
    "input_content" TEXT NOT NULL,
    "time_limit" INTEGER NOT NULL,
    "difficulty" TEXT,
    "sort_order" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "boss_questions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "boss_questions_difficulty_idx" ON "public"."boss_questions"("difficulty");

-- CreateIndex
CREATE INDEX "boss_questions_sort_order_idx" ON "public"."boss_questions"("sort_order");
