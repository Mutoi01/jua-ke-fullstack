import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../add.css';

function AddStory({onAddStory}) {
  const [title, setTitle] = useState("");
  const [cover_image, setCover_image] = useState("");
  const [content, setContent] = useState("");
  const [genre, setGenre] = useState("");

  const data = {
    title: title,
    cover_image: cover_image,
    content: content,
    genre: genre,
  };

  function submitForm(e) {
    e.preventDefault();
    fetch("/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        cover_image: cover_image,
        content: content,
        genre: genre,
      }),
    })
      .then((r) => r.json())
      .then((newStory) => onAddStory(newStory));
  } 

  return (
    <div className="container">
      <h2>ADD Story</h2>
      <form className="form-container">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter title"
        />
        <input
          value={cover_image}
          onChange={(e) => setCover_image(e.target.value)}
          type="text"
          placeholder="Enter cover_image"
        />
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text"
          placeholder="Enter content."
        />
         <input
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          type="text"
          placeholder="Enter genre."
        />
        <button
        className="btn"
          type="submit"
          onClick={submitForm}
        >
          ADD STORY
        </button>
      </form>
    </div>
  );
}

export default AddStory;