import React from 'react';
import './App.css';
import CountRender from './components/CountRender';
import TestComponent from './components/TestComponent';

const App = () => {
  return (
    <div className='App'>
      <TestComponent />
      <CountRender />
    </div>
  );
};

export default App;
