import React, { useState, useEffect, useRef } from 'react';
import './Card.css';

function Card({ card, isVisible }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [height, setHeight] = useState('initial');
  const { question, answer } = card;

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

  useEffect(setMaxHeight, [question, answer]);
  useEffect(() => {
    window.addEventListener('resize', setMaxHeight);
    return () => window.removeEventListener('resize', setMaxHeight);
  });

  return (
    <section
      className={isVisible ? 'card' : 'card-invisible'}
      style={{ height }}
      ref={cardElement}
    >
      <div>
        <h3 className="card-title">{question}</h3>
        <button onClick={onClickAnswerHandler} className="btn">
          {showAnswer ? 'x' : 'Show Answer'}
        </button>
        {showAnswer ? answer : ''}
      </div>
    </section>
  );
}

export default Card;
