import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ThumbsUpDownOutlinedIcon from "@mui/icons-material/ThumbsUpDownOutlined";
import { Icon } from "@mui/material";
import { useState } from "react";
const AccordionCard = () => {
  const [expanded, setExpanded] = useState(false);
  const [iconColor, setIconColor] = useState("primary");

  const handleIconClick = (e) => {
    e.stopPropagation(); // Prevent accordion from toggling
    setIconColor("secondary"); // Change icon color to secondary
  };

  const handleAccordionClick = () => {
    setExpanded(!expanded); // Toggle accordion
    setIconColor("primary"); // Reset icon color to primary
  };

  return (
    <div>
      <Accordion expanded={expanded} onClick={handleAccordionClick}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{ height: "100px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <div>
              <img
                style={{ width: "100px", height: "100px" }}
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/140.svg"
                alt={"Pokemon name"}
              />
            </div>
            <div style={{ display: "flex", alignSelf: "center" }}>
              <span>Name</span>
            </div>
            <div
              style={{
                display: "flex",
                alignSelf: "center",
                border: "1px solid black",
                zIndex: "9999",
              }}
            >
              <Icon color={iconColor} onClick={handleIconClick}>
                <ThumbsUpDownOutlinedIcon />
              </Icon>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionCard;
