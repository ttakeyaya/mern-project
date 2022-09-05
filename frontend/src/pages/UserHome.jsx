import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function UserMain() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate('/cards');
  };
  return (
    <main className="user-home">
      <h1>{user.name}'s カード</h1>
      <nav>
        <p>カードデッキ一覧</p>
        <p>カード登録/編集</p>
        <button onClick={onClickHandler}>カードプレイ</button>
      </nav>
    </main>
  );
}

export default UserMain;
