import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCards } from '../../features/card/cardSlice';
import Card from './Card';
import './CardList.css';

function CardList() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { cards } = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);
  console.log(cards);

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
    <section className="card-list">
      <div className="card-container">
        {cards.map((card, index) => {
          return (
            <Card
              card={card}
              key={card._id}
              isVisible={index === currentIndex ? true : false}
            />
          );
        })}
      </div>
      <button onClick={goToNext} className="btn btn-card-shown">
        {currentIndex === cards.length - 1 ? 'Show stats' : '次へ'}
      </button>
    </section>
  );
}

export default CardList;
