import React, { useEffect, useState } from "react";
import { getPost } from "../API";

const Post = () => {
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
        al;kdjf
      {/* <h1> Posts </h1>
      {allPosts.map(({ id, title, body }) => (
        <div key={posts.id}> </div>
      ))} */}
    </div>
  );
};
export default Post;
