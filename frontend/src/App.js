import React, { useState } from 'react';
import CardList from './CardList';
import './App.css';
const SAMPLE = [
  {
    id: 1,
    question: 'what is 2  + 2 ?',
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
    <div>
      <CardList cards={flashCards} />
    </div>
  );
}

export default App;
