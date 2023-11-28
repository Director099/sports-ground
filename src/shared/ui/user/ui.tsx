import {FC} from "react";
import {UserWrap} from "./styled.module";

export interface IUser {
  imgUrl: string,
  login: string,
  className?: string
}

export const User:FC<IUser> = ({imgUrl, login, className}) =>
  <UserWrap className={className}>
    <div className="user-picture">
      <img src={imgUrl} alt={login}/>
    </div>
    {login}
  </UserWrap>
