import {Link} from "react-router-dom";
import {NotFoundWrap} from "./styled.module";
import {Links} from "shared/lib";
import {Container} from "shared/ui";

export const NotFound = () => {
  return (
    <NotFoundWrap>
      <Container>
        <h1 className="not-fund-title">К сожалению, страница не найдена</h1>
        <Link to={Links.Main} className="not-fund-link">Перейти на главную</Link>
      </Container>
    </NotFoundWrap>
  )
}
