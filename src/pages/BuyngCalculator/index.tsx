import { useAppDispatch, useAppSelector } from "../../state/hooks"

import { Label } from "../../components/Form/Label";
import { selectHomeBuyingCost } from "../../state/buying/selector";
import { setHomeCost } from "../../state/buying/actions";
import { Layout } from "../../components/Page/Layout";
import { PAGE_TYPE } from "../../common/constants";
import { EditableInput } from "../../components/Form/EditableInput";
import { FormRowUI } from "../../components/Form/form.css";

export const BuyingCalculator = () => {
  const dispatch = useAppDispatch()
  const homeCost = useAppSelector(selectHomeBuyingCost)
  console.log('homeCost: ', homeCost)

  const priceChangeHandler = (value: number) => {
    dispatch(setHomeCost(value))
  }

  return (
    <Layout
      pageType={PAGE_TYPE.BUYING_CALCULATOR}
    >
      <form>
        <FormRowUI>
          <Label>
            Price of the Home:
          </Label>
          <EditableInput
            type='number'
            value={homeCost}
            onSave={priceChangeHandler}
          />
        </FormRowUI>
      </form>
    </Layout>
  )
}