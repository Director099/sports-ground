import React, {useState} from "react";
import { ru } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';
import {defaultSrc, formatDate, handleFancySwipe} from "shared/lib";
import {Badge, Container, DayPickerCalendar, FancySwipe} from "shared/ui";
import {SectionContent, SportEvent} from "../../entities";
import avatar3 from "shared/assets/img/avatar-3.jpg";
import avatar2 from "shared/assets/img/avatar-2.jpg";

interface ICurrentDate {
  date?: number
  month?: string
  weekDay?: string
}

export const Calendar = () => {
  const [currentDay, setCurrentDay] = useState<ICurrentDate>({});
  const [eventDay, setEventDay] = useState<string[]>([]);

  const dateDisabled = {
    start: new Date(3600 * 24 * 1000),
    yesterday: new Date(new Date().setDate(new Date().getDate()-1))
  }

  const dateRandom = (date: number) => {
    let array = [];
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < 12; i++) {
      array.push(new Date(currentYear, i, 2))
      array.push(new Date(currentYear, i, date))
      array.push(new Date(currentYear, i, date + 9))
    }
    return array
  }

  const mockDay = {
    myTeam: {
      user: {
        login: 'whitenigga',
        img: avatar3
      },
      date: '13.12.2022 (вт)',
      time: '20:30',
      address: 'Степана Кувыкина, 29/1',
      location: 'Школа №119',
    },
    otherTeam: {
      user: {
        login: 'xmasfanboy',
        img: avatar2
      },
      date: '15.12.2022 (чт)',
      time: '19:00',
      address: 'Революционная, 39/2',
      location: 'World Class',
    },
  }

  return (
    <Container>
      <SectionContent title="Календарь" desc="Спланируйте свою игру">
        <DayPickerCalendar
          selected={new Date()}
          modifiers={{
            myTeam: dateRandom(12),
            otherTeam: dateRandom(14),
          }}
          modifiersClassNames={{
            myTeam: "my-team",
            otherTeam: "other-team",
          }}
          onDayClick={(date, mod) => {
            const hasModifiers = Object.keys(mod).some((i) => mockDay[i as keyof typeof mockDay]);
            if(hasModifiers) {
              handleFancySwipe("#" + defaultSrc)
              setCurrentDay(formatDate(date, true))
              setEventDay(Object.keys(mod))
            }
          }}
          locale={ru}
          disabled={[{
            from: dateDisabled.start,
            to: dateDisabled.yesterday
          }]}
          footer={
            <div className="calendar-info">
              <Badge primary="success">Мои ребята</Badge>
              <Badge primary="base">Другая компания</Badge>
            </div>
          }
        />
        <FancySwipe id={defaultSrc}>
          <SectionContent
            title="Нужен игрок"
            desc={`${currentDay?.date} ${currentDay?.month}, ${currentDay?.weekDay}`}
            className="modal-header-sport"
          />
          {eventDay.map((e: string, i) => {
            const dayInfo = mockDay[e as keyof typeof mockDay] ?? null;
            return dayInfo &&
              <SportEvent
                time={dayInfo?.time}
                location={dayInfo?.location}
                address={dayInfo?.address}
                imgUrl={dayInfo?.user.img}
                login={dayInfo?.user.login}
                key={dayInfo?.user.login + i}
                primary={e === "myTeam" ? "color01" : "color02"}
              />
            })
          }
        </FancySwipe>
      </SectionContent>
    </Container>
  )
}
