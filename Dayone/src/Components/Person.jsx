import React from "react";

export default function Person() {
  const person = [
    {
      name: "ajay",
      age: 20,
      role: "frontend",
    },
    {
      name: "vijay",
      age: 21,
      role: "frontend react",
    },
    {
      name: "sujay",
      age: 23,
      role: "backend ",
    },
    {
      name: "ganesh",
      age: 12,
      role: "sql",
    },
  ];
  return (
    <>
      <div>
        <ul>
          {person
            .filter((p) => p.role == "sql")
            .map((p, index) => (
              <li key={index}>{p.name}</li>
            ))}
        </ul>
      </div>
    </>
  );
}
