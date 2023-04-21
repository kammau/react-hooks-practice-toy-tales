import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then((res) => res.json())
    .then((toyData) => setToys(toyData))
  }, [])

  function addNewToy(newToy) {
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newToy.name,
        image: newToy.image,
        likes: 0
      })
    })
    .then((res) => res.json())
    .then((newToyData) => setToys([...toys, newToyData]))
  }

  function handleToyDelete(toy) {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res) => res.json)
    .then(() => {
      const updatedToys = toys.filter((t) => t.id !== toy.id);
      setToys(updatedToys)
    })
  }

  function handleToyLike(toy) {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes: toy.likes + 1
      })
    })
    .then((res) => res.json())
    .then((toyData) => {
      const updatedToys = toys.map((t) => {
        if (t.id === toyData.id) {
          return toyData
        } else {
          return t
        }
      })
      setToys(updatedToys)
    })
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddNewToy={addNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onToyDelete={handleToyDelete} onToyLike={handleToyLike}/>
    </>
  );
}

export default App;
