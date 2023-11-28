import React, {FC} from "react";
import {IRating} from "./types";
import {RatingWrap} from "./styled.module";

const renderCircle = (count: number) => {
  let item = [];
  const countActive = (i: number) => count > i ? 'active' : '';

  for (let i = 0; i < 5; i++) {
    item.push(
      <span key={i} className={`circle ${countActive(i)}`}></span>
    );
  };
  return item;
}

export const Rating: FC<IRating> = ({countActive, text, className}) =>
  <RatingWrap className={className}>
    {!!text && <span className="rating-title">{text}</span>}
    <div className="stars">
      {renderCircle(countActive)}
    </div>
  </RatingWrap>
