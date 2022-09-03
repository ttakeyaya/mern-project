import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CardList from './components/Cards/CardList';
import './App.css';
const SAMPLE = [
  {
    id: 1,
    question: 'what is 2  + 2 ',
    answer: '4',
    options: ['2', '3', '4', '5'],
  },
  {
    id: 2,
    question: 'Question 2?',
    answer: 'Answer',
    options: ['Anser', 'Anser', 'Anser', 'Anser'],
  },
];

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
            <Route path="register" element={<Register />} />
            <Route path="cards" element={<CardList cards={flashCards} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
