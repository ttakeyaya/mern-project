import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CardList from './components/Cards/CardList';
import Cards from './pages/Cards';
import { PrivateRoute } from './components/Routes/PrivateRoute';
import './App.css';

/**TODO
 *
 * ユーザーがログインしているかどうかで、
 * route '/'へアクセスした場合に表示させる内容が異なる。
 * <Route>として定義されていないのでわかりにくいので要修正
 */
function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<PrivateRoute />}>
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="/cards" element={<PrivateRoute />}>
              <Route path="/cards" element={<Cards />} />
            </Route>
            <Route path="/cards/play" element={<PrivateRoute />}>
              <Route path="/cards/play" element={<CardList />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
