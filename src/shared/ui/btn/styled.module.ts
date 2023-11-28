import styled from "styled-components";
import {bgColor, borderColor, theme, tplColor} from "shared/lib";

export const BtnWrap = styled.button<{primary?: string}>`
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  margin: 0;
  padding: 14px 16px;
  white-space: nowrap;
  user-select: none;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  color: ${tplColor.white};
  border-radius: 4px;
  border: 1px solid ${borderColor.playersInteractive03};
  background-image: none;
  cursor: pointer;
  ${theme.title02}

  ${props => props.primary === 'disabled' && `
    opacity: 0.3;
    cursor: not-allowed;
    color: ${tplColor.black};
    background-color: gray;
    border-color: ${borderColor.playersInteractive03};
  `};

  ${props => props.primary === 'dissolve' && `
      border-color: transparent;
      background: var(--effects-01, radial-gradient(50% 50% at 50% 50%, #90E900 0%, rgba(233, 126, 0, 0.00) 100%));
  `};

  ${props => props.primary === 'interactive-01' && `
      width: 100%;
      padding: 11px 16px;
      border-color: transparent;
      background: linear-gradient(180deg, ${bgColor.playersBaseElements} 0%, rgba(142, 54, 4, 0.67) 100%);
      ${theme.title01}
  `};
`;
