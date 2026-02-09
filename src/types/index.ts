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

// mock data
export const mockTasks: Task[] = [
  {
    id: 1,
    instruction: "Which option is correct?",
    options: [
      { id: 1, text: "Option A", isCorrect: false },
      { id: 2, text: "Option B", isCorrect: true },
      { id: 3, text: "Option C", isCorrect: false },
      { id: 4, text: "Option D", isCorrect: false },
    ],
  },
];
