import { NavLink } from "react-router";
import styled from "styled-components";

export const NavItemUI = styled(NavLink)`
  padding: 4px 12px;
  color: var(--grey-400);
  text-decoration: none;
  fort-weight: 400;

  &:hover, &:active {
    color: var(--grey-600);
    text-decoration: underline;
    font-weight: bold;
  }
`