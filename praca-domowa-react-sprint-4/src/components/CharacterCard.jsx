import React from "react";
import { useState } from "react";

const CharacterCard = ({ characterImage, characterName, characterFilms }) => {
  const [showInfo, setShowInfo] = useState(false);

  const showInformation = () => {
    setShowInfo((prev) => !prev);
  };
  return (
    <div>
      <img src={characterImage}></img>
      <div>{characterName}</div>
      <button onClick={() => showInformation()}>LEARN MORE</button>
      {showInfo && (
        <div>
          <ul>
            {characterFilms.map((film, index) => (
              <li key={index}>{film}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CharacterCard;
