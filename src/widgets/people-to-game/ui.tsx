import React, {useState} from "react";
import {PeopleToGameWrap} from "./styled.module";
import {handleFancySwipe, defaultSrc} from "shared/lib";
import {Btn, FancySwipe} from "shared/ui";
import {NeedPlayer} from "../../entities";
import {GameInfo} from "widgets";

const mock = [
  {
    title: '2 места',
    date: '13.12.2022 (вт)',
    time: '20:30',
    address: 'Степана Кувыкина, 29/1',
    location: 'Школа №119',
    countActive: 4,
    mapUrl: 'https://yandex.ru/map-widget/v1/?um=constructor%3Aef59b80f0945f79d18534a7d66781792504399ec10773ec263ae4645ee391939&amp;source=constructor',
  },
  {
    title: '1 место',
    date: '15.12.2022 (чт)',
    time: '19:00',
    address: 'Революционная, 39/2',
    location: 'World Class',
    countActive: 2,
    mapUrl: 'https://yandex.ru/map-widget/v1/?um=constructor%3A563ec1b85ad8da1c4709f3d7120bdce522d58fd49ef2813d9ca0e56cbe843b0f&amp;source=constructor',
  },
  {
    title: '2 места',
    date: '13.12.2022 (вт)',
    time: '20:30',
    address: 'ул. Лесотехникума, 53',
    location: 'Школа Зенит-Уфа',
    countActive: 5,
    mapUrl: 'https://yandex.ru/map-widget/v1/?um=constructor%3A5d08a1fe7290c9dd888c0d01216bdf3db27079cc7f999545dcf1a3da51f7e65b&amp;source=constructor',
  },
]

export const PeopleToGame = () => {
  const [selectTeam, setSelectTeam] = useState(0);

  return (
    <PeopleToGameWrap>
      <ul className="list">
        {mock.map((item, i) =>
          <li className="item" key={item.title + i} >
            <NeedPlayer
              {...item}
              firstPrimary={i === 0}
              onClick={() => {
                handleFancySwipe("#" + defaultSrc)
                setSelectTeam(i);
              }}
            />
          </li>
        )}
      </ul>
      <FancySwipe id={defaultSrc}>
        <GameInfo
          date={mock[selectTeam].date}
          time={mock[selectTeam].time}
          address={mock[selectTeam].address}
          location={mock[selectTeam].location}
          mapUrl={mock[selectTeam].mapUrl}
        />
      </FancySwipe>
      <Btn primary="dissolve">
        Собрать людей на игру
      </Btn>
    </PeopleToGameWrap>
  )
}
