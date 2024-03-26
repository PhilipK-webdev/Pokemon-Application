import styled from "styled-components";
import AccordionCard from "./shared/AccordionCard";

const PokemonCard = ({ pokemon, uuid, page }) => {
  return (
    <CardStyle>
      <AccordionCard pokemon={pokemon} uuid={uuid} page={page} />
    </CardStyle>
  );
};

const CardStyle = styled.div`
  width: 100%;
  height: auto;
  padding: 5px;
`;
export default PokemonCard;
