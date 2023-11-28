import styled from "styled-components";
import {configCss, tplColor} from "shared/lib";

export const ModalWrap = styled.div`
  overflow: hidden;
  position: fixed;
  inset: 0;
  z-index: 100;
  -webkit-overflow-scrolling: touch;
  color: ${tplColor.black};

  .modal__dialog {
    position: relative;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  .modal__content {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 100%;
    min-height: 100%;
    background-color: ${tplColor.white};
    outline: 0;
    padding: 16px;
    transition: ${configCss.time};
    transform: translateY(100%);
  }

  .modal__header {
    flex-shrink: 0;
  }

  .modal__title {
    margin-bottom: 0;
    font-size: 18px;
    line-height: 1.4;
    font-weight: 700;
    color: currentColor;
  }

  .modal__body {
    padding: 0 15px;
    flex-grow: 1;
  }

  .modal__footer {
    padding: 15px;
    flex-shrink: 0;
  }

  .modal__backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.7);
  }

  &.modal-swipe-bottom {
    .modal__dialog {
      position: absolute;
      bottom: 0;
      height: auto;
    }

    .modal__content {
      position: relative;
      padding: 50px 16px 16px 16px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 24px;
        width: 100px;
        height: 2px;
        margin: 0 auto;
        border-radius: 8px;
        background: #D9D9D9;
      }
    }

  }

  // Fade
  &.animated-modal-enter {
    opacity: 0;
  }
  &.animated-modal-enter-active {
    opacity: 1;
    transition: ${configCss.time};
  }
  &.animated-modal-exit {
    opacity: 1;
  }
  &.animated-modal-exit-active {
    opacity: 0;
    transition: ${configCss.time};
  }

  // Swape
  &.modal-swipe-enter {
    opacity: 0;
  }

  &.modal-swipe-enter-active {
    opacity: 1;
    transition: ${configCss.time};

    .modal__content {
      transform: translateY(0%);
    }
  }

  &.modal-swipe-exit {
    opacity: 1;
  }

  &.modal-swipe-enter-done {
    .modal__content {
      transform: translateY(0%);
    }
  }

  &.modal-swipe-exit-active {
    opacity: 0;
    transition: ${configCss.time};
  }
`;
