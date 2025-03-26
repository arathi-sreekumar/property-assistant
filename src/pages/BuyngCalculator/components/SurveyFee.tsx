import { useAppDispatch, useAppSelector } from "../../../state/hooks"

import { Label } from "../../../components/Form/Label";
import { selectSurveyFee } from "../../../state/buying/selector";
import { setSurveyFee } from "../../../state/buying/actions";
import { EditableInput, FieldState } from "../../../components/Form/EditableInput";
import { FormRowUI } from "../../../components/Form/form.css";
import { SurveyFeeInfo } from "./SurveyFeeInfo";


export const SurveyFee = () => {
  const dispatch = useAppDispatch()
  const surveyFee = useAppSelector(selectSurveyFee)

  const feeChangeHandler = (fieldValue: FieldState) => {
    dispatch(setSurveyFee(Number(fieldValue.value)))
  }

  return (
    <FormRowUI>
      <Label>
        Survey Fee:
      </Label>
      <EditableInput
        type='number'
        value={surveyFee}
        onSave={feeChangeHandler}
        unit='cash'
      />
      <SurveyFeeInfo />
    </FormRowUI>
  );
}