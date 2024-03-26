import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Icon } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { colors } from "../../../styles/colors";
import Dashboard from "./Dashboard";
import { useEffect } from "react";

const AccordionCard = ({ pokemon, uuid, page }) => {
  const [expanded, setExpanded] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [type, setType] = useState("info");
  const [nameChange, setNameChange] = useState("");
  const [click, setClicked] = useState(true);
  const sessionData = JSON.parse(window.sessionStorage.getItem(page));

  useEffect(() => {
    setFavorite(pokemon.favorite ? pokemon.favorite : false);
    setNameChange(pokemon.name);
  }, [pokemon.favorite, pokemon.name]);

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
    <AccordionStyles key={uuid}>
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
          expandIcon={
            <div style={{ position: "relative" }}>
              <IconStyle>
                <Icon style={{ color: favorite ? "blue" : "white" }}>
                  <FavoriteIcon onClick={handleIconClick} />
                </Icon>
              </IconStyle>
              <ExpandMoreIcon
                style={{
                  color: "black",
                  position: "absolute",
                  top: "46px",
                  right: "10px",
                }}
              />
            </div>
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div
            style={{
              filter: `drop-shadow(0 0 10px ${
                colors[pokemon.types.split(",")[0]]
              })`,
              marginRight: "20px",
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
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <form style={{ width: "auto" }}>
                <label htmlFor="fname">Name:</label>
                <input
                  name="fname"
                  id="fname"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "black",
                    fontSize: "16px",
                    width: "100px",
                    cursor: "pointer",
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
                flexDirection: "column",
                width: "150px",
              }}
            >
              <div>Types:</div>
              <div
                style={{
                  display: "flex",
                  marginLeft: "-20px",
                  marginTop: "10px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {pokemon.types &&
                  pokemon.types.split(",").map((t, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          border: "2px solid white",
                          paddingTop: "5px",
                          paddingBottom: "5px",
                          width: "75px",
                          borderRadius: "50%",
                          textAlign: "center",
                          height: "40px",
                          marginLeft: "10px",
                          backgroundColor: `${
                            colors[pokemon.types.split(",")[0]]
                          }`,
                        }}
                      >
                        {t}
                      </div>
                    );
                  })}
              </div>
            </div>
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
        </AccordionDetails>
      </Accordion>
    </AccordionStyles>
  );
};

const IconStyle = styled.div`
  position: absolute;
  top: -68px;
  right: 10px;
`;

const AccordionStyles = styled.div`
  .MuiAccordionSummary-expandIconWrapper.Mui-expanded {
    transform: rotate(0deg);
  }
`;
export default AccordionCard;
