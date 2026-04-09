// function Person() {
//   const person: { name: string; age: number }[] = [
//     {
//       name: "ajay",
//       age: 20,
//     },
//   ];
//   return (
//     <>
//       {person.map((item, index) => (
//         <div key={index}>
//           <li>name: {item.name}</li>
//           <li>age: {item.age}</li>
//         </div>
//       ))}
//     </>
//   );
// }

// export default Person;

const Person = () => {
  interface PersonType {
    name: string;
    age: number;
  }
  const person: PersonType[] = [{ name: "kiran", age: 12 }];
  return <div>Person :{person[0].name}</div>;
};

export default Person;
