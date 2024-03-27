import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import styled from "styled-components";
const CardMessage = ({ text }) => {
  return (
    <CardMessageStyles>
      <Card className="card-message">
        <CardContent>
          <h1>Message</h1>
          <div>{text}</div>
        </CardContent>
      </Card>
    </CardMessageStyles>
  );
};

const CardMessageStyles = styled.div`
  margin-left: auto;
  margin-right: auto;

  .card-message {
    width: 500px;
    height: 200px;
    display: flex;
    justify-content: center;
    min-width: 275px;
    margin-top: 20px;
  }
  h1 {
    text-align: center;
    color: #3069b2;
  }
`;
export default CardMessage;
