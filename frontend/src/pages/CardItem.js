import React from 'react';

function Card({ card }) {
  const { question, answer } = card;
  return (
    <>
      {question}:{answer}
    </>
  );
}

export default Card;
