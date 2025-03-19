import styled from "styled-components";

type Props = {
  width: string;
}

export const SelectUI = styled('select') <Props>`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 5px;
  font-size: 16px;
  height: 40px;
  background-color: var(--yellow-300);
  display: block;
  width: ${(props: Props) => props.width ? props.width : 'auto'};
  box-sizing: border-box;
  transition: border-color 0.3s, box-shadow 0.3s;
  cursor: pointer;
  color: var(--color-text-default);

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