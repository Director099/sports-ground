import {FC} from "react";
import {SportEventWrap} from "./styled.module";
import {User, Stack} from "shared/ui";

export interface SportEvent {
  time: string
  location: string
  address: string
  imgUrl: string
  login: string
  primary?: string
}

export const SportEvent:FC<SportEvent> = ({time, location, address, imgUrl, login, primary}) =>
  <SportEventWrap primary={primary}>
    <User imgUrl={imgUrl} login={login}/>
    <Stack gap={8}>
      <p className="sport-event-address">{location} ➫ {address}</p>
      <strong className="sport-event-time">{time}</strong>
    </Stack>
  </SportEventWrap>
