import styled from "styled-components";
import { colors, borderRadius } from "../../theme";

export const StyledSelect = styled.select`
  border: none;
  outline: none;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: ${borderRadius};
  background: ${colors.background};
  box-shadow: inset 4px 4px 10px #bebebe, inset -4px -4px 10px #ffffff;
  font-size: 1rem;
  width: 100%;
  max-width: 380px;
  margin: 0 auto 1.5rem auto;
  display: block;
  font-family: inherit;
  line-height: 1.2;
  color: ${({ $hasValue }) => ($hasValue ? colors.text : colors.placeholder)};
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='%23666' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;

  &:focus {
    box-shadow: inset 2px 2px 5px #bebebe, inset -2px -2px 5px #ffffff;
  }

  option {
    color: ${colors.text};
  }

  option[value=""] {
    color: ${colors.placeholder};
  }
`;
