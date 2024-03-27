import styled from "styled-components";
import AccordionCard from "./shared/AccordionCard";

const PokemonCard = ({ pokemonsData, page, isToggleFavorite }) => {
  return (
    pokemonsData &&
    pokemonsData.length > 0 &&
    pokemonsData
      .filter((p) => {
        if (!isToggleFavorite) {
          return true;
        }
        return p.favorite;
      })
      .map((pokemon) => {
        return (
          <CardStyle key={pokemon.uuid}>
            <AccordionCard pokemon={pokemon} page={page} />
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
