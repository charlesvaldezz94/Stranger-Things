import React, { useState, useEffect } from "react";
const BASE_URL = "https://strangers-things.herokuapp.com/api";
const COHORT = "2209-FTB-ET-WEB-FT";

const Createpost = (props) => {
  const allPosts = props.allPosts;
  const setAllPosts = props.setAllPosts;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const token = localStorage.getItem("token");
      console.log("title, description: ", title, description);
      const response = await fetch(`${BASE_URL}/${COHORT}/posts`, {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: {
            title,
            description,
            price,
            willDeliver: false,
          },
        }),
      });
      const data = await response.json();
      console.log("data", data);
      setAllPosts(data, ...[allPosts]);
      setTitle("");
      setDescription("");
      setPrice("");
      setLocation("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2> Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <label> Title </label>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <label> Description </label>
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
        <label> Price </label>
        <input
          type="text"
          placeholder="price"
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
        />
        <label> Location </label>
        <input
          type="text"
          placeholder="location"
          value={location}
          onChange={(ev) => setLocation(ev.target.value)}
        />
        <button> Post </button>
      </form>
    </div>
  );
};

export default Createpost;
