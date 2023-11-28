import './styles/main.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Page} from "widgets"; //TODO: Виджет внутри виджета
import {Links, ScrollToTop} from "shared/lib";
import {Calendar, Main, NotFound} from "pages";


const listRoutes = [
  {
    tpl: <Main />,
    path: Links.Main
  },
  {
    tpl: <Calendar />,
    path: Links.Calendar
  },
  {
    tpl: <NotFound />,
    path: Links.NotFound
  },
]

export const App = () =>
  <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      {listRoutes.map(({tpl, path}, i) =>
        <Route key={path + i} path={path} element={
          <Page>
            {tpl}
          </Page>
        }/>
      )}
    </Routes>
  </BrowserRouter>
