import React, { useState } from 'react';
import Card from './Card';

function CardList({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isLastCard = currentIndex === cards.length - 1;
    const newIndex = isLastCard ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <>
      {cards.map((card, index) => {
        return (
          <Card
            card={card}
            key={card.id}
            isVisible={index === currentIndex ? true : false}
          />
        );
      })}
      <button onClick={goToNext}>Next Question</button>
    </>
  );
}

export default CardList;
