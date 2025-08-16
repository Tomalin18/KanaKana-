import { TetrisWord, DifficultyLevel } from '../index';

/**
 * Normal Vocabulary - 中級詞彙庫 (分割版)
 * 
 * 🔄 生成時間: 2025-08-05T10:19:12.859Z
 * 📊 總詞彙數量: 2538 個
 * 分割成 3 個檔案
 * ✨ 保持與原始 normal 2.ts 完全相同的介面
 * 💾 保留所有原始資料
 */

// Import all chunks
import { NORMAL_CHUNK_1 } from './normal-chunk-1';
import { NORMAL_CHUNK_2 } from './normal-chunk-2';
import { NORMAL_CHUNK_3 } from './normal-chunk-3';

// Combine all chunks to maintain the same interface
export const NORMAL_WORDS: TetrisWord[] = [
  ...NORMAL_CHUNK_1,
  ...NORMAL_CHUNK_2,
  ...NORMAL_CHUNK_3
];