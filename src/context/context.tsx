import { ReactNode, createContext, useState } from "react";
import { Difficulty, QuestionsState, UseFetch } from "../hooks/useFetch";
type ContextTypes = {
    TOTAL_QUESTIONS: number,
    score: number,
    loading: boolean,
    gameOver: boolean,
    number: number,
    questions: QuestionsState[],
    userAnswers: AnswerObject[],
    checkAnswer: (e: any) => void,
    startTrivia: () => void,
    nextQuestion: () => void,
    prevQuestion: () => void,
}
export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
};

const TOTAL_QUESTIONS = 100;
type ContextProps = {
    children: ReactNode
}


export const Context = createContext<ContextTypes | null>(null);

export const ContextProvider = ({ children }: ContextProps) => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionsState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    const startTrivia = async () => {
        setLoading(true);
        setGameOver(false);
        const newQuestions = await UseFetch(
            TOTAL_QUESTIONS,
            Difficulty.EASY
        );

        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    };

    const checkAnswer = (e: any) => {
        if (!gameOver) {
            const answer = e.currentTarget.value;
            const correct = questions[number].correct_answer === answer;
            if (correct) setScore((prev) => prev + 1);
            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer,
            };
            setUserAnswers((prev) => [...prev, answerObject]);
        }
    };

    const nextQuestion = () => {
        const nextQ = number + 1;
        if (nextQ === TOTAL_QUESTIONS) {
            setGameOver(true);
        } else {
            setNumber(nextQ);
        }
    };
    const prevQuestion = () => {
        const prevQ = number - 1;
        if (prevQ < 0) {
            setGameOver(true);
        } else {
            setNumber(prevQ);
        }
    };


    // useEffect(() => {

    // }, [third])
    


    return <Context.Provider value={{
        TOTAL_QUESTIONS,
        score,
        loading,
        gameOver,
        number,
        questions,
        userAnswers,
        checkAnswer,
        startTrivia,
        nextQuestion,
        prevQuestion,
    }}>{children}</Context.Provider>
}