import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { updateCard } from '../features/card/cardSlice';

// requirement
Modal.setAppElement('#root');

function Card(props) {
  const { question, answer, createdAt, _id, user } = props.card;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cardQuestion, setCardQuestion] = useState(question);
  const [cardAnswer, setCardAnswer] = useState(answer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onClickHandler = () => {
    props.delete(_id);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const cardData = {
      question: cardQuestion,
      answer: cardAnswer,
    };
    props.update(cardData, _id);
    closeModal();
    navigate('/cards');
  };
  return (
    <>
      <tr>
        <td>{question}</td>
        <td>{answer}</td>
        <td>{_changeDateFormat(createdAt)}</td>
        <td>
          <button onClick={openModal}>編集</button>
        </td>
        <td>
          <button onClick={onClickHandler}>x</button>
        </td>
      </tr>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="update card"
      >
        <div class="modal-head-container">
          <h2 class="modal-title">カード編集</h2>
          <button className="modal-close-btn" onClick={closeModal}>
            x
          </button>
        </div>

        <form onSubmit={onSubmitHandler}>
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
              更新する
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

/**Reference
 * https://stackoverflow.com/questions/25159330/how-to-convert-an-iso-date-to-the-date-format-yyyy-mm-dd
 */
const _changeDateFormat = (isoString) => {
  return isoString.substring(0, 10);
};

export default Card;
