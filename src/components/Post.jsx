import react, {useEffect, useState} from 'react'
import {getPost} from '../API'

const Post = () => {
    const [allPosts, setAllPosts] = useState([])
    
    useEffect(() => {
        async function fetchPosts() {
           const getPosts = await getPost()
           setAllPosts(getPosts)
           } 
           fetchPosts()
    }, []) 
    console.log(allPosts)
    
    return (
        <h2>this is post</h2>
    )
}






export default Post