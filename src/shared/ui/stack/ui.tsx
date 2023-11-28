import React from "react";
import {StackWrap} from "./styled.module";

export const Stack = ({children, gap, classMame}: any) =>
  <StackWrap gap={gap} className={classMame}>
    {children}
  </StackWrap>
