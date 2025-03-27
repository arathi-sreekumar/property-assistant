import styled from "styled-components";

export const ExploreWrapper = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  font-size: 20px;
  margin-bottom: 40px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

export const ExploreUI = styled('div')`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  
  > p {
    color: var(--grey-400);
    font-family: Roboto;
    font-size: 24px;
  }
`

export const SubTitleUI = styled('h3')`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 40px;
`
