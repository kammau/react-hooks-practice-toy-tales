import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onToyDelete, onToyLike}) {
  return (
    <div id="toy-collection">{toys.map((toy) => <ToyCard key={toy.name} toy={toy} onToyDelete={onToyDelete} onToyLike={onToyLike}/>)}</div>
  );
}

export default ToyContainer;
