import styled from "styled-components"

export const IconButtonUI = styled('button')`
  display: flex;
  padding: 0;
  border-radius: 50%;

  svg {
    width: 25px;
  }

  &:hover {
    outline: none;
  }

  &.primary {
    background-color: white;
    color:  var(--button-primary-background);

    &:hover, &:active {
      path {
        fill: var(--button-primary-background);
      }
    }

    &:disabled {
      path {
        fill: var(--button-primary-diabled);
      }
    }
  }

  &.outlined {
    background-color: var(--button-outlined-background);
    color:  var(--button-outlined-text);

    &:hover, &:active {
      path {
        fill: var(--button-outlined-active);
      }
    }
  }
`
