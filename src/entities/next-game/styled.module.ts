import styled from "styled-components";
import {bgColor, textColor, theme} from "shared/lib";

export const NextGameWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: inherit;
  text-decoration: none;
  padding: 16px;
  background-color: ${bgColor.playersUi01};
  border-radius: 10px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 10px;
    background: ${bgColor.playersUi02};
    transform: rotate(-3.877deg);
    z-index: -1;
  }

  .address {
    margin: 0;
    ${theme.body01};
  }

  .title {
    ${theme.headline01};
    margin: 0;

    span {
      display: block;
    }
  }

  .helper-text {
    margin: 0;
    color: ${textColor.playersSecondaryText};
    ${theme.helperText};
  }
`;
