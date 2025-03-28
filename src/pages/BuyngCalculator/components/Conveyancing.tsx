import { useAppDispatch, useAppSelector } from "../../../state/hooks"

import { Label } from "../../../components/Form/Label";
import { selectConveyancingFee } from "../../../state/buying/selector";
import { setConveyancingFee } from "../../../state/buying/actions";
import { EditableInput, FieldState } from "../../../components/Form/EditableInput";
import { FormRowUI } from "../../../components/Form/form.css";
import { ConveyancingInfo } from "./ConveyancingInfo";


export const Conveyancing = () => {
  const dispatch = useAppDispatch()
  const conveyancingFee = useAppSelector(selectConveyancingFee)

  const feeChangeHandler = (fieldValue: FieldState) => {
    dispatch(setConveyancingFee(Number(fieldValue.value)))
  }

  return (
    <FormRowUI>
      <Label htmlFor="conveyancingFee">
        Conveyancing Fee:
      </Label>
      <EditableInput
        type='number'
        value={conveyancingFee}
        onSave={feeChangeHandler}
        unit='cash'
        id="conveyancingFee"
      />
      <ConveyancingInfo />
    </FormRowUI>
  );
}