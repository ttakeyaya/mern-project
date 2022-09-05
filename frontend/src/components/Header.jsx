import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, clear as clearUser } from '../features/auth/authSlice';
import { FaBook as Logo } from 'react-icons/fa';

function Header() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(clearUser());
    navigate('/');
  };
  const headerTemplate = user ? (
    <>
      <button className="btn" onClick={onLogout}>
        Logout
      </button>
    </>
  ) : (
    <>
      <li>
        <Link to="/login" className="header-link btn">
          ログイン
        </Link>
      </li>
      <li>
        <Link to="/register" className="header-link btn">
          登録
        </Link>
      </li>
    </>
  );
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <Logo className="logo" />
        </Link>
      </div>
      <ul className="header-links">{headerTemplate}</ul>
    </header>
  );
}

export default Header;
