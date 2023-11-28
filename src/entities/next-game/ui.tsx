import React, {FC} from "react";
import {INextGame} from "./types";
import {NextGameWrap} from "./styled.module";
import {Stack} from "shared/ui/stack";

export const NextGame: FC<INextGame> = ({date, time, address, location}) =>
  <NextGameWrap>
    <Stack gap={8}>
      <p className="helper-text">Следующая игра</p>
      <h2 className="title">
        {date}
        <span>В {time}</span>
      </h2>
    </Stack>
    <Stack gap={4}>
      <h3 className="address">{address}</h3>
      <strong className="helper-text">{location}</strong>
    </Stack>
  </NextGameWrap>
