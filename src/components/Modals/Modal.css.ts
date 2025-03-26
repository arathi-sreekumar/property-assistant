import styled from "styled-components";

export const Wrapper = styled.div`
    align-items: center;
    background-color: rgba(var(--grey-600), 0.72);
    inset: 0px;
    display: flex
;
    justify-content: center;
    position: absolute;
    color: var(--color-text-default);
`

export const Overlay = styled.div`
  position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.3);
	z-index: 500;
`

export const ModalContainer = styled.div`
	z-index: 100;
	background: white;
	position: relative;
	margin: auto;
	border-radius: 8px;
  padding: 40px;
  max-width: 680px;
`;

export const Header = styled.h1`
  font-size: 24px;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
  padding: 0 20px 20px 0;
  border-bottom: 1px solid var(--grey-400);
  margin-bottom: 20px;
`

export const Content = styled.div`
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;

  p {
    margin-bottom: 1rem;
  }
`

export const Close = styled.button`
  border: none;
  border-radius: 3px;
  margin-left: 0.5rem;
  background: none;
  color: var(--color-text-default);
  position: absolute;
  right: 20px;
  top: 10px;

  :hover {
    cursor: pointer;
  }
`