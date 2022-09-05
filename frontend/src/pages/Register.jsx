import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../features/auth/authSlice';

function Register() {
  // react-redux
  const dispatch = useDispatch();
  // react
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = formData;

  // redux-store:
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  // react-router-dom
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
    }

    if (isSuccess || user) {
      navigate('/');
    }
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      throw new Error('パスワードが一致しません');
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };
  return (
    <>
      <section className="form-container">
        <h1 className="form-title">登録フォーム</h1>
        <form onSubmit={onSubmit} className="form">
          <div className="form-group">
            <label htmlFor="お名前">お名前:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              name="name"
              onChange={onChange}
              placeholder="お名前を入力してください"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">メールアドレス:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              name="email"
              onChange={onChange}
              placeholder="メールアドレスを入力してください"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">パスワード:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              name="password"
              onChange={onChange}
              placeholder="パスワードを入力してください"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password2">パスワード(確認用)</label>
            <input
              type="password"
              className="form-control"
              id="password2"
              value={password2}
              name="password2"
              onChange={onChange}
              placeholder="再度パスワードを入力してください"
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">登録する</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
