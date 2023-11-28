import styled from "styled-components";
import {bgColor, theme, tplColor} from "shared/lib";

export const SportEventWrap = styled.div<{primary?: string}>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 10px 10px 0 0;
  margin: 0 -16px -16px;
  padding: 24px;
  color: ${tplColor.white};

  .sport-event-address {
    ${theme.body01};
  }

  .sport-event-time {
    ${theme.title02}
  }

  ${props => props.primary === 'color01' && `
    background-color: ${bgColor.color01};
  `}

  ${props => props.primary === 'color02' && `
    background-color: ${bgColor.color02};
  `}
`;
