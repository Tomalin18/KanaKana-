import { TetrisWord, DifficultyLevel } from '../index';

/**
 * Expert Vocabulary - 專家級詞彙庫 (分割版)
 * 
 * 🔄 生成時間: 2025-08-05T10:03:39.428Z
 * 📊 總詞彙數量: 5525 個
 * 分割成 6 個檔案
 * ✨ 保持與原始 expert.ts 完全相同的介面
 * 💾 保留所有原始資料
 */

// Import all chunks
import { EXPERT_CHUNK_1 } from './expert-chunk-1';
import { EXPERT_CHUNK_2 } from './expert-chunk-2';
import { EXPERT_CHUNK_3 } from './expert-chunk-3';
import { EXPERT_CHUNK_4 } from './expert-chunk-4';
import { EXPERT_CHUNK_5 } from './expert-chunk-5';
import { EXPERT_CHUNK_6 } from './expert-chunk-6';

// Combine all chunks to maintain the same interface
export const expert: TetrisWord[] = [
  ...EXPERT_CHUNK_1,
  ...EXPERT_CHUNK_2,
  ...EXPERT_CHUNK_3,
  ...EXPERT_CHUNK_4,
  ...EXPERT_CHUNK_5,
  ...EXPERT_CHUNK_6
];