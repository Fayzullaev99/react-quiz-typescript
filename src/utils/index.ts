export type NavbarProps = {
  totalNumber:number
  score:number | null
}

export type CardProps = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  answerObj: AnswerObject | undefined;
  queryNum: number;
};

export type ApiData = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type DataState = ApiData & { answers: string[] };

export type ContextTypes = {
  TOTAL_QUESTIONS: number,
  score: number,
  loading: boolean,
  gameOver: boolean,
  number: number,
  data: DataState[],
  answerObj: AnswerObject[],
  checkAnswer: (e: any) => void,
  restartGame: () => void,
  nextQuestion: () => void,
  prevQuestion: () => void,
}

export type AnswerObject = {
  question: string;
  userAnswer: string;
  check: boolean;
  correctAnswer: string;
};

export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);