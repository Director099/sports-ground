import styled from "styled-components";
import {horizontallyScroll} from "shared/lib";

export const PeopleToGameWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .list {
    display: flex;
    overflow: auto;
    gap: 8px;
    list-style: none;
    ${horizontallyScroll(24, 6)}
  }

  .item {
    flex-shrink: 0;
    width: 100%;
    max-width: 167px;
    transform: rotate(-4deg);
  }
`;
