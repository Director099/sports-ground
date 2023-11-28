import styled from "styled-components";
import {theme} from "shared/lib";

export const UserWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: currentColor;
  ${theme.body03}

  .user-picture {
    border-radius: 50px;
    overflow: hidden;

    img {
      display: block;
    }
  }
`;
