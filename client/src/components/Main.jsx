import styled from "styled-components";
import PokemonCard from "./pokemon-card/PokemonCard";
import PaginationCard from "./pokemon-card/shared/PaginationCard";
import ToggleAddFavorite from "./pokemon-card/shared/ToggleAddFavorite";
import CustomSkeleton from "./pokemon-card/shared/CustomSkeleton";
import {
  usePokemonsContext,
  usePokemonsUpdateContext,
} from "../hooks/useCustomContext";
import CardMessage from "./pokemon-card/shared/CardMessage";
const Main = () => {
  const {
    page,
    pokemonsData,
    temporaryPokemonsData,
    isToggle,
    isLoading,
    error,
  } = usePokemonsContext();
  const { setPage, setPokemonsData, setIsToggle } = usePokemonsUpdateContext();

  const handlePagination = (e, number) => {
    setPage(number);
  };

  const handleToggle = (e) => {
    const { checked } = e.target;
    let filteredFavoritePokemons = [];
    if (checked) {
      filteredFavoritePokemons = pokemonsData.filter(
        (pokemon) => pokemon.favorite
      );
    }
    setPokemonsData(
      filteredFavoritePokemons.length > 0
        ? filteredFavoritePokemons
        : temporaryPokemonsData
    );
    setIsToggle(checked);
  };

  return (
    <MainStyle>
      {!isLoading ? (
        <>
          <ToggleAddFavorite handleToggle={handleToggle} isToggle={isToggle} />
          <PokemonCard
            page={page}
            pokemonsData={pokemonsData}
            isToggle={isToggle}
            setIsToggle={setIsToggle}
          />
        </>
      ) : error ? (
        <CardMessage
          text={error.error.charAt(0).toUpperCase() + error.error.slice(1)}
        />
      ) : (
        <CustomSkeleton />
      )}
      {!pokemonsData.some((p) => p.favorite) && isToggle ? (
        <CardMessage
          text={
            "No pokemons were added to the favorite lise, please click on the toggle button and select your favorite pokemons"
          }
        />
      ) : (
        <PaginationCard
          handlePagination={handlePagination}
          page={page}
          isLoading={isLoading}
        />
      )}
    </MainStyle>
  );
};

const MainStyle = styled.div`
  min-height: calc(100vh - 150px);
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5px;
  margin-bottom: 10px;
  @media (max-width: 900px) {
    width: 100%;
    align-items: center;
  }

  .skeleton-pokemons {
    margin: 10px;
  }
`;
export default Main;
