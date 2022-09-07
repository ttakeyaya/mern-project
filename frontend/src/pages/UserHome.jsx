import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import Modal from 'react-modal';

import { createCard } from '../features/card/cardSlice';

import './UserHome.css';
// requirement
Modal.setAppElement('#root');

function UserMain() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cardQuestion, setCardQuestion] = useState('');
  const [cardAnswer, setCardAnswer] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const onCardSubmit = (e) => {
    e.preventDefault();

    const cardData = {
      user: user._id,
      question: cardQuestion,
      answer: cardAnswer,
    };

    dispatch(createCard(cardData, user.token));
    closeModal();
    navigate('/cards');
  };

  return (
    <main className="user-home">
      <h1>{user.name}'s カード</h1>
      <div className="user-home-btn-container">
        <button className="btn">
          <Link to="/cards" className="user-home-link">
            カード一覧
          </Link>
        </button>
        <button onClick={openModal} className="user-home-link btn">
          カード登録
        </button>
        <button className="btn">
          <Link to="/cards/play" className="user-home-link">
            プレイ
          </Link>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Add Card"
        >
          <div class="modal-head-container">
            <h2 class="modal-title">新規カード</h2>
            <button className="modal-close-btn" onClick={closeModal}>
              x
            </button>
          </div>

          <form onSubmit={onCardSubmit}>
            <div className="form-group">
              <label htmlFor="cardQuestion">問題:</label>
              <textarea
                name="cardQuestion"
                id="cardQuestion"
                className="form-control"
                placeholder="問題を記入してください"
                value={cardQuestion}
                onChange={(e) => setCardQuestion(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="cardAnswer">回答:</label>
              <textarea
                name="cardAnswer"
                id="cardAnswer"
                className="form-control"
                placeholder="問題の答えを入力してください"
                value={cardAnswer}
                onChange={(e) => setCardAnswer(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <button className="btn" type="submit">
                作成する
              </button>
            </div>
          </form>
        </Modal>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Card"
      >
        <div class="modal-head-container">
          <h2 class="modal-title">新規カード</h2>
          <button className="modal-close-btn" onClick={closeModal}>
            x
          </button>
        </div>

        <form onSubmit={onCardSubmit}>
          <div className="form-group">
            <label htmlFor="cardQuestion">問題:</label>
            <textarea
              name="cardQuestion"
              id="cardQuestion"
              className="form-control"
              placeholder="問題を記入してください"
              value={cardQuestion}
              onChange={(e) => setCardQuestion(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="cardAnswer">回答:</label>
            <textarea
              name="cardAnswer"
              id="cardAnswer"
              className="form-control"
              placeholder="問題の答えを入力してください"
              value={cardAnswer}
              onChange={(e) => setCardAnswer(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn" type="submit">
              作成する
            </button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default UserMain;
