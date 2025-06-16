import styled from "styled-components";
import { colors, borderRadius } from "../../theme";

export const StyledButton = styled.button`
  border: none;
  outline: none;
  padding: 1rem 2rem;
  border-radius: ${borderRadius};
  background: ${colors.background};
  box-shadow: 4px 4px 10px ${colors.shadowDark},
    -4px -4px 10px ${colors.shadowLight};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: inset 4px 4px 10px ${colors.shadowDark},
      inset -4px -4px 10px ${colors.shadowLight};
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 2px solid #aaa;
  }
`;
