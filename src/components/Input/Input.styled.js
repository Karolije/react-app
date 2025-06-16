import styled from "styled-components";
import { colors, borderRadius } from "../../theme";
export const StyledInput = styled.input`
  border: none;
  outline: none;
  padding: 1rem;
  border-radius: ${borderRadius};
  background: ${colors.background};
  box-shadow: inset 4px 4px 10px ${colors.shadowDark},
    inset -4px -4px 10px ${colors.shadowLight};
  font-size: 1rem;
  width: 100%;
  max-width: 350px;
  margin: 0 auto 1.5rem auto;
  display: block;

  &::placeholder {
    color: #888;
    opacity: 1;
  }
`;
