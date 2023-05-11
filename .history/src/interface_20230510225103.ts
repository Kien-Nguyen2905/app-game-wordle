interface Iboard {
  board: string[];
  position: number;
  row: number;
  word: string;
}
export interface Iglobal {
  board: Iboard;
}
