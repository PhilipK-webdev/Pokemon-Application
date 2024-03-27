import Pagination from "@mui/material/Pagination";
import styled from "styled-components";
const PaginationCard = ({ handlePagination }) => {
  return (
    <PaginationStyle>
      <div>
        <Pagination
          count={Math.ceil(151 / 10)}
          color="primary"
          onChange={(event, pageNumber) => handlePagination(event, pageNumber)}
        />
      </div>
    </PaginationStyle>
  );
};

const PaginationStyle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: flex-end;
  padding: 10px;
  @media (max-width: 900px) {
    justify-content: center;
    width: auto;
  }
  .MuiPaginationItem-root {
    color: #3069b2;

    &.Mui-selected:hover {
      background: #3069b2;
    }
  }
`;
export default PaginationCard;
