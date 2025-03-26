import styled from "styled-components";

export const EditableInputUI = styled('div')`
  display: flex;
  flex-direction: row;
  width: 180px;
  gap: 5px;
`

export const EditableTextIconWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;

  .primary {
    border-radius: 0;
    border-bottom: 1px solid var(--grey-600);
    border-left: 0;
  }
`

export const EditableText = styled('div')`
  height: 40px;
  border-bottom: 1px solid var(--grey-600);
  padding: 8px 12px;
  flex-grow: 1;
`
