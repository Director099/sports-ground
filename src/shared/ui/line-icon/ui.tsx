import {FC} from "react";
import {ILineIcon} from "./types";
import {LineIconWrap} from "./styled.module";

export const LineIcon: FC<ILineIcon> = ({text, link, svg, className}) =>
  <LineIconWrap to={link} className={className}>
    {({ isActive }) =>
      <>
        {svg && svg(!!isActive)}
        {text}
      </>
    }
  </LineIconWrap>
