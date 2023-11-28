import {FC, ReactNode, useEffect} from "react";
import {CSSTransition} from 'react-transition-group';
import {ModalWrap} from "./styled.module";

interface IModal {
  children?: ReactNode,
  title?: string,
  isOpen: boolean,
  close?: () => void
}

export const Modal:FC<IModal> = ({
  children,
  title,
  isOpen= false,
  close,
}) => {
  useEffect(() => {
    if (document) document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen])

  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="modal-swipe"
      unmountOnExit
    >
      <ModalWrap className="modal modal-swipe-bottom" role="dialog">
        <div className="modal__dialog" role="document">
          <div className="modal__content">
            <div className="modal__header">
              {title && <h4 className="modal__title">{title}</h4>}
            </div>
            {children}
          </div>
        </div>
        <div className="modal__backdrop" onClick={close} />
      </ModalWrap>
    </CSSTransition>
  )
}
