declare module '@charlescoeder/react-native-kuromoji' {
  export interface KuromojiToken {
    surface_form: string;
    pos: string;
    pos_detail_1: string;
    pos_detail_2: string;
    pos_detail_3: string;
    conjugated_type: string;
    conjugated_form: string;
    basic_form: string;
    reading: string;
    pronunciation: string;
  }
  const Kuromoji: {
    tokenize: (text: string) => Promise<KuromojiToken[]>;
  };
  export default Kuromoji;
} 