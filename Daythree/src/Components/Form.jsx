import React, { useState } from "react";

const Form = () => {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    tel: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(JSON.stringify(formdata));
    alert(JSON.stringify(formdata, null, 2));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          name="name"
          placeholder="enter a name"
          onChange={handleChange}
          value={formdata.name}
        />
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={formdata.email}
        />
        <label htmlFor="phone">phone</label>
        <input
          type="tel"
          name="tel"
          id="tel"
          onChange={handleChange}
          value={formdata.tel}
        />
        <label htmlFor="password">password</label>
        <input
          value={formdata.password}
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
