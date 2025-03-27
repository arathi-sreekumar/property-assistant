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
  max-width: 100%;
  flex-wrap: wrap;

  label {
    width: 150px;

    @media (max-width: 480px) {
      width: 100%;
      margin-top: 20px;
    }
  }

   @media (max-width: 480px) {
    gap: 5px;
   }
`

export const FormFieldWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  width: 180px;
  gap: 5px;

  @media (max-width: 480px) {
    width: calc(100% - 40px);
  }
`

export const ErrorUI = styled('div')`
  color: var(--error);
  margin-top: -10px;
  margin-bottom: 20px;
`
