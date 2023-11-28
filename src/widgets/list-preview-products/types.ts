import {ReactNode} from "react";

export interface INeedPlayer {
  title?: string,
  desc?: string,
  date?: string,
  address?: string,
  location?: string,
  children?: ReactNode,
}
