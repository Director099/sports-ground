import styled from "styled-components";
import {Link} from "react-router-dom";
import {theme, textColor} from "shared/lib";

export const PreviewProductWrap = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
  text-align: center;

  .picture {
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 50px;
    margin-bottom: -8px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .price {
    display: inline-block;
    padding: 0 4px;
    border-radius: 40px;
    transform: rotate(-4deg);

    ${theme.body03}
    background-color: ${textColor.playersSuccessfullyElements};
  }
`;
