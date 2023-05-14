import React from 'react';
import { AnswerObject } from '../App';

// type Props = {
//     question: string;
//     answers: string[];
//     callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
//     userAnswer: AnswerObject | undefined;
//     questionNr: number;
//     totalQuestions: number;
// };

const QuestionCard = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
}) => (
    <div className='card'>
        {console.log(userAnswer)}
        <div className="container">
            <p className='card__question'>
                {questionNr}.<span dangerouslySetInnerHTML={{ __html: question }} />
            </p>
            <div className='card__block'>
                {answers.map((answer) => (
                    <button
                        key={answer}
                        disabled={userAnswer ? true : false} 
                        value={answer} 
                        onClick={callback} 
                        className={
                            userAnswer?.correctAnswer === answer 
                            ? 'card__answer correct' 
                            : userAnswer?.answer === answer 
                            ? 'card__answer answer' : 'card__answer'
                        }
                    >
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                ))}
            </div>
        </div>
    </div>
);

export default QuestionCard;
