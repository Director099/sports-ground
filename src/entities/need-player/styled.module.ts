import styled from "styled-components";
import {borderColor, textColor, theme, tplColor} from "shared/lib";

export const NeedPlayerWrap = styled.div<{firstPrimary?: boolean}>`
  position: relative;
  padding: 16px;
  border-radius: 8px;
  background: ${tplColor.black};
  background-clip: padding-box;
  border: 1px solid ${borderColor.playersUi01};
  height: 100%;

  ${props => props.firstPrimary && `
    border: solid 2px transparent;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin: -2px;
      border-radius: inherit;
      background: linear-gradient(0deg, #E97E00 37%, #08C71B 65%);
    }
  `}

  .title {
    ${theme.body01};
    color: ${textColor.playersSuccessfullyElements};
    margin: 0;
  }

  .date {
    ${theme.helperText};
  }

  .address {
    ${theme.body03};
    min-height: 32px;//для единой высоты адреса
  }

  .location {
    ${theme.body03};
    color: ${textColor.playersSecondaryText};
  }

  p {
    margin: 0;
  }
`;
