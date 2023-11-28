export const horizontallyScroll = (h: number, v = 0) => `
  padding: ${v}px ${h}px;
  margin: -${v}px -${h}px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`
