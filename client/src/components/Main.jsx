import React from "react";
import styled from "styled-components";
import PokemonCard from "./pokemon-card/PokemonCard";
import PaginationCard from "./pokemon-card/shared/PaginationCard";
import Toggle from "./pokemon-card/shared/Toggle";
const Main = () => {
  return (
    <MainStyle>
      <Toggle />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PaginationCard />
    </MainStyle>
  );
};

const MainStyle = styled.div`
  // border: 1px solid black;
  min-height: calc(100vh - 150px);
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 10px;
`;
export default Main;
