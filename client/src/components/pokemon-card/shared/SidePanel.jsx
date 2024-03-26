import React from "react";
import styled from "styled-components";

const SidePanel = ({ onClick }) => {
  return (
    <SidePanelStyles>
      <div className="tab" onClick={(e) => onClick(e, "info")}>
        Info
      </div>
      <div className="tab" onClick={(e) => onClick(e, "stats")}>
        Stats
      </div>
      <div className="tab" onClick={(e) => onClick(e, "moves")}>
        Moves
      </div>
    </SidePanelStyles>
  );
};
const SidePanelStyles = styled.div`
  width: 10%;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-right: 1px solid black;
  .tab {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default SidePanel;
