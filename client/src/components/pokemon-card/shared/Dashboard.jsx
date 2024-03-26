import React from "react";
import styled from "styled-components";
import SidePanel from "./SidePanel";
import Content from "./Content";
const Dashboard = ({ onClick, pokemon, type }) => {
  return (
    <DashboardStyles>
      <SidePanel onClick={onClick} type={type} />
      <Content type={type} pokemon={pokemon} />
    </DashboardStyles>
  );
};

const DashboardStyles = styled.div`
  width: 100%;
  height: 250px;
  border: 2px solid white;
  display: flex;
  border-radius: 10px;
`;

export default Dashboard;
