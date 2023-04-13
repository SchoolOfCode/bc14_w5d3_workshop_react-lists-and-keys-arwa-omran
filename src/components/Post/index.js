import React from "react";

import "./index.css";

function Post(prop) {
  return <article>
    <h2>{prop.title}</h2>
    <p>{prop.date}</p>
    <p>{prop.author}</p>
    <p>{prop.text}</p>
    <ul>
      {prop.highlights.map((highlight) => {
        return <li>{highlight}</li>;
      })}
    </ul>
    <img src={prop.image.link} alt={prop.image.alt} />
  </article>;
  // make a div for every two props
}

export default Post;
