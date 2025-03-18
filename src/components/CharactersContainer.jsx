import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import CharacterCard from "./CharacterCard";
import {
  PaginationContainer,
  CardsContainer,
  CharacterCardWrapper,
  StyledPagination,
  LoadingDiv,
} from "../styles/styles";

const BASE_URL = "https://api.disneyapi.dev/character";

const CharactersContainer = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(`${BASE_URL}?page=${page}`);

  if (loading)
    return (
      <LoadingDiv>
        <span>Loading data...</span>
      </LoadingDiv>
    );
  if (error)
    return (
      <LoadingDiv>
        <span>Error: {error}</span>
      </LoadingDiv>
    );

  const showModal = () => {
    alert("Działa");
  };

  return (
    <div>
      <CardsContainer>
        {data.data.map((character) => (
          <CharacterCardWrapper key={character._id}>
            <CharacterCard
              characterImage={character.imageUrl}
              characterName={character.name}
              characterFilms={character.films}
              onClick={showModal}
            />
          </CharacterCardWrapper>
        ))}
      </CardsContainer>

      <PaginationContainer>
        <StyledPagination
          count={data.info.totalPages}
          page={page}
          onChange={(event, value) => setPage(value)}
          shape="rounded"
          variant="outlined"
          showFirstButton
          showLastButton
        />
      </PaginationContainer>
    </div>
  );
};

export default CharactersContainer;
