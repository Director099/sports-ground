import React, {FC} from "react";
import {ITagName} from "./types";

export const TagName: FC<ITagName> = ({ as: Tag = 'span', ...otherProps }) => {
  return <Tag {...otherProps} />;
};
