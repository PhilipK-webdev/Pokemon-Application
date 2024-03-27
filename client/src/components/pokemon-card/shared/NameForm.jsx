import TooltipCustom from "./TooltipCustom";

const NameForm = ({ handleChange, nameChange, handleBlur }) => {
  return (
    <div>
      <form style={{ width: "auto" }}>
        <label htmlFor="fname">Name:</label>
        <TooltipCustom title={"Edit name"}>
          <input
            name="fname"
            id="fname"
            className="input-name"
            onBlur={handleBlur}
            onMouseDown={(e) => {
              e.stopPropagation();
            }}
            type="text"
            value={nameChange}
            onClick={(e) => {
              e.stopPropagation();
            }}
            onChange={handleChange}
          />
        </TooltipCustom>
      </form>
    </div>
  );
};

export default NameForm;
