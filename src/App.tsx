import React, { useState,useContext } from 'react';
// Components
// types
import { QuestionsState, Difficulty, UseFetch } from './hooks/useFetch';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Start from './components/Start';
import { AnswerObject, Context } from './context/context';

const App: React.FC = () => {

  const total = useContext(Context)
  
  return (
    <>
      <Navbar totalNumber={total!.TOTAL_QUESTIONS} score={total!.score} />
      {!total!.loading && !total!.gameOver && (
        <Card
          questionNr={total!.number + 1}
          question={total!.questions[total!.number].question}
          answers={total!.questions[total!.number].answers}
          userAnswer={total!.userAnswers ? total!.userAnswers[total!.number] : undefined}
          callback={total!.checkAnswer}
        />
      )}
      <div className='quiz container'>
        {total!.gameOver || total!.userAnswers.length === total!.TOTAL_QUESTIONS ? (

        <Start />
        ) : null}
        {!total!.gameOver && !total!.loading
          ? <div className="quiz__button">
            {total!.number > 0 ? (
              <button className='quiz__prev' disabled={false} onClick={total!.prevQuestion}>
                Previous
              </button>
            ) :
              <button className='quiz__prev' disabled={true} onClick={total!.prevQuestion}>
                Previous
              </button>}
            {total!.userAnswers.length === total!.number + 1 && total!.number !== total!.TOTAL_QUESTIONS - 1 ? (
              <button className='quiz__next' disabled={false} onClick={total!.nextQuestion}>
                Next
              </button>
            ) :
              <button className='quiz__next' disabled={true} onClick={total!.nextQuestion}>
                Next
              </button>
            }
          </div>
          : null}
        {total!.loading ? <div className='loader'><span></span></div> : null}

      </div>
    </>
  );
};

export default App;
