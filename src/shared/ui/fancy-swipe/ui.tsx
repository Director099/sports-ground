import React, {FC, ReactNode} from "react";
import {FancySwipeWrap} from "./styled.module";

interface FancySwipe {
  children?: ReactNode,
  id: string
}

export const FancySwipe:FC<FancySwipe> = ({children, id}) =>
  <FancySwipeWrap id={id}>
    <div className="modal__content">
      <div className="modal__dialog">
        {children}
      </div>
    </div>
  </FancySwipeWrap>
