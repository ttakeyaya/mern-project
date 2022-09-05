import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, clear } from '../features/auth/authSlice';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  // redux: use auth slice
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
    }
    // ログイン成功後に遷移
    if (isSuccess || user) {
      navigate('/cards');
    }
    dispatch(clear());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <section className="form-container">
        <h1 className="form-title">ログイン</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="お名前">メールアドレス:</label>
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
            <label htmlFor="お名前">パスワード:</label>
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
            <button className="btn btn-block">ログインする</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
