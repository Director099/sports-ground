import {ReactNode} from "react";

export interface INeedPlayer {
  title?: string,
  desc?: string,
  date?: string,
  address?: string,
  location?: string,
  time?: string
  countActive: number,
  children?: ReactNode,
  onClick?: () => void,
  firstPrimary?: boolean,
}
