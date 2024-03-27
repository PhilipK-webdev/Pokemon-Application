import { createContext, useContext, useState, useEffect } from "react";

const PokemonsContext = createContext();
const UpdatePokemonsContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function usePokemonsContext() {
  return useContext(PokemonsContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePokemonsUpdateContext() {
  return useContext(UpdatePokemonsContext);
}

function PokemonsProvider({ children }) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [pokemonsData, setPokemonsData] = useState([]);
  const [temporaryPokemonsData, setTemporaryPokemonsData] = useState([]);
  const [isToggle, setIsToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setErorr] = useState("");
  useEffect(() => {
    const sessionData = JSON.parse(window.sessionStorage.getItem(page));
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/state?page=${page}&limit=${limit}`);
        if (response.status === 200) {
          const data = await response.json();
          setPokemonsData(data);
          setTemporaryPokemonsData(data);
          window.sessionStorage.setItem(page, JSON.stringify(data));
          setIsLoading(false);
        } else {
          const err = await response.json();
          setErorr(err);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    if (sessionData && sessionData.length > 0) {
      setPokemonsData(sessionData);
      setTemporaryPokemonsData(sessionData);
      setIsLoading(false);
    } else {
      fetchData();
    }
    // reset isToggle state for each page load
    // setIsToggle(false);
  }, [limit, page, isLoading]);

  return (
    <PokemonsContext.Provider
      value={{
        page,
        pokemonsData,
        temporaryPokemonsData,
        isToggle,
        limit,
        isLoading,
        error,
      }}
    >
      <UpdatePokemonsContext.Provider
        value={{
          setPage,
          setPokemonsData,
          setTemporaryPokemonsData,
          setIsToggle,
        }}
      >
        {children}
      </UpdatePokemonsContext.Provider>
    </PokemonsContext.Provider>
  );
}

export { PokemonsProvider };
