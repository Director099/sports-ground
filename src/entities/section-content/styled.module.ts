import styled from "styled-components";
import {textColor, theme} from "shared/lib";

export const SectionContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;

  .content-header {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .title {
      ${theme.title01}
      margin: 0;
    }

    .desc {
      margin: 0;
      ${theme.helperText}
      color: ${textColor.playersSecondaryText};
    }
  }

  .content {
    p {
      margin: 0;
    }
  }
`;
