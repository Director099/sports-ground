import styled from "styled-components";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import {theme, tplColor} from "shared/lib";

export const FancySwipeWrap = styled.div`
  display: none;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 100%;

  background-color: transparent;
  padding: 68px 0 0;


  [data-fancybox-close] {
    display: none;
  }

  .modal__content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;

    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 51px;
      flex-shrink: 0;
      margin-bottom: -1px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      background-color: ${tplColor.white};
      background-repeat: no-repeat;
      background-position: center;
      background-image: url("data:image/svg+xml,%3Csvg width='100' height='2' viewBox='0 0 100 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='2' rx='1' fill='%23D9D9D9'/%3E%3C/svg%3E%0A");
    }
  }

  .modal__dialog {
    padding: 0 16px 16px;
    overflow: auto;
    background-color: ${tplColor.white};
  }

  .sport-event-address {
    margin: 0;
  }

  .modal-header-sport {
    margin-bottom: 24px;

    .desc {
      color: ${tplColor.black};
      ${theme.title02};
    }
  }
`;
