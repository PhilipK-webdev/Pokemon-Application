import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../../styles/colors";
import Dashboard from "./Dashboard";
import TypesCard from "./TypesCard";
import NameForm from "./NameForm";
import IconsAccordion from "./IconsAccordion";
import {
  usePokemonsContext,
  usePokemonsUpdateContext,
} from "../../../hooks/useCustomContext.jsx";
import ImageCard from "./ImageCard.jsx";

const AccordionCard = ({ pokemon }) => {
  const [expanded, setExpanded] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [type, setType] = useState("info");
  const [nameChange, setNameChange] = useState("");
  const [originalName, setOriginalName] = useState("");
  const { page, temporaryPokemonsData, isToggleFavorite } =
    usePokemonsContext();
  const { setPokemonsData, setIsToggleFavorite, setErorr } =
    usePokemonsUpdateContext();
  let sessionData = JSON.parse(window.sessionStorage.getItem(page));

  useEffect(() => {
    setNameChange(pokemon.name);
    setOriginalName(pokemon.name);
  }, [pokemon.name]);

  useEffect(() => {
    setFavorite(pokemon.favorite);
  }, [pokemon.favorite, favorite]);

  const handleIconClick = async (e) => {
    e.stopPropagation();
    let favoriteTemp = favorite;
    try {
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ favorite: !favorite, uuid: pokemon.uuid }),
      };
      const responseUpdate = await fetch("/api/state/fav", options);
      if (responseUpdate.status === 200) {
        temporaryPokemonsData.forEach((pData) => {
          if (pData.uuid === pokemon.uuid) {
            pData["favorite"] = !favoriteTemp;
            setFavorite(!favoriteTemp);
            pokemon["favorite"] = !favoriteTemp;
          }
        });

        window.sessionStorage.setItem(
          page,
          JSON.stringify(temporaryPokemonsData)
        );
        const _sessionData = JSON.parse(window.sessionStorage.getItem(page));

        if (isToggleFavorite) {
          const filteredPokemons = _sessionData.filter(
            (pokemon) => pokemon.favorite
          );
          setPokemonsData(
            filteredPokemons && filteredPokemons.length > 0
              ? filteredPokemons
              : _sessionData
          );
          setIsToggleFavorite(filteredPokemons && filteredPokemons.length > 0);
        }
      } else {
        const err = await responseUpdate.json();
        setErorr(err);
      }
    } catch (error) {
      console.error("Error update favorite pokemon:", error);
    }
  };

  const handleAccordionClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (e) => {
    setNameChange(e.target.value);
  };

  const handleBlur = async () => {
    if (!nameChange.trim()) {
      setNameChange(originalName);
      return;
    }

    try {
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: nameChange, uuid: pokemon.uuid }),
      };
      const responseEdit = await fetch("/api/state/edit", options);
      if (responseEdit.status === 200) {
        sessionData.forEach((sData) => {
          if (sData.uuid === pokemon.uuid) {
            sData["name"] = nameChange;
          }
        });
        window.sessionStorage.setItem(page, JSON.stringify(sessionData));
        pokemon["name"] = nameChange;
      } else {
        const err = await responseEdit.json();
        setErorr(err);
      }
    } catch (error) {
      console.error("Error edit the name of the pokemon:", error);
    }
  };

  const handleDisplayMoreData = (e, _type) => {
    e.stopPropagation();
    setType(_type);
  };
  return (
    <AccordionStyles>
      <Accordion
        expanded={expanded}
        onClick={handleAccordionClick}
        className="accordion"
      >
        <AccordionSummary
          expandIcon={
            <IconsAccordion
              expanded={expanded}
              favorite={favorite}
              handleIconClick={handleIconClick}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <ImageCard
            filterColor={colors[pokemon.types.split(",")[0]]}
            url={pokemon.url}
            name={pokemon.name}
          />

          <DataStyles>
            <NameForm
              handleChange={handleChange}
              nameChange={nameChange}
              handleBlur={handleBlur}
            />
            <TypesCard
              types={pokemon.types}
              bgColor={colors[pokemon.types.split(",")[0]]}
            />
          </DataStyles>
        </AccordionSummary>
        <AccordionDetails className="accordion-details">
          <Dashboard
            onClick={handleDisplayMoreData}
            pokemon={pokemon}
            type={type}
          />
        </AccordionDetails>
      </Accordion>
    </AccordionStyles>
  );
};

const AccordionStyles = styled.div`
  .accordion {
    background-image: -webkit-linear-gradient(
      45deg,
      #ff7878,
      #ffc898,
      #fff89a,
      #cdf2ca,
      #a2cdcd,
      #d1e8e4,
      #cab8ff
    );
    color: black;
    font-size: 18px;
    border-radius: 10px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 10);
    @media (max-width: 1025px) {
      display: flex;
      flex-direction: column;
      background-color: black;
    }
  }

  .MuiAccordionSummary-expandIconWrapper.Mui-expanded {
    transform: rotate(0deg);
  }

  .Mui-focusVisible {
    background-color: transparent;
  }
  .input-name {
    background-color: transparent;
    border: none;
    color: black;
    font-size: 16px;
    width: 100px;
    cursor: pointer;
    padding-left: 10px;

    @media (max-width: 1025px) {
      font-size: 13px;
      width: 85px;
    }
  }

  label {
    @media (max-width: 1025px) {
      font-size: 13px;
    }
  }

  .expand-icon {
    color: black;
    position: absolute;
    top: 46px;
    right: 10px;
    @media (max-width: 1025px) {
      top: 40px;
    }
  }

  .image {
    width: 150px;
    height: 150px;
    @media (max-width: 1025px) {
      width: 100px;
      height: 100px;
    }
  }

  .accordion-details {
    display: flex;
    justify-content: space-evenly;
  }
`;

const DataStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default AccordionCard;
