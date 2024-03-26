import React from "react";
import styled from "styled-components";
import SidePanel from "./SidePanel";
import Content from "./Content";
const Dashboard = ({ onClick, pokemon, type }) => {
  return (
    <DashboardStyles>
      <SidePanel onClick={onClick} />
      <Content type={type} pokemon={pokemon} />
    </DashboardStyles>
  );
};

const DashboardStyles = styled.div`
  width: 60%;
  height: 250px;
  border: 1px solid black;
  display: flex;
`;

export default Dashboard;
