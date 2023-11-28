import React from "react";
import {NavMenuWrap} from "./styled.module";
import {Links} from "shared/lib";
import {LineIcon} from "shared/ui";
import {IconHome, IconCalendar, IconProfile} from "shared/assets/icons";

const mock = [
  {
    link: Links.Main,
    text: 'Стартовая',
    svg: (e: boolean) => <IconHome active={e} />,
  },
  {
    link: Links.Calendar,
    text: 'Календарь',
    svg: (e: boolean) => <IconCalendar active={e} />,
  },
  {
    link: 'none',
    text: 'Профиль',
    svg: (e: boolean) => <IconProfile active={e} />,
  },
]


export const NavMenu = () =>
  <NavMenuWrap>
    {mock.map((item, i) =>
      <li className="item" key={item.text + i}>
        <LineIcon {...item}/>
      </li>
    )}
  </NavMenuWrap>
