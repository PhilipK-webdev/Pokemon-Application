import { useEffect, useState } from "react";
import styled from "styled-components";
import PokemonCard from "./pokemon-card/PokemonCard";
import PaginationCard from "./pokemon-card/shared/PaginationCard";
import Toggle from "./pokemon-card/shared/Toggle";
import Skeleton from "@mui/material/Skeleton";
import { useMediaQuery } from "@mui/material";

const Main = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [allPokemons, setAllPokemons] = useState([]);
  const [temporaryAllPokemons, setTemporaryAllPokemons] = useState([]);
  const [isToggle, setIsToggle] = useState(false);
  const mobile = useMediaQuery("(max-width:1250px)");

  useEffect(() => {
    const sessionData = JSON.parse(window.sessionStorage.getItem(page));
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/state?page=${page}&limit=${limit}`);
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
  }, [limit, page]);

  const handlePagination = (e, number) => {
    setPage(number);
  };

  const handleToggle = (e) => {
    const { checked } = e.target;
    let filteredFavoritePokemons = [];
    if (checked) {
      filteredFavoritePokemons = allPokemons.filter(
        (pokemon) => pokemon.favorite
      );
    }
    setAllPokemons(
      filteredFavoritePokemons.length > 0
        ? filteredFavoritePokemons
        : temporaryAllPokemons
    );
    setIsToggle(checked);
  };
  return (
    <MainStyle>
      {allPokemons && allPokemons.length > 0 ? (
        <>
          <Toggle handleToggle={handleToggle} isToggle={isToggle} />
          {allPokemons &&
            allPokemons.length > 0 &&
            allPokemons.map((pokemon) => {
              return (
                <PokemonCard
                  pokemon={pokemon}
                  uuid={pokemon.uuid}
                  page={page}
                />
              );
            })}
          <PaginationCard handlePagination={handlePagination} page={page} />
        </>
      ) : (
        <>
          <Skeleton
            variant="rounded"
            width={150}
            height={50}
            style={{ marginLeft: "10px" }}
          />
          {Array.from({ length: 10 }, (_, index) => (
            <Skeleton
              variant="rounded"
              width={mobile ? 400 : 800}
              height={mobile ? 120 : 193}
              key={index}
              className="skeleton-pokemons"
            />
          ))}
          <div style={{ position: "relative" }}>
            <Skeleton
              variant="rounded"
              width={210}
              height={60}
              style={{ position: "absolute", left: "600px" }}
            />
          </div>
        </>
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
