import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {textColor, theme} from "shared/lib";

export const LineIconWrap = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  color: inherit;

  ${theme.body03}

  &.active {
    color: ${textColor.playersBaseElements};
  }
`;
