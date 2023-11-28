import {ReactNode} from "react";

export interface IBadge {
  className?: string,
  children: ReactNode,
  primary?: "success" | "base",
}
