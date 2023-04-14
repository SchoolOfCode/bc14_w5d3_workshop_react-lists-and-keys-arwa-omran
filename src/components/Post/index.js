import React from "react";

import "./index.css";

function Post(props) {
  function handleUpdateClick() {
    // Modify the post data
    const updatedPost = { ...props, title: `More information on ${props.title}` };

    // Call the parent component's update function
    props.onUpdate([updatedPost]);
  }
  return (
  <div className="post">
  <article>
    <h2>{props.title}</h2>
    <p>{props.date}</p>
    <p>{props.author}</p>
    <p>{props.text}</p>
    <ul>
      {props.highlights.map((highlight) => {
        return <li>{highlight}</li>;
      })}
    </ul>
    <img src={props.image.link} alt={props.image.alt} />
    <button onClick={handleUpdateClick}>Click here for more</button>
  </article>;
  </div>
  // make a div for every two propss
)};

export default Post;
