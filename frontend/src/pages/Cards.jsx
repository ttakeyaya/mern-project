import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import {
  getCards,
  clear as clearCards,
  deleteCard,
  updateCard,
} from '../features/card/cardSlice';
import CardItem from './CardItem';

import './Cards.css';

function Cards() {
  const { cards, isLoading, isSuccess } = useSelector((state) => state.cards);
  const { user } = useSelector((state) => state.auth);
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
  }, [dispatch, cards]);

  const onDeleteHandler = (id) => {
    dispatch(deleteCard(id));
  };

  const onUpdateHandler = (formData, id) => {
    dispatch(updateCard(formData, id, user.token));
  };
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
            <th>編集</th>
            <th>削除</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card) => {
            return (
              <CardItem
                key={card._id}
                card={card}
                delete={onDeleteHandler}
                update={onUpdateHandler}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Cards;
