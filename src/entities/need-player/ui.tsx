import React, {FC} from "react";
import {INeedPlayer} from "./types";
import {NeedPlayerWrap} from "./styled.module";
import {Rating, Stack} from "shared/ui";

export const NeedPlayer: FC<INeedPlayer> = ({
  title,
  date,
  address,
  location,
  countActive,
  time,
  onClick,
  firstPrimary
}) =>
  <NeedPlayerWrap onClick={onClick} firstPrimary={firstPrimary}>
    <Stack gap={16}>
      <Stack gap={8}>
        <h3 className="title">{title}</h3>
        <p className="date">{date}, {time}</p>
      </Stack>
      <Stack gap={8}>
        <p className="address">{address}</p>
        <p className="location">{location}</p>
      </Stack>
      <Rating countActive={countActive}/>
    </Stack>
  </NeedPlayerWrap>
