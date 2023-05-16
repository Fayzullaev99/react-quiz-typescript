import { ReactNode, createContext, useState, useEffect } from "react";
import { AnswerObject, ApiData, ContextTypes, DataState, shuffleArray } from "../utils";

const TOTAL_QUESTIONS = 10;
type ContextProps = {
    children: ReactNode
}
export const Context = createContext<ContextTypes>({
    TOTAL_QUESTIONS: 10,
    score: 0,
    loading: false,
    number: 1,
    gameOver: true,
    data: [],
    answerObj: [],
    checkAnswer: (e: any) => console.log('test'),
    restartGame: () => console.log('test'),
    nextQuestion: () => console.log('test'),
    prevQuestion: () => console.log('test')


});

export const ContextProvider = ({ children }: ContextProps) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<DataState[]>([]);
    const [number, setNumber] = useState(0);
    const [answerObj, setAnswerObj] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    const checkAnswer = (e: any) => {
        if (!gameOver) {
            const userAnswer = e.currentTarget.value;
            const check = data[number].correct_answer === userAnswer;
            if (check) setScore((prev) => prev + 1);
            const answerObject = {
                question: data[number].question,
                userAnswer,
                check,
                correctAnswer: data[number].correct_answer,
            };
            setAnswerObj((prev) => [...prev, answerObject]);
        }
    };

    const nextQuestion = () => {
        const next = number + 1;
        if (next === TOTAL_QUESTIONS) {
            setGameOver(true);
        } else {
            setNumber(next);
        }
    };
    const prevQuestion = () => {
        setNumber(prev => prev - 1);
    };
    const restartGame = () => {
        window.location.reload()
    };


    useEffect(() => {
        setLoading(true);
        setGameOver(false);
        (async function () {
            const response = await (await fetch(`https://opentdb.com/api.php?amount=10&type=multiple`)).json();
            let res = response.results.map((question: ApiData) => ({
                ...question,
                answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
            }))
            setData(res)
            setLoading(false);
        })()
    }, [])



    return <Context.Provider value={{
        data,
        TOTAL_QUESTIONS,
        score,
        loading,
        number,
        gameOver,
        answerObj,
        checkAnswer,
        nextQuestion,
        prevQuestion,
        restartGame
    }}>{children}</Context.Provider>
}