import { Asset } from "expo-asset";

// KUROMOJI_TOKEN 型別
export interface KUROMOJI_TOKEN {
  word_id: number;
  word_type: "KNOWN" | "UNKNOWN" | "BOS" | "EOS";
  word_position: number;
  surface_form: string | Uint8Array;
  pos: string;
  pos_detail_1: string;
  pos_detail_2: string;
  pos_detail_3: string;
  conjugated_type: string;
  conjugated_form: string;
  basic_form: string;
  reading?: string;
  pronunciation?: string;
}

// singleton tokenzier
let tokenizerInstance: any = null;
let tokenizerReady: Promise<any> | null = null;

// 載入 kuromoji
export async function getKuromojiTokenizer() {
  if (tokenizerInstance) return tokenizerInstance;
  if (tokenizerReady) return tokenizerReady;

  const kuromoji = require("@charlescoeder/react-native-kuromoji");
  const assets = {
    "base.dat.gz": Asset.fromModule(require("../../assets/dict/base.dat.gz")),
    "cc.dat.gz": Asset.fromModule(require("../../assets/dict/cc.dat.gz")),
    "check.dat.gz": Asset.fromModule(require("../../assets/dict/check.dat.gz")),
    "tid.dat.gz": Asset.fromModule(require("../../assets/dict/tid.dat.gz")),
    "tid_map.dat.gz": Asset.fromModule(require("../../assets/dict/tid_map.dat.gz")),
    "tid_pos.dat.gz": Asset.fromModule(require("../../assets/dict/tid_pos.dat.gz")),
    "unk.dat.gz": Asset.fromModule(require("../../assets/dict/unk.dat.gz")),
    "unk_char.dat.gz": Asset.fromModule(require("../../assets/dict/unk_char.dat.gz")),
    "unk_compat.dat.gz": Asset.fromModule(require("../../assets/dict/unk_compat.dat.gz")),
    "unk_invoke.dat.gz": Asset.fromModule(require("../../assets/dict/unk_invoke.dat.gz")),
    "unk_map.dat.gz": Asset.fromModule(require("../../assets/dict/unk_map.dat.gz")),
    "unk_pos.dat.gz": Asset.fromModule(require("../../assets/dict/unk_pos.dat.gz")),
  };

  tokenizerReady = new Promise((resolve, reject) => {
    kuromoji
      .builder({ assets })
      .build((err: any, tokenizer: any) => {
        if (err) {
          console.error("kuromoji error:", err);
          reject(err);
        } else {
          tokenizerInstance = tokenizer;
          resolve(tokenizer);
        }
      });
  });
  return tokenizerReady;
}

// 高光分詞函式
export async function tokenizeWithHighlight(text: string): Promise<KUROMOJI_TOKEN[]> {
  const tokenizer = await getKuromojiTokenizer();
  return tokenizer.tokenize(text) as KUROMOJI_TOKEN[];
}

// 用法範例：
// const tokens = await tokenizeWithHighlight("私はAIです");
// tokens.forEach(token => console.log(token.surface_form, token.pos)); 