import styled from "styled-components";

export const IntroWrapper = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  font-size: 20px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`
