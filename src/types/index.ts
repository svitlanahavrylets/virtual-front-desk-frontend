export interface Option {
  id: number;
  text: string;
  isCorrect: boolean;
}

export interface Task {
  id: number;
  instruction: string;
  options: Option[];
}
