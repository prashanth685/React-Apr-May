import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    alert(JSON.stringify(form));
    // you can also send `form` to an API here
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px 15px",
        gap: "12px",
        width: "200px",
      }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter name"
        value={form.name}
        onChange={handleChange}
      />

      <label htmlFor="age">Age</label>
      <input
        type="number"
        id="age"
        name="age"
        placeholder="Enter age"
        value={form.age}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter email"
        value={form.email}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
