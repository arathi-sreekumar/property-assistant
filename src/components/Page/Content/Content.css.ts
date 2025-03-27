import styled from "styled-components";

export const ContentUI = styled('section')`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  &.two-column {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 50px;

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  li {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ::marker {
    color: var(--yellow-600);
    font-size: 18px;
  }
`

export const ColumnUI = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
`