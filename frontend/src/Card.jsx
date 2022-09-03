import React, { useState } from 'react';

function Card({ card, isVisible }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const onClickAnswerHandler = (e) => {
    e.preventDefault();
    setShowAnswer(!showAnswer);
  };

  return (
    <div className={isVisible ? 'card' : 'card-invisible'}>
      {card.question}
      {showAnswer ? card.answer : ''}
      <button onClick={onClickAnswerHandler}>
        {showAnswer ? 'Close' : 'Show Answer'}
      </button>
    </div>
  );
}

export default Card;
