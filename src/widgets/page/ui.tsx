import React from "react";
import {PageWrap} from "./styled.module";
import {media, useMediaQuery} from "shared/lib";
import {DeviceNotSupported} from "shared/ui";
import {NavMenu} from "widgets";

export const Page = ({children}: { children: any }) => {
  const tplSizeXl = `(min-width: ${media.XL}px)`;
  return (
    <>
      {!useMediaQuery(tplSizeXl) &&
        <PageWrap>
          {children}
          <NavMenu/>
        </PageWrap>
      }
      {useMediaQuery(tplSizeXl) && <DeviceNotSupported/>}
    </>
  )
}
