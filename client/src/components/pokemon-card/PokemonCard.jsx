import React from "react";
import styled from "styled-components";
import AccordionCard from "./shared/AccordionCard";
const PokemonCard = () => {
  return (
    <CardStyle>
      <AccordionCard />
    </CardStyle>
  );
};

const CardStyle = styled.div`
  width: 100%;
  height: auto;
  // border: 1px solid green;
  padding: 5px;
`;
export default PokemonCard;
