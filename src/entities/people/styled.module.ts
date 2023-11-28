import {Link} from "react-router-dom";
import styled from "styled-components";
import {textColor, theme} from "shared/lib";

export const PeopleWrap = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  color: inherit;
  text-decoration: none;

  .picture {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    overflow: hidden;
  }

  .login {
    flex-grow: 1;
  }

  .count {
    ${theme.body01};
    color: ${textColor.playersSuccessfullyElements};
  }
`;
