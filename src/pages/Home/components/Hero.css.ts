import styled from "styled-components";

export const HeroUI = styled('div')`
  background: var(--white-800);
  // background-image: url('/property.png');
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/property.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;

  h1 {
    font-size: 72px;
    font-weight: bold;
  }
`

export const CaptionUI = styled('p')`
  font-size: 32px;
  font-weight: 400;
`