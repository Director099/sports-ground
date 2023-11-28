import React, {FC} from "react";
import {IPeople} from "./types";
import {PeopleWrap} from "./styled.module";

export const People: FC<IPeople> = ({imgAvatar, login, count, link}) =>
  <PeopleWrap to={link}>
    <div className="picture">
      <img src={imgAvatar} alt={login}/>
    </div>
    <p className="login">{login}</p>
    <strong className="count">{count}</strong>
  </PeopleWrap>
