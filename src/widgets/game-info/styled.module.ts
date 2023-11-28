import styled from "styled-components";
import {bgColor, borderColor, horizontallyScroll, textColor, theme, tplColor} from "shared/lib";

export const GameInfoWrap = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .title {
    ${theme.title01}
    margin: 0;
  }

  .game-info-title {
    ${theme.title02};
    margin-bottom: 8px;
  }

  .game-info-map {
    border: 0;
    border-radius: 6px;
  }

  .game-info-text-location {
    ${theme.helperText};
    color: ${textColor.playersSecondaryText};
  }

  .game-info-group-row {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .game-info-price-text {
    ${theme.helperTextSmall};
    color: ${textColor.playersSecondaryText};
    margin: 0;
  }

  .game-info-btn-taxi {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    ${theme.helperText};
    line-height: 1; // нужно чтоб выровнить
    color: ${tplColor.black};
    white-space: nowrap;

    // После реализации виджета возможно нужно будет удалить
    text-decoration: none;
    border-radius: 4px;
    border: 1px solid ${borderColor.playersInteractive03};
  }

  .payment-title {
    ${theme.title02};
    margin-bottom: 8px;
  }

  .payment-warning {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    ${theme.helperTextSmall};
    color: ${textColor.playersSecondaryText};
  }

  .participants-title {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
    ${theme.title02};

    span {
      ${theme.helperText};
      color: ${textColor.playersSecondaryText};
    }
  }

  .participants-rating {
    margin-bottom: 18px;
  }

  .rating-title {
    color: ${textColor.playersSecondaryText};
  }

  .circle {
    background-color: ${bgColor.playersInverseUi01};
  }

  .game-participants {
    display: flex;
    gap: 24px;
    list-style: none;

    ${horizontallyScroll(16)}
  }

  .game-participants-item {
    width: 51px;
    flex-shrink: 0;
  }
`
