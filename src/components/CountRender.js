import React, { useState, useEffect, useReducer, useRef } from 'react';
import '../App.css';

const CountRender = () => {
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const handleRerender = () => {
    forceUpdate();
  };

  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log('component render number:', renderCount.current);
  });

  return (
    <div style={{ margin: '10px' }}>
      <div>
        <p>Number of times rendered:</p>
        <p>{renderCount.current}</p>
      </div>
      <div>
        <button onClick={handleRerender}>Click to re-render</button>
      </div>
    </div>
  );
};

export default CountRender;
