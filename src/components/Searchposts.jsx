import React,{useEffect, useState} from 'react';

export const Searchposts = ({allPosts, setSearchResults}) => {
    const handleSubmit = (e) => e.preventDefault()
    const handleSearchChange = (e) => {
        if (e.target.value){

        const resultsArray = allPosts.filter(post => post.title.includes(e.target.value))

        setSearchResults(resultsArray)}

        else {
            setSearchResults(allPosts);
        }

    }
    return (
        <div> 
            <span> Search Bar </span>
            <form className="search" onSubmit={handleSubmit}>
                <input 
                className="searchBar"
                type="text"
                onChange={handleSearchChange}/> 
                <button className="searchButton"> Search </button>
            </form>

        </div>
    )
}

export default Searchposts