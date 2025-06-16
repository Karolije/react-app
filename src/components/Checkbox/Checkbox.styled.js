import styled from "styled-components";
import { colors, borderRadius } from "../../theme";
export const StyledCheckbox = styled.button`
  border: none;
  outline: none;
  padding: 1rem 2rem;
  border-radius: ${borderRadius};
  background: ${colors.background};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  box-shadow: ${({ $checked }) =>
    $checked
      ? `inset 4px 4px 10px ${colors.shadowDark}, inset -4px -4px 10px ${colors.shadowLight}`
      : `4px 4px 10px ${colors.shadowDark}, -4px -4px 10px ${colors.shadowLight}`};

  &:active {
    box-shadow: inset 2px 2px 6px ${colors.shadowDark},
      inset -2px -2px 6px ${colors.shadowLight};
  }

  &:focus-visible {
    outline: 2px solid ${colors.outline};
  }
`;
