import { shuffleArray } from '../utils/index';

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type QuestionsState = Question & { answers: string[] };

export const UseFetch = async (amount: string | number, difficulty?: string,category?:string,type?:string) => {
  const data = await (await fetch(`https://opentdb.com/api.php?amount=${amount}${category ? `&category=${category}` : ``}${difficulty ? `&difficulty=${difficulty}` : ``}${type ? `&type=${type}` : ``}`)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
  }))
  // return data.results.map((question: Question) => ({
  //   ...question,
  //   answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
  // }))
};
// export const UseFetch = async (amount: number, difficulty: Difficulty) => {
//   const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
//   const data = await (await fetch(endpoint)).json();
//   return data.results.map((question: Question) => ({
//     ...question,
//     answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
//   }))
// };
