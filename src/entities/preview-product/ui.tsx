import React, {FC} from "react";
import {IPreviewProduct} from "./types";
import {PreviewProductWrap} from "./styled.module";

export const PreviewProduct: FC<IPreviewProduct> = ({img, price, link, alt}) =>
  <PreviewProductWrap to={link}>
    <div className="picture">
      <img src={img} alt={alt}/>
    </div>
    <p className="price">{price} ₽</p>
  </PreviewProductWrap>
