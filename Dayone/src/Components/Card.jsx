import React from "react";

const Card = () => {
  const person = {
    name: "Georgia ",
    theme: {
      backgroundColor: "black",
      color: "pink",
    },
  };
  return (
    <div style={{ ...person.theme, display: "flex" }}>
      <h1>{person.name}</h1>
      <img
        src="https://images.unsplash.com/photo-1775138386053-5766c8c10e85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
        alt=""
        height={200}
        style={{ objectFit: "cover" }}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Improve the videophone</li>
        <li>Improve the videophone</li>
      </ul>
    </div>
  );
};

export default Card;
