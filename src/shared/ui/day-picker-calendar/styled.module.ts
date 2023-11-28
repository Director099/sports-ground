import styled from "styled-components";
import {DayPicker} from "react-day-picker";
import {bgColor, textColor, theme, tplColor} from "shared/lib";

//https://react-day-picker.js.org/basics/modifiers#custom-modifiers - дока плагина
export const DayPickerCalendar = styled(DayPicker)`
  margin: 0;
  min-width: 342px;

  .rdp-months {
    display: block;
  }

  .rdp-table,
  .rdp-head {
    display: block;
    width: 100%;
    max-width: inherit;
  }

  .rdp-caption,
  .rdp-head_row {
    position: relative;
    margin-bottom: 16px;
  }

  .rdp-caption_label {
    ${theme.title02};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-transform: capitalize;
    border: none;
    padding: 0;
  }

  .rdp-nav_button {
    width: 24px;
    height: 24px;
    border: none;
    padding: 0;
  }

  .rdp-button:hover {
    &:not([disabled]):not(.rdp-day_selected) {
      background-color: transparent;
    }
  }

  .rdp-nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .rdp-tbody {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .rdp-head_row,
  .rdp-row {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 16px;
    width: 100%;
  }

  .rdp-cell {
    width: auto;
    height: auto;

    div:not([class]) {
      display: block;
      margin: 0 auto;
      border-radius: 50px;
      width: 35px;
      height: 53px;
      background-repeat: no-repeat;
      background-size: contain;
      background-image: url("data:image/svg+xml,%3Csvg width='35' height='53' viewBox='0 0 35 53' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='34' height='52' rx='17' stroke='%231A1A1A'/%3E%3Cline x1='34.2437' y1='15.3164' x2='4.11381' y2='45.4463' stroke='%231A1A1A'/%3E%3Cline x1='34.2437' y1='25.3164' x2='9.32157' y2='50.2386' stroke='%231A1A1A'/%3E%3Cline x1='34.2437' y1='35.3164' x2='17.0301' y2='52.5301' stroke='%231A1A1A'/%3E%3Cline x1='31.4151' y1='8.29203' x2='0.943397' y2='38.7637' stroke='%231A1A1A'/%3E%3Cline x1='26.6226' y1='3.08402' x2='1.08866' y2='28.618' stroke='%231A1A1A'/%3E%3Cline x1='18.7432' y1='0.963905' x2='0.954628' y2='18.7525' stroke='%231A1A1A'/%3E%3C/svg%3E%0A");
    }
  }

  .rdp-head_cell {
    ${theme.body03};
    color: ${textColor.playersSecondaryText};
    height: auto;
  }

  .rdp-day {
    ${theme.body03};
    margin: 0 auto;
    width: 35px;
    height: 53px;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${bgColor.playersUi01};
    border: none;

    &.my-team {
      background-color: ${textColor.playersSuccessfullyElements};
      &:hover:not([disabled]) {
        background-color: ${textColor.playersSuccessfullyElements} !important;
      }
    }

    &.other-team {
      background-color: ${textColor.playersBaseElements};
      &:hover:not([disabled]) {
        background-color: ${textColor.playersBaseElements} !important;
      }
    }

    &.my-team.other-team {
      background: linear-gradient(45deg, rgba(245,112,37,1) 35%, rgba(8,199,27,1) 65%);
    }

    &:hover:not([disabled]) {
      background-color: ${bgColor.playersUi01} !important;
    }

    &.rdp-day_today {
      background-color: ${tplColor.white};
      color: ${tplColor.black};
    }
  }

  .calendar-info {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 16px;
  }
`;
