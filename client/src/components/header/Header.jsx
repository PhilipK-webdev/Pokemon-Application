import styled from "styled-components";
const Header = () => {
  return (
    <HeaderStyle>
      <h1>Pokedex Web App</h1>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  height: 50px;
  width: 100%;
  background: #F6F8FA;
  font-family:"Helvetica", Arial, sans-serif;
  color:#FFCB03;
  display: flex;
  justify-content: center;
  align-items: center;
  }
`;

export default Header;
