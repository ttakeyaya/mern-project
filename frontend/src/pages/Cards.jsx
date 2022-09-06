import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { getCards, clear as clearCards } from '../features/card/cardSlice';
import CardItem from './CardItem';
import './Cards.css';

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
    <div className="card-table-container">
      <h1 className="card-table-title">
        {cards.length === 0 ? 'カードが登録されていません。' : 'カード一覧'}
      </h1>
      <table className="card-table">
        <thead>
          <tr>
            <th>問題</th>
            <th>答え</th>
            <th>作成日</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card) => {
            return <CardItem key={card._id} card={card} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Cards;
