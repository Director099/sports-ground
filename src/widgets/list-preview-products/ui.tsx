import React from "react";
import {ListPreviewProductsWrap} from "./styled.module";
import {PreviewProduct} from "../../entities";
//TODO: Подумать как вынести
import avatar1 from "shared/assets/img/avatar-1.jpg";
import avatar2 from "shared/assets/img/avatar-2.jpg";
import avatar3 from "shared/assets/img/avatar-3.jpg";
import avatar4 from "shared/assets/img/avatar-4.jpg";

const mock = [
  {
    img: avatar1,
    price: 7400,
    alt: 'Мяч',
    link: '#',
  },
  {
    img: avatar2,
    price: 1500,
    alt: 'Мяч',
    link: '#',
  },
  {
    img: avatar3,
    price: 1200,
    alt: 'Мяч',
    link: '#',
  },
  {
    img: avatar4,
    price: 1200,
    alt: 'Мяч',
    link: '#',
  },
]

// второй map добавлен для полноты

export const ListPreviewProducts = () =>
  <ListPreviewProductsWrap>
    {mock.map((item, i) =>
      <li className="item" key={item.alt + i}>
        <PreviewProduct {...item} />
      </li>
    )}
  </ListPreviewProductsWrap>
