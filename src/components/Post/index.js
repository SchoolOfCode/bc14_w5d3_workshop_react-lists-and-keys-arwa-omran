import React from "react";

import "./index.css";

function Post(post) {
  return <article>
    <h2>{post.title}</h2>
    <p>{post.date}</p>
    <p>{post.author}</p>
    <p>{post.text}</p>
    <ul>
      {post.highlights.map((highlight) => {
        return <li>{highlight}</li>;
      })}
    </ul>
    <img src={post.image.link} alt={post.image.alt} />
  </article>;
}

export default Post;
