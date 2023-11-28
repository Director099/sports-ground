import styled from "styled-components";
import {horizontallyScroll} from "shared/lib";

export const ListPreviewProductsWrap = styled.ul`
  display: flex;
  gap: 32px;
  list-style-type: none;
  ${horizontallyScroll(24)}

  .item {
    flex-shrink: 0;
  }
`;
