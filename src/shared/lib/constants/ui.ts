export const enum media {
  XL = 1200
}

export const configCss = {
  time: `0.3s`,
}

export const enum fonts {
  unbounded = `"Unbounded", "Arial", sans-serif`
}

export const tplColor = {
  black: '#000',
  white: '#fff'
}

export const textColor = {
  playersSecondaryText: '#858585',
  playersSuccessfullyElements: '#08C71B',
  playersBaseElements: '#F57025'
}

export const bgColor = {
  color01: '#479245',
  color02: '#D3744C',
  playersUi01: '#353535',
  playersUi02: '#1A1A1A',
  playersInverseUi01: '#EAEAEA',
  playersBaseElements: '#F57025'
}

export const borderColor = {
  playersInteractive03: '#5C5C5C',
  playersUi01: '#353535'
}

//label-01, body02 c helperText индентичны
export const theme = {
  headline01: `
    font-family: ${fonts.unbounded};
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -0.5px;
  `,
  body01: `
    font-family: ${fonts.unbounded};
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.5px;
  `,
  body03: `
    font-family: ${fonts.unbounded};
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.5px;
  `,
  helperText: `
    font-family: ${fonts.unbounded};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.5px;
  `,
  helperTextSmall: `
    font-family: ${fonts.unbounded};
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: -0.5px;
  `,
  title01: `
    font-family: ${fonts.unbounded};
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: -0.1px;
  `,
  title02: `
    font-family: ${fonts.unbounded};
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.08px;
  `,
}
