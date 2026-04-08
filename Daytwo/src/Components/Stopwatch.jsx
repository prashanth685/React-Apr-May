import React, { useRef, useState } from "react";

const Stopwatch = () => {
  const [starttime, setStarttime] = useState(null);
  const [now, setnow] = useState(null);
  const intervalref = useRef(null);

  function handlestart() {
    setStarttime(Date.now());
    setnow(Date.now());
    clearInterval(intervalref.current);
    intervalref.current = setInterval(() => {
      setnow(Date.now());
    }, 10);
  }

  function handlestop() {
    clearInterval(intervalref.current);
  }
  let secondspassed = 0;
  if (starttime != null && now != null) {
    secondspassed = (now - starttime) / 1000;
  }
  return (
    <>
      <h1>Time passed: {secondspassed.toFixed(3)}</h1>
      <button onClick={handlestart}>Start</button>
      <button onClick={handlestop}>Stop</button>
    </>
  );
};

export default Stopwatch;
