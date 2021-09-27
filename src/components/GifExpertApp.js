import React, { useState } from "react";

export const GifExpertApp = () => {
  // const categoria = ["One punch", "Samurai X", "Dragon Ball"];

  const [categoria, setCategoria] = useState([
    "One punch",
    "Samurai X",
    "Dragon Ball",
  ]);
  const handleAdd = () => {
    setCategoria([...categoria, "Kenichi"]);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <button onClick={handleAdd}>Agregar</button>
      <ol>
        {categoria.map((c, i) => {
          return <li key={i}>{c} </li>;
        })}
      </ol>
    </>
  );
};
