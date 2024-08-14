import React, { useState } from "react";
import "../utils/Card.css";
import Tilt from "react-parallax-tilt";

function Card({ name, url, onClick, flipped }) {
  // teilt an jeden "/", filter boolean => filtert leere Strings, pop= letztes Element
  const pokemonId = url.split("/").filter(Boolean).pop();
  // funktionierende ImageUrl mit der entsprechenden ID
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  // Pfad zur Rückseite der Karte (public-Ordner)
  //const cardBackImage = "/card-back.png";

  const handleClick = () => {
    onClick(); // Callback für die Handhabung der Kartenauswahl
  };

  return (
    <Tilt
      tiltReverse /*Richtung des Kippeffekt*/
      reset /* Setzt auf ursprüngliche Perspektive*/
      glareEnable={true} /*Glanz*/
      glareMaxOpacity={0.4} /*Glanzsichtbarkeit*/
      glareColor="#fff"
      glarePosition="all" /*Position des Glanz, all = gleichmäßig*/
      className="card-container"
      scale={1.1}
    >
      <div
        className={`card-inner ${flipped ? "" : "flipped"}`}
        onClick={handleClick}
      >
        <div className="card-front">
          <img
            src={imageUrl}
            alt={name}
            className="card-image"
            draggable="false"
          />
          <p className="card-name">{name}</p>
        </div>
        <div className="card-back"></div>
      </div>
    </Tilt>
  );
}

export default Card;
