import {FC} from "react";
import {IBtn} from "./types";
import {BtnWrap} from "./styled.module";

export const Btn: FC<IBtn> = ({children, primary, className}) =>
  <BtnWrap primary={primary} className={className}>
    {children}
  </BtnWrap>
