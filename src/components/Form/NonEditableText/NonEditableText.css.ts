import styled from "styled-components";

export const NonEditableTextUI = styled('div')`
  height: 40px;
  border-bottom: 1px solid var(--grey-600);
  padding: 8px 12px;
  width: 180px;
  flex-grow: 1;

  @media (max-width: 480px) {
    width: 100%;
  }

  &.total {
    font-weight: bold;
    background-color: var(--yellow-300);
  }
`