import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>
          increment by 1
        </button>
        <button onClick={() => setCount((prev) => prev + 2)}>
          increment by 2
        </button>
        <button onClick={() => setCount((prev) => prev - 1)}>
          decrement by -1
        </button>
        <button onClick={() => setCount((prev) => prev - 2)}>
          decrement by -2
        </button>
        <button onClick={() => setCount(count + 5)}>incremet by 5</button>
        <button onClick={() => setCount(count - 5)}>decremet by -5</button>
      </div>
    </>
  );
};
export default Counter;
