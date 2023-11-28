import {ReactNode} from "react";

export interface IBtn {
  primary?: "interactive-01" | "dissolve" | "disabled",
  children?: ReactNode,
  className?: string,
  tag?: string
}
