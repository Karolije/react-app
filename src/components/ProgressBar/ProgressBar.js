import React from "react";
import styled from "styled-components";
import { colors } from "../../theme";

const Wrapper = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${colors.shadowLight};
  border-radius: 20px;
  margin-bottom: 2rem;
  overflow: hidden;
`;

const Filler = styled.div`
  height: 100%;
  width: ${(props) => props.percent}%;
  background-color: ${colors.primary || "#6c63ff"};
  transition: width 0.3s ease;
`;

const ProgressBar = ({ percent }) => (
  <Wrapper>
    <Filler percent={percent} />
  </Wrapper>
);

export default ProgressBar;
