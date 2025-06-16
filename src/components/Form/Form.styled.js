import styled from "styled-components";
import { colors, borderRadius } from "../../theme";

export const GenderGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const GenderOptions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Container = styled.div`
  position: relative;
  max-width: 400px;
  margin: 0 auto;
  height: 700px;
  background: ${colors.background};
  padding: 2rem;
  border-radius: ${borderRadius};
  box-shadow: 8px 8px 20px ${colors.shadowDark},
    -8px -8px 20px ${colors.shadowLight};

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

export const ButtonWrapper = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 0.85rem;
  margin-top: -1rem;
  margin-bottom: 1rem;
`;

export const SummaryGrid = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const SummaryItem = styled.li`
  background: ${colors.background};
  box-shadow: inset 4px 4px 10px ${colors.shadowDark},
    inset -4px -4px 10px ${colors.shadowLight};
  border-radius: ${borderRadius};
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-size: 0.9rem;
  color: ${colors.placeholder};
  margin-bottom: 0.3rem;
`;

export const Value = styled.span`
  font-size: 1.1rem;
  color: ${colors.text};
  font-weight: 600;
`;

export const SummaryItemWide = styled(SummaryItem)`
  grid-column: span 2;
`;
