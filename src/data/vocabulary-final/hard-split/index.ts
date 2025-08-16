import { TetrisWord, DifficultyLevel } from '../index';

/**
 * Hard Vocabulary - 高級詞彙庫 (分割版)
 * 
 * 🔄 生成時間: 2025-08-05T10:36:40.833Z
 * 📊 總詞彙數量: 1545 個
 * 分割成 2 個檔案
 * ✨ 保持與原始 hard 2.ts 完全相同的介面
 * 💾 保留所有原始資料
 */

// Import all chunks
import { HARD_CHUNK_1 } from './hard-chunk-1';
import { HARD_CHUNK_2 } from './hard-chunk-2';

// Combine all chunks to maintain the same interface
export const HARD_WORDS: TetrisWord[] = [
  ...HARD_CHUNK_1,
  ...HARD_CHUNK_2
];