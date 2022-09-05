import React, { useState, useEffect, useRef } from 'react';
import './Card.css';

function Card({ card, isVisible }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [height, setHeight] = useState('initial');

  const cardElement = useRef();

  const onClickAnswerHandler = (e) => {
    e.preventDefault();
    setShowAnswer(!showAnswer);
  };

  /**Util function
   *Depending upon the content's length of the question,
   *change the max height of the card
   */
  const setMaxHeight = () => {
    const cardHeight = cardElement.current.getBoundingClientRect().height;
    setHeight(cardHeight);
  };

  useEffect(setMaxHeight, [card.question, card.answer, card.options]);
  useEffect(() => {
    window.addEventListener('resize', setMaxHeight);
    return () => window.removeEventListener('resize', setMaxHeight);
  });

  return (
    <article
      className={isVisible ? 'card' : 'card-invisible'}
      style={{ height }}
      ref={cardElement}
    >
      <div>
        <h3 className="card-title">{card.question}</h3>
        {card.options.map((option) => (
          <div key={option} className="card-option">
            {option}
          </div>
        ))}
        <button onClick={onClickAnswerHandler} className="btn btn-answer">
          {showAnswer ? 'x' : '答え'}
        </button>
        {showAnswer ? card.answer : ''}
      </div>
    </article>
  );
}

export default Card;
