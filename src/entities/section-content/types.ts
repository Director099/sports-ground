import {ReactNode} from "react";

export interface ISectionContent {
  title?: string,
  desc?: string,
  children?: ReactNode,
  className?: string
}
