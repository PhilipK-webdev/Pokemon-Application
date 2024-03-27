import { useEffect, useState } from "react";
import styled from "styled-components";
import PokemonCard from "./pokemon-card/PokemonCard";
import PaginationCard from "./pokemon-card/shared/PaginationCard";
import ToggleAddFavorite from "./pokemon-card/shared/ToggleAddFavorite";
import CustomSkeleton from "./pokemon-card/shared/CustomSkeleton";

const Main = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [pokemonsData, setAllPokemons] = useState([]);
  const [temporaryPokemonsData, setTemporaryAllPokemons] = useState([]);
  const [isToggle, setIsToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const sessionData = JSON.parse(window.sessionStorage.getItem(page));
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/state?page=${page}&limit=${limit}`);
        if (response.status === 200) {
          const data = await response.json();
          setAllPokemons(data);
          setTemporaryAllPokemons(data);
          window.sessionStorage.setItem(page, JSON.stringify(data));
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    if (sessionData && sessionData.length > 0) {
      setAllPokemons(sessionData);
      setTemporaryAllPokemons(sessionData);
      setIsLoading(false);
    } else {
      fetchData();
    }
    // reset isToggle state for each page load
    setIsToggle(false);
  }, [limit, page, isLoading]);

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
    setAllPokemons(
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
          <PokemonCard page={page} pokemonsData={pokemonsData} />
        </>
      ) : (
        <CustomSkeleton />
      )}
      <PaginationCard
        handlePagination={handlePagination}
        page={page}
        isLoading={isLoading}
      />
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
