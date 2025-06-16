import React from "react";
import { StyledSelect } from "./Select.styled";

const Select = ({ children, value, ...props }) => {
  return (
    <StyledSelect value={value} $hasValue={!!value} {...props}>
      {children}
    </StyledSelect>
  );
};

export default Select;
