import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CardList from './components/Cards/CardList';

import { PrivateRoute } from './components/Routes/PrivateRoute';
import './App.css';
const SAMPLE = [
  {
    id: 1,
    question: 'what is 2  + 2 dwdwdw2222222222222222222',
    answer: '4',
    options: ['2', '3', '4', '5'],
  },
  {
    id: 2,
    question: 'Question 2?',
    answer: 'Answer',
    options: ['Answer1', 'Answer2', 'Answer3', 'Answer4'],
  },
  {
    id: 3,
    question: 'Question 3?',
    answer: 'Answer',
    options: ['Answer1', 'Answer2', 'Answer3', 'Answer4'],
  },
  {
    id: 4,
    question: 'Question 4?',
    answer: 'Answer',
    options: ['Answer1', 'Answer2', 'Answer3', 'Answer4'],
  },
];

/**TODO
 *
 * ユーザーがログインしているかどうかで、
 * route '/'へアクセスした場合に表示させる内容が異なる。
 * <Route>として定義されていないのでわかりにくい。
 */
function App() {
  const [flashCards, setFlashCards] = useState(SAMPLE);

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
              <Route path="/cards" element={<CardList cards={flashCards} />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
