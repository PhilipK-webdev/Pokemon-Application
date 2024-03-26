import React from "react";
import styled from "styled-components";

const Content = ({ type, pokemon }) => {
  const renderData = () => {
    let component;
    switch (type) {
      case "info":
        component = (
          <div>
            Info
            <div style={{ padding: "5px" }}>Height:{pokemon.height}m</div>
            <div style={{ padding: "5px" }}>Weight:{pokemon.weight}kg</div>
            <div style={{ padding: "5px" }}>Abilities:{pokemon.abilities}</div>
          </div>
        );
        break;
      case "stats":
        component = (
          <div>
            Stats
            {pokemon.stats &&
              pokemon.stats.length > 0 &&
              pokemon.stats.map((d, indexD) => {
                return (
                  <div key={indexD} style={{ padding: "2px" }}>
                    {d.name}:{d.base}
                  </div>
                );
              })}
          </div>
        );
        break;
      case "moves":
        component = (
          <div>
            Moves
            <p> {pokemon.moves.join(", ")}</p>
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
  width: 90%;
  height: auto;
  overflow-y: scroll;
`;

export default Content;
