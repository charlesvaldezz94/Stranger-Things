import React, { useEffect, useState } from "react";
import { getPost } from "../API";

const Allposts = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const getPosts = await getPost();
      setAllPosts(getPosts);
    }
    fetchPosts();
    console.log(allPosts, "post.js");
  }, []);

  return (
    <div>
      <h1> Posts </h1>
      {allPosts.map(({ id, title, body }) => (
        <div key={id}> {title} </div>
      ))}
    </div>
  );
};
export default Allposts;
