import {FC} from "react";
import {IBadge} from "./types";
import {BadgeWrap} from "./styled.module";

export const Badge:FC<IBadge> = ({children, primary, className}) =>
  <BadgeWrap primary={primary} className={className}>
    {children}
  </BadgeWrap>
