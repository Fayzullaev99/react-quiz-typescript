import React from 'react';
import { CardProps } from '../utils';

const Card = ({
    question,
    answers,
    callback,
    answerObj,
    queryNum,
}:CardProps) => (
    <div className='card'>
        <div className="container">
            <p className='card__question'>
                {queryNum}.<span dangerouslySetInnerHTML={{ __html: question }} />
            </p>
            <div className='card__block'>
                {answers.map((answer) => (
                    <button
                        key={answer}
                        disabled={answerObj ? true : false}
                        value={answer}
                        onClick={callback} 
                        className={
                            answerObj?.correctAnswer === answer 
                            ? 'card__answer correct'
                            : answerObj?.userAnswer === answer 
                            ? 'card__answer uncorrect' : 'card__answer'
                        }
                    >
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                ))}
            </div>
        </div>
    </div>
);

export default Card;
