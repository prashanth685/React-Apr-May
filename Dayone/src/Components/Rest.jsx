import React, { useEffect, useState, useTransition } from "react";
import axios from "axios";

const Rest = () => {
  const [post, setPost] = useState([]);
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  async function getdata() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPost(res.data);
  }

  function handleSearch(e) {
    const value = e.target.value;
    startTransition(() => {
      setQuery(value);
    });
  }

  useEffect(() => {
    getdata();
  }, []);

  const filteredPosts = post.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <input
        type="search"
        placeholder="Search posts..."
        value={query}
        onChange={handleSearch}
      />

      {isPending && <p>Searching...</p>}

      <ul>
        {filteredPosts.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Rest;
