import styled from "styled-components";
import {theme} from "shared/lib";

export const PlayerWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;
  color: inherit;
  text-decoration: none;

  .picture {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    overflow: hidden;
    margin: 0 auto;
  }

  .login {
    ${theme.body03};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
  }
`;
