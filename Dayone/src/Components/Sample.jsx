// import React, { useState } from "react";

// const Sample = () => {
//   const data = [
//     {
//       id: 1,
//       name: "ajay",
//       role: "SE",
//     },
//     {
//       id: 2,
//       name: "vijay",
//       role: "SD",
//     },
//     {
//       id: 3,
//       name: "Sanjay",
//       role: "Sql",
//     },
//   ];

//   const [persons, setPersons] = useState(data);
//   return (
//     <>
//       <div>
//         {persons.map((item, index) => (
//           <h2 key={index}>
//             {item.name}{" "}
//             <button
//               onClick={() =>
//                 setPersons(persons.filter((a) => a.id !== item.id))
//               }
//             >
//               delete
//             </button>
//           </h2>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Sample;

import React, { useState } from "react";

const Sample = () => {
  const data = [
    { id: 1, name: "ajay", role: "SE" },
    { id: 2, name: "vijay", role: "SD" },
    { id: 3, name: "Sanjay", role: "Sql" },
  ];

  const [persons, setPersons] = useState(data);
  const [lastDeleted, setLastDeleted] = useState(null);

  const handleDelete = (item) => {
    setLastDeleted(item);
    setPersons((prev) => prev.filter((a) => a.id !== item.id));
  };

  const handleUndo = () => {
    if (lastDeleted) {
      setPersons((prev) => [...prev, lastDeleted]);
      setLastDeleted(null);
    }
  };

  return (
    <>
      <div>
        {persons.map((item) => (
          <h2 key={item.id}>
            {item.name}
            <button onClick={() => handleDelete(item)}>delete</button>
          </h2>
        ))}
      </div>

      {lastDeleted && (
        <button onClick={handleUndo}>Undo Delete ({lastDeleted.name})</button>
      )}
    </>
  );
};

export default Sample;
