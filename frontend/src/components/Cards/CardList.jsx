import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { getCards } from '../../features/card/cardSlice';
import Card from './Card';
import './CardList.css';

function CardList() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { cards } = useSelector((state) => state.cards);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  const goToNext = () => {
    const isLastCard = currentIndex === cards.length - 1;

    if (!isLastCard) {
      setCurrentIndex(currentIndex + 1);
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
        {currentIndex === cards.length - 1 ? (
          <Link to="/" class="link-btn">
            一覧画面へ戻る
          </Link>
        ) : (
          '次へ'
        )}
      </button>
    </section>
  );
}

export default CardList;
