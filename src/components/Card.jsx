import React from "react";

function Card({ name, url }) {
  // teilt an jeden "/", filter boolean => filtert leere Strings, pop= letztes Element
  const pokemonId = url.split("/").filter(Boolean).pop();
  // funktionierende ImageUrl mit der entsprechenden ID
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  return (
    <div className="cards">
      <div
        className="singleCard"
        style={{
          width: "160px",
          height: "200px",
          backgroundColor: "white",
          margin: "5px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={imageUrl}
          alt={name}
          style={{ width: "100%", height: "auto", borderRadius: "10px" }}
        />
      </div>
      <br></br>
      <p>{name}</p>
    </div>
  );
}

export default Card;
