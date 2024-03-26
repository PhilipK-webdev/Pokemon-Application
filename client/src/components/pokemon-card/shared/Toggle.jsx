import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import styled from "styled-components";
const Toggle = () => {
  return (
    <ToogleStyle>
      <FormGroup>
        <FormControlLabel control={<Switch />} label="Sort By Favorite" />
      </FormGroup>
    </ToogleStyle>
  );
};

const ToogleStyle = styled.div`
  width: 100%;
  padding-left: 10px;
  height: 50px;
`;
export default Toggle;
