import React, { useState } from 'react';

const Counter = () => {
  // Declare a state variable called 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to handle button click
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default Counter;
