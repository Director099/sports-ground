import styled from "styled-components";

export const NavMenuWrap = styled.ul`
  position: fixed;
  bottom: 24px;
  left: 0;
  right: 0;
  display: flex;
  align-items: flex-start;
  gap: 32px;
  list-style: none;
  margin: 0 24px;
  padding: 10px 46.5px;
  border-radius: 40px;
  background: rgba(23, 23, 23, 0.90);
  backdrop-filter: blur(2.5px);

  .item {
    flex-grow: 1;
    min-width: 65px;
  }
`
