import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import styled from "styled-components";
import TooltipCustom from "./TooltipCustom";
const ToggleAddFavorite = ({ handleToggle, isToggle }) => {
  return (
    <ToogleStyle>
      <FormGroup>
        <FormControlLabel
          className="form-controll"
          control={
            <TooltipCustom
              title={isToggle ? "Show Favorites Pokemons" : "Show All Pokemons"}
            >
              <Switch
                style={{ pointerEvents: "auto" }}
                onChange={handleToggle}
                checked={isToggle}
                value={isToggle}
              />
            </TooltipCustom>
          }
        />
      </FormGroup>
    </ToogleStyle>
  );
};

const ToogleStyle = styled.div`
  padding-left: 10px;
  height: 50px;

  .form-controll {
    pointer-events: none;
    color: #3069b2;
    fontweight: bold;
  }
`;
export default ToggleAddFavorite;
