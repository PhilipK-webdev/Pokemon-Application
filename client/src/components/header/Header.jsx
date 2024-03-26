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
  margin-top:10px;
  color:#3069B2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-style: normal;

  }
`;

export default Header;
