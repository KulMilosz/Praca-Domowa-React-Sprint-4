import styled from "styled-components";
import { Pagination as MuiPagination } from "@mui/material";

export const CardContainer = styled.div`
  height: 300px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

export const CardName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin: 10px 0;
`;

export const CardButton = styled.button`
  background-color: #1976d2;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #115293;
  }
`;

export const CardInfo = styled.div`
  margin-top: 10px;
  max-height: 100px;
  overflow-y: auto;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 8px;
  padding: 16px;
`;

export const CharacterCardWrapper = styled.div``;

export const StyledPagination = styled(MuiPagination)`
  & .MuiPaginationItem-root {
    border-radius: 50%;
    margin: 0 4px;
  }
`;

export const LoadingDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-size: 2rem;
  text-align: center;
`;
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px); /* Rozmycie tła */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
