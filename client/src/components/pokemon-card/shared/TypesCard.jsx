import styled from "styled-components";
const TypesCard = ({ types, bgColor }) => {
  return (
    <TypesCardStyles>
      <div id={"types"}>Types:</div>
      <TypesCardBody>
        {types &&
          types.split(",").map((t, index) => {
            return (
              <Elipse key={index} bgColor={bgColor}>
                {t}
              </Elipse>
            );
          })}
      </TypesCardBody>
    </TypesCardStyles>
  );
};

const TypesCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;

  #types {
    @media (max-width: 1025px) {
      font-size: 13px;
      margin-left: 16px;
    }
  }
`;

const TypesCardBody = styled.div`
    display: flex
    margin-left: -20px;
    margin-top: 10px;
    font-weight:bold;
    color: white
`;

const Elipse = styled.div`
  border: 2px solid white;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 75px;
  border-radius: 50%;
  text-align: center;
  height: 40px;
  margin-left: 10px;
  background-color: ${(props) => props.bgColor};

  @media (max-width: 1025px) {
    font-size: 15px;
    padding-top: 10px;
    width: 55px;
  }
`;
export default TypesCard;
