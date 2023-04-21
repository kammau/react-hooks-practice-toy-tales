import React from "react";

function ToyCard({toy, onToyDelete, onToyLike}) {

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={() => onToyLike(toy)}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => onToyDelete(toy)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
