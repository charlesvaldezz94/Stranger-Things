import React, { useEffect, useState } from "react";
import { getPost } from "../API";
import './Allposts.css'

const Allposts = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const getPosts = await getPost();
      setAllPosts(getPosts);
    }
    fetchPosts();
  }, []);

  return <>
  <h1> Posts</h1>
  {
    allPosts.map(post => <div className="allPosts" key={post.id}>
      <h3> {post.title} </h3>
      <h4> {post.username} </h4> 
      <div> {post.description} </div>
      <div> {post.location} </div>
      <div> {post.price} </div>
    </div>
  )
  }
  </>
}

export default Allposts;