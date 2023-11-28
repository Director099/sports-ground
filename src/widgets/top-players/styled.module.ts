import styled from "styled-components";
import {borderColor} from "shared/lib";

export const TopPlayersWrap = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;

  .item {
    padding-bottom: 8px;
    padding-top: 8px;
    border-bottom: 1px solid ${borderColor.playersUi01};

    &:first-child {
      padding-top: 0;
    }
  }
`;
