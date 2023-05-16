import React, { useContext } from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';
import { Context } from './context/context';

const App: React.FC = () => {

  const {
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
    restartGame } = useContext(Context)


  return (
    <>
      <Navbar totalNumber={TOTAL_QUESTIONS} score={score} />
      {!loading && !gameOver && (
        <>
          <Card
            queryNum={number + 1}
            question={data[number].question}
            answers={data[number].answers}
            answerObj={answerObj ? answerObj[number] : undefined}
            callback={checkAnswer}
          />
          <div className='quiz container'>
            <div className="quiz__button">
              {number > 0 ? (
                <button className='quiz__prev' disabled={false} onClick={prevQuestion}>
                  Previous
                </button>
              ) :
                <button className='quiz__prev' disabled={true} onClick={prevQuestion}>
                  Previous
                </button>}
              {answerObj.length >= number + 1 && number + 1 !== TOTAL_QUESTIONS ? (
                <button className='quiz__next' disabled={false} onClick={nextQuestion}>
                  Next
                </button>
              ) :
                <button className='quiz__next' disabled={true} onClick={nextQuestion}>
                  Next
                </button>
              }
            </div>
            <button className='quiz__next' onClick={restartGame}>
              Restart
            </button>
          </div>
        </>
      )}
      {loading ? <div className='loader'><span></span></div> : null}
    </>
  );
};

export default App;
