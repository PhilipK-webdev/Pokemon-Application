import styled from "styled-components";

const Content = ({ type, pokemon }) => {
  const renderData = () => {
    let component;
    switch (type) {
      case "info":
        component = (
          <InfoStyles>
            <InfoTitle>Info</InfoTitle>
            <div className="info-row">Species: {pokemon.species}</div>
            <div className="info-row">Height: {pokemon.height}m</div>
            <div className="info-row">Weight: {pokemon.weight}kg</div>
            <div className="info-row">Abilities: {pokemon.abilities}</div>
          </InfoStyles>
        );
        break;
      case "stats":
        component = (
          <StatsStyles>
            <StatsTitle>Stats</StatsTitle>
            {pokemon.stats &&
              pokemon.stats.length > 0 &&
              pokemon.stats.map((d, indexD) => {
                return (
                  <div key={indexD} className="stats-row">
                    {d.name}: {d.base}
                  </div>
                );
              })}
          </StatsStyles>
        );
        break;
      case "moves":
        component = (
          <MovesStyles>
            <MovesTitle>Moves</MovesTitle>
            <p> {pokemon.moves.join(", ")}</p>
          </MovesStyles>
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
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #3069b2;
    border-radius: 10px;
  }
`;

const StatsStyles = styled.div`
  padding: 3px;
  .stats-row {
    padding: 4px;
    @media (max-width: 900px) {
      font-size: 15px;
    }
  }
`;
const StatsTitle = styled.div`
  padding: 3px;
  font-weight: bold;
  background-image: conic-gradient(#553c9a, #ee4b2b, #00c2cb);
  color: transparent;
  background-clip: text;
  font-size: 28px;
`;

const InfoStyles = styled.div`
  padding: 5px;
  .info-row {
    padding: 5px;
    @media (max-width: 900px) {
      font-size: 15px;
    }
  }
`;

const InfoTitle = styled.div`
  padding: 5px;
  font-weight: bold;
  background-image: conic-gradient(#553c9a, #ee4b2b, #00c2cb);
  color: transparent;
  background-clip: text;
  font-size: 28px;
  @media (max-width: 900px) {
    font-size: 20px;
  }
`;

const MovesStyles = styled.div`
  p {
    background-image: repeating-linear-gradient(
      to right,
      #553c9a,
      #ee4b2b 10%,
      #553c9a 20%
    );
    color: transparent;
    background-clip: text;
    @media (max-width: 900px) {
      font-size: 13px;
    }
  }
`;

const MovesTitle = styled.div`
  text-align: center;
  font-weight: bold;
  background-image: conic-gradient(#553c9a, #ee4b2b, #00c2cb);
  color: transparent;
  background-clip: text;
  font-size: 28px;
  @media (max-width: 900px) {
    font-size: 20px;
  }
`;
export default Content;
