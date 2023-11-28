import {ElementType, HTMLAttributes} from "react";

export interface ITagName extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
}
