import React from "react";
import { useFetch } from "../hooks/useFetch";
import CharacterCard from "./CharacterCard";

const BASE_URL = "https://api.disneyapi.dev/character";

const CharactersContainer = () => {
  const { data, loading, error } = useFetch(BASE_URL);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;
  console.log(data);
  return (
    <div>
      {data.data.map((character) => (
        <CharacterCard
          key={character.id}
          characterImage={character.imageUrl}
          characterName={character.name}
          characterFilms={character.films}
        />
      ))}
    </div>
  );
};

export default CharactersContainer;
