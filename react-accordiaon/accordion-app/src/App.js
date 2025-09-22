import React from 'react';
import Accordion from './components/Accordion';
import './App.css';

const App = () => {
  const accordionData = [
    {
      title: 'What is React?',
      content: 'React is a JavaScript library for building user interfaces, developed by Facebook.',
    },
    {
      title: 'What is a Component?',
      content: 'Components are reusable pieces of UI that can manage their own state.',
    },
    {
      title: 'What is JSX?',
      content: 'JSX is a syntax extension for JavaScript that looks similar to XML.',
    },
  ];

  return (
    <div className="App">
      <h1>React Accordion App</h1>
      <Accordion items={accordionData} />
    </div>
  );
};

export default App;
