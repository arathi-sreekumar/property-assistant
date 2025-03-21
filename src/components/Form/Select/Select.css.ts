import styled from "styled-components";

type Props = {
  width: string;
}

export const Wrapper = styled('div')`
  position: relative;

  &::after {
    content: '▼';
    position: absolute;
    right: 5px;
    top: 0;
    display: inline-block;
    color: var(--color-text-default);
    font-size: 16px;
    width: 20px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    pointer-events: none;
  }
`


export const SelectUI = styled('select') <Props>`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 5px 25px 5px 8px;
  font-size: 16px;
  height: 40px;
  background-color: var(--yellow-300);
  display: block;
  width: ${(props: Props) => props.width ? props.width : 'auto'};
  box-sizing: border-box;
  transition: border-color 0.3s, box-shadow 0.3s;
  cursor: pointer;
  color: var(--color-text-default);
  appearance: none;

  &:hover {
    border-color: #888;
  }

  &:focus {
    border-color: #555;
    box-shadow: 0 0 5px rgba(85, 85, 85, 0.5);
    outline: none;
  }

  option {
    background-color: #fff;
    color: #333;
  }
`