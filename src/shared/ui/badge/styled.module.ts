import styled from "styled-components";
import {textColor, theme} from "shared/lib";

export const BadgeWrap = styled.span<{primary?: string}>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  ${theme.helperTextSmall};

  ${props => props.primary === 'success' && `
    color: ${textColor.playersSuccessfullyElements};
  `}

  ${props => props.primary === 'base' && `
    color: ${textColor.playersBaseElements};
  `}

  &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    background-color: currentColor;
    border-radius: 50px;
  }
`;
