import React, { useState } from 'react';
import Card from './Card';

function CardList({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isLastCard = currentIndex === cards.length - 1;

    if (!isLastCard) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // モダルで統計を表示する
      alert('your stats here');
    }
  };

  return (
    <section className="card-container">
      {currentIndex + 1 + '/' + cards.length}
      {cards.map((card, index) => {
        return (
          <Card
            card={card}
            key={card.id}
            isVisible={index === currentIndex ? true : false}
          />
        );
      })}
      <button onClick={goToNext}>
        {currentIndex === cards.length - 1 ? 'Show stats' : 'Next Question'}
      </button>
    </section>
  );
}

export default CardList;
