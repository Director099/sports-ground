import {FC} from "react";
import {GameInfoWrap} from "./styled.module";
import {Link} from "react-router-dom";
import {IconLock} from "shared/assets/icons";
import {Btn, Rating, Stack} from "shared/ui";
import iconTaxi from "shared/assets/img/icon-taxi.png";
import {Player} from "../../entities";

//TODO: Подумать как вынести
import avatar1 from "shared/assets/img/avatar-1.jpg";
import avatar2 from "shared/assets/img/avatar-2.jpg";
import avatar3 from "shared/assets/img/avatar-3.jpg";
import avatar4 from "shared/assets/img/avatar-4.jpg";

const mock = [
  {
    imgAvatar: avatar1,
    text: 'ihatefuckingbasketball',
  },
  {
    imgAvatar: avatar2,
    text: 'xmasfanboy',
  },
  {
    imgAvatar: avatar3,
    text: 'whitenigga',
  },
  {
    imgAvatar: avatar4,
    text: 'SideHussle',
  },
  {
    imgAvatar: avatar1,
    text: 'SideHussle',
  },
]

export interface IGameInfo {
  date: string,
  time: string,
  address: string,
  location: string,
  mapUrl: string
  id?: string
}

export const GameInfo:FC<IGameInfo> = ({date, time, address, location, mapUrl, id}) =>
  <GameInfoWrap id={id}>
    <h3 className="title">{date},<br/> {time}</h3>
    <Stack gap={16}>
      <section className="game-info-group">
        <h4 className="game-info-title">{address}</h4>
        <p className="game-info-text-location">{location}</p>
      </section>
      <iframe className="game-info-map" title="map-game" src={mapUrl} width="100%" height="132"/>
      <div className="game-info-group-row">
        <Link to="https://taxi.yandex.ru/action/tools/taxiapi" target="_blank" className="game-info-btn-taxi">
          <img src={iconTaxi} alt="icon-img" />
          Заказать такси
        </Link>
        <p className="game-info-price-text">от 198₽ (откроется приложение Яндекс.Такси)</p>
      </div>
    </Stack>
    <Stack gap={8}>
      <h4 className="payment-title">Стоимость игры</h4>
      <Btn primary="interactive-01">Оплатить 200₽</Btn>
      <span className="payment-warning">
        <IconLock />
        Все платежи защищены
      </span>
    </Stack>
    <section className="participants">
      <h4 className="participants-title">Участники <span>5</span></h4>
      <Rating className="participants-rating" countActive={3} text="Сложность игры"/>
      <div className="game-participants">
        {mock.map((item, i) =>
          <li className="game-participants-item" key={item.text + i}>
            <Player {...item} />
          </li>
        )}
      </div>
    </section>
  </GameInfoWrap>
