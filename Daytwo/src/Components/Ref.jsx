import React, { useRef } from "react";
import Main from "./Main";
import Model from "./Model";

const Ref = () => {
  const ref = useRef(0);

  const handleclick = () => {
    ref.current = ref.current + 1;
    alert(`you clicked ${ref.current} times`);
  };
  return (
    <>
      {/* <button onClick={handleclick}>click me</button> */}
      <Main />
      <Model />
    </>
  );
};

export default Ref;
