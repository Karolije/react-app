import React, { useState } from "react";
import { StyledCheckbox } from "./Checkbox.styled";

const Checkbox = ({ children, ...props }) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked((prev) => !prev);
  };
  return (
    <StyledCheckbox onClick={handleClick} $checked={checked} {...props}>
      {children}
    </StyledCheckbox>
  );
};

export default Checkbox;
