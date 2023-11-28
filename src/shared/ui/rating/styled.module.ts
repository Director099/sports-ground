import styled from "styled-components";
import {bgColor, theme} from "shared/lib";

export const RatingWrap = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  .rating-title {
    ${theme.helperTextSmall}
  }

  .stars {
    display: inline-flex;
    gap: 3.5px;
  }

  .circle {
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50px;
    background-color: ${bgColor.playersUi01};

    &.active {
      background-color: ${bgColor.playersBaseElements};
    }
  }
`;
