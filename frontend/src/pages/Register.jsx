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
      console.log('hi there');
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
      console.log(userData);
      dispatch(register(userData));
    }
  };
  return (
    <>
      <section className="form-container">
        <h1 className="form-title">登録フォーム</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              name="name"
              onChange={onChange}
              placeholder="お名前"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              name="email"
              onChange={onChange}
              placeholder="メールアドレス"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              name="password"
              onChange={onChange}
              placeholder="パスワード"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password2"
              value={password2}
              name="password2"
              onChange={onChange}
              placeholder="パスワード(確認)"
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
