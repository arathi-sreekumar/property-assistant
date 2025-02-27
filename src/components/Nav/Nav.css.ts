import styled from "styled-components";

export const NavUI = styled('nav')`
  position: -webkit-sticky;
	position: sticky;
	top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  background: var(--yellow-600);
`

export const NavWrapper = styled('div')`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 40px;
`

export const NavItemWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`