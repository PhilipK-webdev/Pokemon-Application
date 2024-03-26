import Pagination from "@mui/material/Pagination";
import styled from "styled-components";
const PaginationCard = ({ handlePagination }) => {
  return (
    <PaginationStyle>
      <div>
        <Pagination
          count={10}
          color="primary"
          variant="outlined"
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
`;
export default PaginationCard;
