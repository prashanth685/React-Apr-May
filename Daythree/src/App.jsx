import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./app/counterSlice";
import Form from "./Components/Form";
const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <Form />
    </>
  );
};

export default App;
