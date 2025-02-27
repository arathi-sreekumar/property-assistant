import { NavLink } from "react-router";
import styled from "styled-components";

export const LogoUI = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  img {
    height: 50px;
  }
`