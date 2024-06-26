import styled from "styled-components";
import TooltipCustom from "./TooltipCustom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Icon } from "@mui/material";
const IconsAccordion = ({ favorite, handleIconClick, expanded }) => {
  return (
    <div style={{ position: "relative" }}>
      <IconStyle>
        <TooltipCustom
          title={favorite ? "Remove from favorite" : "Add to favorite"}
        >
          <Icon style={{ color: favorite ? "blue" : "white" }}>
            <FavoriteIcon onClick={handleIconClick} />
          </Icon>
        </TooltipCustom>
      </IconStyle>
      <TooltipCustom title={expanded ? "Close card" : "Open card"}>
        <ExpandMoreIcon className="expand-icon" />
      </TooltipCustom>
    </div>
  );
};

const IconStyle = styled.div`
  position: absolute;
  top: -68px;
  right: 10px;

  @media (max-width: 1025px) {
    top: -50px;
  }
`;
export default IconsAccordion;
