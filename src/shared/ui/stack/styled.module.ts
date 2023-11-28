import styled from "styled-components";

export const StackWrap = styled.div<{gap?: number}>`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-self: stretch;
  gap: ${props => props.gap + 'px'};
`;
