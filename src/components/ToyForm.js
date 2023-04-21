import React, { useState } from "react";

function ToyForm({onAddNewToy}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  

  function handleSubmit(event) {
    event.preventDefault()
    onAddNewToy({
      name: name,
      image: image
    })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
