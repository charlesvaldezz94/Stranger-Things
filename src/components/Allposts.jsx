import React, { useEffect, useState } from "react";
import { getPost } from "../API";
import {Searchposts} from "./Searchposts"
import Createpost from "./Createpost"
import './Allposts.css'

const Allposts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      const getPosts = await getPost();
      setAllPosts(getPosts);
      setSearchResults(getPosts);
    }
    fetchPosts();
  }, []);

  return (<>
  <h1> Posts</h1>  
  <div id="Createpost">  
  <Createpost 
  allPosts={allPosts}
  setAllPosts = {setAllPosts}
   />
  </div> 
<div id="Searchposts">
  <Searchposts allPosts={allPosts} setSearchResults={setSearchResults}/>
  {
    searchResults.map(post => <div className="allPosts" key={post._id}>
      <h3> {post.title} </h3>
      <h4> {post.username} </h4> 
      <div> {post.description} </div>
      <div> {post.location} </div>
      <div> {post.price} </div>
      <button> Edit </button>
      <button> Delete </button>
    </div>
  )
  }
  </div>

  </>)
}

export default Allposts;