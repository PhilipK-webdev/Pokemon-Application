import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import styled from "styled-components";
const Toggle = ({ handleToggle, isToggle }) => {
  return (
    <ToogleStyle>
      <FormGroup>
        <FormControlLabel
          style={{
            pointerEvents: "none",
            color: "#3069B2",
            fontWeight: "bold",
          }}
          control={
            <Switch
              style={{ pointerEvents: "auto" }}
              onChange={handleToggle}
              checked={isToggle}
              value={isToggle}
            />
          }
          label="Sort By Favorite"
        />
      </FormGroup>
    </ToogleStyle>
  );
};

const ToogleStyle = styled.div`
  padding-left: 10px;
  height: 50px;
`;
export default Toggle;
