import { NavLink } from "react-router";
import styled from "styled-components";

export const LinkButtonUI = styled(NavLink)`
  padding: 8px 12px;
  border-radius: 5px;
  display: flex;

  &.primary {
    background-color: var(--button-primary-background);
    color:  var(--button-primary-text);

    &:hover, &:active {
      background-color: var(--button-primary-active);
    }
  }

  &.outlined {
    background-color: var(--button-outlined-background);
    color:  var(--button-outlined-text);

    &:hover, &:active {
      background-color: var(--button-outlined-active);
    }
  }

  &.cancel {
    background-color: var(--button-cancel-background);
    color:  var(--button-cancel-text);

    &:hover, &:active {
      background-color: var(--button-cancel-active);
    }
  }
`