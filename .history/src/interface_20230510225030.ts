interface Iboard {
  board: string[];
  position: number;
  row: number;
  correct: string;
}
export interface Iglobal {
  board: Iboard;
}
