import {Container, Stack} from "shared/ui";
import {NextGame, SectionContent} from "../../entities";
import {PeopleToGame, TopPlayers, ListPreviewProducts} from "widgets";

export const Main = () => {
  const listSectionContent = [
    {
      title: "Набор в команду",
      desc: "Помогаем собрать людей на игру",
      tpl: <PeopleToGame/>
    },
    {
      title: "Атрибутика",
      desc: "Продажа мячей, формы и другой атрибутики, которой сложно найти в наших маркетах",
      tpl: <ListPreviewProducts/>
    },
    {
      title: "ТОП игроков ",
      desc: "за декабрь",
      tpl: <TopPlayers/>
    }
  ]

  return (
    <main>
      <Container>
        <Stack gap={32}>
          <NextGame
            date="15.12.2022 (чт)"
            time="19:00"
            address="Улица Российская, 171/1"
            location="Школа №88"
          />
          {listSectionContent.map(({title, desc, tpl}, i) =>
            <SectionContent title={title} desc={desc} key={title + i}>
              {tpl}
            </SectionContent>
          )}
        </Stack>
      </Container>
    </main>
  )
}
