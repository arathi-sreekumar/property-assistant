import { useAppDispatch, useAppSelector } from "../../../state/hooks"

import { Label } from "../../../components/Form/Label";
import { selectValuationFee } from "../../../state/buying/selector";
import { setValuationFee } from "../../../state/buying/actions";
import { EditableInput, FieldState } from "../../../components/Form/EditableInput";
import { FormRowUI } from "../../../components/Form/form.css";
import { ValuationFeeInfo } from "./ValuationFeeInfo";


export const ValuationFee = () => {
  const dispatch = useAppDispatch()
  const valuationFee = useAppSelector(selectValuationFee)

  const feeChangeHandler = (fieldValue: FieldState) => {
    dispatch(setValuationFee(Number(fieldValue.value)))
  }

  return (
    <FormRowUI>
      <Label>
        Valuation Fee:
      </Label>
      <EditableInput
        type='number'
        value={valuationFee}
        onSave={feeChangeHandler}
        unit='cash'
      />
      <ValuationFeeInfo />
    </FormRowUI>
  );
}