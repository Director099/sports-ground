import React from "react";
import {TopPlayersWrap} from "./styled.module";
import {People} from "../../entities";

//TODO: Подумать как вынести
import avatar1 from "shared/assets/img/avatar-1.jpg";
import avatar2 from "shared/assets/img/avatar-2.jpg";
import avatar3 from "shared/assets/img/avatar-3.jpg";
import avatar4 from "shared/assets/img/avatar-4.jpg";

const mock = [
  {
    imgAvatar: avatar1,
    login: 'ihatefuckingbasketball',
    count: '8 игр',
    link: '#',
  },
  {
    imgAvatar: avatar2,
    login: 'xmasfanboy',
    count: '7 игр',
    link: '#',
  },
  {
    imgAvatar: avatar3,
    login: 'whitenigga',
    count: '5 игр',
    link: '#',
  },
  {
    imgAvatar: avatar4,
    login: 'SideHussle',
    count: '3 игры',
    link: '#',
  },
]


export const TopPlayers = () =>
  <TopPlayersWrap>
    {mock.map((item, i) =>
      <li className="item" key={item.login + i}>
        <People {...item} />
      </li>
    )}
  </TopPlayersWrap>
