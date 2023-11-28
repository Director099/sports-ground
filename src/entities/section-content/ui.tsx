import React, {FC} from "react";
import {ISectionContent} from "./types";
import {SectionContentWrap} from "./styled.module";

export const SectionContent: FC<ISectionContent> = ({
  children,
  title,
  desc,
  className
}) =>
  <SectionContentWrap className={className}>
    <header className="content-header">
      <h2 className="title">{title}</h2>
      <p className="desc">{desc}</p>
    </header>
    {children &&
      <div className="content">
        {children}
      </div>
    }
  </SectionContentWrap>
