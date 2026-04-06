import React, { useState } from "react";
import { sculptureList } from "../utils/data";

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const hasNext = index < sculptureList.length - 1;
  const haveprev = index > 0;
  let sculpture = sculptureList[index];

  function handleClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleprev() {
    if (haveprev) {
      setIndex(index - 1);
    }
  }

  return (
    <>
      <div>
        <h2>
          {sculpture.name} by {sculpture.artist}
        </h2>
        <img src={sculpture.url} alt="" />
        <p>{sculpture.description}</p>
        <button onClick={handleClick}>next</button>
        <span>page of {index}</span>
        <button onClick={handleprev}>previous</button>
      </div>
    </>
  );
};

export default Gallery;
