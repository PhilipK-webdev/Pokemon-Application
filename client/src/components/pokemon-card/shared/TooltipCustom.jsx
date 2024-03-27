import Tooltip from "@mui/material/Tooltip";
const TooltipCustom = ({ children, title }) => {
  return (
    <Tooltip title={title} placement="top">
      {children}
    </Tooltip>
  );
};

export default TooltipCustom;
