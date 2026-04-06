import React, { useEffect, useState } from "react";
import axios from "axios";
const Rest = () => {
  const [post, setPost] = useState([]);

  async function getdata() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(res.data);
    setPost(res.data);
  }

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <ul>
        {post.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};
export default Rest;
