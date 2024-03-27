import styled from "styled-components";
import AccordionCard from "./shared/AccordionCard";

const PokemonCard = ({ pokemonsData, page }) => {
  return (
    pokemonsData &&
    pokemonsData.length > 0 &&
    pokemonsData.map((pokemon) => {
      return (
        <CardStyle>
          <AccordionCard pokemon={pokemon} uuid={pokemon.uuid} page={page} />
        </CardStyle>
      );
    })
  );
};

const CardStyle = styled.div`
  width: 100%;
  height: auto;
  padding: 5px;

  @media (max-width: 900px) {
    padding-top: 2px;
    width: 50%;
  }
`;
export default PokemonCard;
