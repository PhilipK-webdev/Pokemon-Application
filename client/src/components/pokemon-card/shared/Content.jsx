import React from "react";
import styled from "styled-components";

const Content = ({ type, pokemon }) => {
  const renderData = () => {
    let component;
    switch (type) {
      case "info":
        component = (
          <div style={{ padding: "5px" }}>
            <div
              style={{
                padding: "5px",
                fontWeight: "bold",
                backgroundImage: "conic-gradient(#553c9a, #ee4b2b, #00c2cb)",
                color: "transparent",
                backgroundClip: "text",
                fontSize: "28px",
              }}
            >
              Info
            </div>
            <div style={{ padding: "5px" }}>Species: {pokemon.species}</div>
            <div style={{ padding: "5px" }}>Height: {pokemon.height}m</div>
            <div style={{ padding: "5px" }}>Weight: {pokemon.weight}kg</div>
            <div style={{ padding: "5px" }}>Abilities: {pokemon.abilities}</div>
          </div>
        );
        break;
      case "stats":
        component = (
          <div style={{ padding: "3px" }}>
            <div
              style={{
                padding: "3px",
                fontWeight: "bold",
                backgroundImage: "conic-gradient(#553c9a, #ee4b2b, #00c2cb)",
                color: "transparent",
                backgroundClip: "text",
                fontSize: "28px",
              }}
            >
              Stats
            </div>
            {pokemon.stats &&
              pokemon.stats.length > 0 &&
              pokemon.stats.map((d, indexD) => {
                return (
                  <div key={indexD} style={{ padding: "4px" }}>
                    {d.name}: {d.base}
                  </div>
                );
              })}
          </div>
        );
        break;
      case "moves":
        component = (
          <div>
            <div
              style={{
                textAlign: "center",
                fontWeight: "bold",
                backgroundImage: "conic-gradient(#553c9a, #ee4b2b, #00c2cb)",
                color: "transparent",
                backgroundClip: "text",
                fontSize: "28px",
              }}
            >
              Moves
            </div>
            <p
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to right, #553c9a, #ee4b2b 10%, #553c9a 20%)",
                color: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}
              {pokemon.moves.join(", ")}
            </p>
          </div>
        );
        break;

      default:
        break;
    }

    return component;
  };

  return <ContentStyles>{renderData()}</ContentStyles>;
};

const ContentStyles = styled.div`
  width: 80%;
  height: auto;
  overflow-y: auto;
  padding: 10px;
`;

export default Content;
