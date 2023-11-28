import styled from "styled-components";
import {theme, bgColor, tplColor} from "shared/lib";

export const NotFoundWrap = styled.main`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 320px;
  padding: 24px;
  text-align: center;

  .not-fund-title {
    margin-bottom: 35px;
  }

  .not-fund-link {
    display: inline-block;
    text-decoration: none;
    padding: 11px 16px;
    border-radius: 4px;
    border-color: transparent;
    color: ${tplColor.white};
    background: linear-gradient(180deg, ${bgColor.playersBaseElements} 0%, rgba(142, 54, 4, 0.67) 100%);
    ${theme.title02}
  }
`;
