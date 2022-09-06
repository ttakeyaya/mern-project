import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { getCards, clear as clearCards } from '../features/card/cardSlice';
import CardItem from './CardItem';

function Cards() {
  const { cards, isLoading, isSuccess } = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(clearCards());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  console.log(cards);
  return (
    <section>
      {cards.length === 0 ? 'カードが登録されていません。' : 'カード一覧'}
      {cards.map((card) => {
        return <CardItem key={card._id} card={card} />;
      })}
    </section>
  );
}

export default Cards;
