import { useEffect, useState } from "react";
import styled from "styled-components";
import PokemonCard from "./pokemon-card/PokemonCard";
import PaginationCard from "./pokemon-card/shared/PaginationCard";
import Toggle from "./pokemon-card/shared/Toggle";

const Main = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [allPokemons, setAllPokemons] = useState([]);
  const [temporaryAllPokemons, setTemporaryAllPokemons] = useState([]);
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    const sessionData = JSON.parse(window.sessionStorage.getItem(page));
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/state?page=${page}&limit=${limit}&offset=${offset}`
        );
        if (response.status === 200) {
          const data = await response.json();
          setAllPokemons(data);
          setTemporaryAllPokemons(data);
          window.sessionStorage.setItem(page, JSON.stringify(data));
          setIsToggle(false);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    if (sessionData && sessionData.length > 0) {
      setAllPokemons(sessionData);
      setTemporaryAllPokemons(sessionData);
      setIsToggle(false);
    } else {
      fetchData();
    }
  }, [limit, offset, page]);

  const handlePagination = (e, number) => {
    setPage(number);
    setLimit(10);
    setOffset(page * limit);
  };

  const handleToggle = (e) => {
    const { checked } = e.target;
    if (checked) {
      const filteredFavoritePokemons = allPokemons.filter(
        (pokemon) => pokemon.favorite
      );
      setAllPokemons(filteredFavoritePokemons);
    } else {
      setAllPokemons(temporaryAllPokemons);
    }
    setIsToggle(checked);
  };
  return (
    <MainStyle>
      <Toggle handleToggle={handleToggle} isToggle={isToggle} />
      {allPokemons &&
        allPokemons.length > 0 &&
        allPokemons.map((pokemon) => {
          return (
            <PokemonCard pokemon={pokemon} uuid={pokemon.uuid} page={page} />
          );
        })}
      <PaginationCard handlePagination={handlePagination} page={page} />
    </MainStyle>
  );
};

const MainStyle = styled.div`
  min-height: calc(100vh - 150px);
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5px;
  margin-bottom: 10px;
`;
export default Main;
