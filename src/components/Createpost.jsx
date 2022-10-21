import React,{useState, useEffect} from 'react'

const BASE_URL = 'https://strangers-things.herokuapp.com/api'
const COHORT = '2209-FTB-ET-WEB-FT'

const Createpost = (allPosts, setAllPosts) => {
    const [title, setTitle] = useState([])
    const [description, setDescription] = useState([])

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        console.log('title, description: ', title, description);
        const response = await fetch(`${BASE_URL}/${COHORT}/posts`, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify({
                title,
                description,

            })
        });
        const data = await response.json();
        console.log('data', data);
        setPosts([data, ...allPosts]);
        setTitle('');
        setDescription('');
    }

    
    return (
        <div>
            <h2> Create a Post</h2> 
            <form onSubmit={handleSubmit}>
            <label> Title </label>
            <input type="text" placeholder="title" value={title} onChange={(ev) => setTitle(ev.target.value)}/>
            <label> Description </label>
            <input type="text" placeholder="description" value={description} onChange={(ev) => setDescription(ev.target.value)}/>
            <button> Post </button>
            </form>
        </div>
    )

}

export default Createpost