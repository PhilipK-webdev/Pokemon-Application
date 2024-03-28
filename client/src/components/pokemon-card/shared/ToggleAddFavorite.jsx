import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import styled from "styled-components";
import TooltipCustom from "./TooltipCustom";
const ToggleAddFavorite = ({ handleToggle, isToggleFavorite }) => {
  return (
    <ToogleStyle>
      <FormGroup>
        <FormControlLabel
          className="form-controll"
          control={
            <TooltipCustom
              title={
                isToggleFavorite
                  ? "Show All Pokemons"
                  : "Show Favorites Pokemons"
              }
            >
              <Switch
                style={{ pointerEvents: "auto" }}
                onChange={handleToggle}
                checked={isToggleFavorite}
                value={isToggleFavorite}
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
