import React, { useEffect, useState } from 'react';
import CountRender from './CountRender';

const TestComponent = () => {
  const [color, setColor] = useState('32a852');

  const generateColor = () => {
    setColor(Math.random().toString(16).substr(-6));
  };

  return (
    <div>
      <CountRender />
      <div
        style={{
          backgroundColor: `#${color}`,
          width: '100px',
          padding: '10px',
          margin: '10px auto',
        }}
      >
        <p>Hello World!</p>
      </div>
      <button onClick={generateColor}>Click to change color and re-render Test Component</button>
    </div>
  );
};

export default TestComponent;
