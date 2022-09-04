import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    console.log(e);
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
              placeholder="メールアドレス"
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
              placeholder="パスワード"
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
