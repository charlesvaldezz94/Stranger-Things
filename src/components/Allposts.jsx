import React, { useEffect, useState } from "react";
import { getPost } from "../API";
import {Searchposts} from "./Searchposts"
import Createpost from "./Createpost"
import './Allposts.css'

const Allposts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([])
  const [postId, setPostId] = useState(null)

console.log(allPosts)

  useEffect(() => {
    async function fetchPosts() {
      const getPosts = await getPost();
      setAllPosts(getPosts);
      setSearchResults(getPosts);
    }
    fetchPosts();
  }, []);

  return (
  <>
  <h1> Posts</h1>  
  <div id="Createpost">  
  <Createpost 
  allPosts={allPosts}
  setAllPosts = {setAllPosts}
   />
  </div> 
<div id="Searchposts">
  <Searchposts allPosts={allPosts} setSearchResults={setSearchResults}/>
  {/* {
    postId
    ? <update allPosts={posts} setAllPosts
  } */}
  {
    searchResults.map(post => <div className="allPosts" key={post._id}>
      <h3> {post.title} </h3>
      <h4> {post.author.username} </h4> 
      <div> {post.description} </div>
      <div> {post.location} </div>
      <div> {post.price} </div>
      <button type="button"
      className="editPost"
      onClick={()=> setPostId(post.id)}> Edit </button>
      <button> Delete </button>
    </div>
    
  )
  } 
  </div>

  </>)
}

export default Allposts;