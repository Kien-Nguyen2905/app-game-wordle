interface IBoard {
  board: string[];
  position: number;
  row: number;
  word: string;
}
export interface IGlobal {
  board: IBoard;
}
