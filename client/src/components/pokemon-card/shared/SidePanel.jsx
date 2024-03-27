import styled from "styled-components";

const SidePanel = ({ onClick, type }) => {
  return (
    <SidePanelStyles>
      <div
        className={type === "info" ? "tab-clicked" : "tab"}
        onClick={(e) => onClick(e, "info")}
      >
        Info
      </div>
      <div
        className={type === "stats" ? "tab-clicked" : "tab"}
        onClick={(e) => onClick(e, "stats")}
      >
        Stats
      </div>
      <div
        className={type === "moves" ? "tab-clicked" : "tab"}
        onClick={(e) => onClick(e, "moves")}
      >
        Moves
      </div>
    </SidePanelStyles>
  );
};
const SidePanelStyles = styled.div`
  width: 20%;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-right: 4px solid white;
  .tab {
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    @media (max-width: 900px) {
      font-size: 15px;
    }
  }
  .tab-clicked {
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    text-decoration: underline;
    text-decoration-color: #3069b2;
    text-decoration-thickness: 3px;
    @media (max-width: 900px) {
      font-size: 15px;
    }
  }
`;

export default SidePanel;
