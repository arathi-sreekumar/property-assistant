import styled from "styled-components";

export const FormControl = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 10px;
  width: 100%;
  align-items: flex-start;
`

export const FormAction = styled('div')`
  display: flex;
  flex-direction: row-reverse;
  margin: 40px 0;
  width: 100%;
  gap: 10px;
`

export const FormRowUI = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`

export const NonEditableText = styled('div')`
  height: 40px;
  border-bottom: 1px solid var(--grey-600);
  padding: 8px 12px;
  flex-grow: 1;
`

export const FormFieldWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  width: 200px;
  gap: 5px;
`
