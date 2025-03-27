import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../state/hooks"

import { FormFieldWrapper, FormRowUI } from "../../../components/Form/form.css"
import { Label } from "../../../components/Form/Label"
import { NonEditableText } from "../../../components/Form/NonEditableText";
import {
  selectConveyancingFee,
  selectStampDuty,
  selectSurveyFee,
  selectValuationFee,
  selectDeposit,
  selectYourCost,
} from "../../../state/buying/selector";
import { setYourCost } from "../../../state/buying/actions";

export const YourCost = () => {
  const dispatch = useAppDispatch()

  const yourCost = useAppSelector(selectYourCost)
  const deposit = useAppSelector(selectDeposit)
  const stampDuty = useAppSelector(selectStampDuty)
  const conveyancingFee = useAppSelector(selectConveyancingFee)
  const surveyFee = useAppSelector(selectSurveyFee)
  const valuationFee = useAppSelector(selectValuationFee)

  useEffect(() => {
    dispatch(setYourCost())
  }, [
    conveyancingFee,
    deposit,
    stampDuty,
    surveyFee,
    valuationFee,
  ])

  return (
    <FormRowUI>
      <Label>Your cost of buying:</Label>
      <FormFieldWrapper>
        <NonEditableText classes="total" value={yourCost} />
      </FormFieldWrapper>
    </FormRowUI>
  )
}
