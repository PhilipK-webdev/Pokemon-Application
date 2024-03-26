import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Icon } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { colors } from "../../../styles/colors";
import Dashboard from "./Dashboard";

const AccordionCard = ({ pokemon, uuid, page }) => {
  const [expanded, setExpanded] = useState(false);
  const [favorite, setFavorite] = useState(
    pokemon.favorite ? pokemon.favorite : false
  );
  const [type, setType] = useState("info");
  const [nameChange, setNameChange] = useState(pokemon.name);
  const sessionData = JSON.parse(window.sessionStorage.getItem(page));

  const handleIconClick = async (e) => {
    e.stopPropagation();
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
        setFavorite(!favorite);
        sessionData.forEach((sData) => {
          if (sData.uuid === pokemon.uuid) {
            sData["favorite"] = !favorite;
          }
        });
        window.sessionStorage.setItem(page, JSON.stringify(sessionData));
        pokemon["favorite"] = !favorite;
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

  const handleBlur = () => {
    console.log(nameChange);
    console.log("pokemon", pokemon);
    // send the name to DB
  };

  const handleDisplayMoreData = (e, _type) => {
    e.stopPropagation();
    setType(_type);
  };
  return (
    <div key={uuid}>
      <Accordion
        expanded={expanded}
        onClick={handleAccordionClick}
        style={{
          backgroundImage:
            "-webkit-linear-gradient(45deg,#ff7878,#ffc898,#fff89a,#cdf2ca,#a2cdcd,#d1e8e4,#cab8ff)",
          color: "black",
          fontSize: "18px",
          borderRadius: "10px",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 10)",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div
            style={{
              filter: `drop-shadow(0 0 10px ${
                colors[pokemon.types.split(",")[0]]
              })`,
            }}
          >
            <img
              style={{ width: "150px", height: "150px" }}
              src={pokemon.url}
              alt={pokemon.name}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignSelf: "center",
                justifyContent: "center",
                width: "200px",
              }}
            >
              <form>
                <label htmlFor="fname">Name:</label>
                <input
                  name="fname"
                  id="fname"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "black",
                    fontSize: "16px",
                  }}
                  onBlur={handleBlur}
                  onMouseDown={(e) => {
                    e.stopPropagation();
                  }}
                  type="text"
                  value={nameChange}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  onChange={handleChange}
                />
              </form>
            </div>
            <div
              style={{
                display: "flex",
                alignSelf: "center",
                justifyContent: "center",
                width: "200px",
              }}
            >
              <span>Species: </span>
              <span>{pokemon.species}</span>
            </div>
            <div
              style={{
                display: "flex",
                alignSelf: "center",
                justifyContent: "center",
                width: "200px",
              }}
            >
              <span>Types: </span>
              <span>{pokemon.types}</span>
            </div>
            <IconStyle>
              <Icon style={{ color: favorite ? "blue" : "white" }}>
                <ThumbUpIcon onClick={handleIconClick} />
              </Icon>
            </IconStyle>
          </div>
        </AccordionSummary>
        <AccordionDetails
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Dashboard
            onClick={handleDisplayMoreData}
            pokemon={pokemon}
            type={type}
          />
          {/* <div>
            <div>
              <div
                style={{
                  textAlign: "center",
                  paddingBottom: "10px",
                  textDecoration: "underline",
                }}
              >
                Moves
              </div>
              <MovesCard moves={pokemon.moves} types={pokemon.types} />
            </div>
          </div>
          <div>
            <div>
              <div style={{ textAlign: "center", paddingBottom: "10px" }}>
                Stats
              </div>
              <StatsCard data={pokemon.stats} types={pokemon.types} />
            </div>
          </div>
          <div>
            <div style={{ textAlign: "center", paddingBottom: "10px" }}>
              Info
            </div>
            <InfoCard
              height={pokemon.height}
              weight={pokemon.weight}
              abilities={pokemon.abilities}
              types={pokemon.types}
            />
          </div> */}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const IconStyle = styled.div`
  display: flex;
  align-self: center;
`;
export default AccordionCard;
