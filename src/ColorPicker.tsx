import { useState } from "react";
import { StyledDiv } from "./styles";


const ColorPicker = () => {
  const [color, setColor] = useState("#000000");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <>
      <h1>Color Picker</h1>
      <StyledDiv style={{ backgroundColor: color }}>
        <p>Selected color: {color}</p>
      </StyledDiv>
      <label>Select a color: </label>
      <input type="color" value={color} onChange={handleColorChange} />
    </>
  );
};

export default ColorPicker;

