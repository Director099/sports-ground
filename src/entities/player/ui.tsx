import {FC} from "react";
import {PlayerWrap} from "./styled.module";

interface IPlayer {
  imgAvatar: string,
  text: string
}

export const Player: FC<IPlayer> = ({imgAvatar, text}) =>
  <PlayerWrap>
    <div className="picture">
      <img src={imgAvatar} alt={text}/>
    </div>
    <p className="login">{text}</p>
  </PlayerWrap>
