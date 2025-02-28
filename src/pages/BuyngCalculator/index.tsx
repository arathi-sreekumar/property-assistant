import { useAppDispatch, useAppSelector } from "../../state/hooks"

import { Label } from "../../components/Form/Label";
import { Input } from "../../components/Form/Input";
import { selectHomeBuyingCost } from "../../state/buying/selector";
import { useState } from "react";
import { setHomeCost } from "../../state/buying/actions";
import { Layout } from "../../components/Page/Layout";
import { PAGE_TYPE } from "../../common/constants";

export const BuyingCalculator = () => {
  const dispatch = useAppDispatch()
  const homeCost = useAppSelector(selectHomeBuyingCost)
  console.log('homeCost: ', homeCost)
  const [localHomeCostState, setLocalHomeCostState] = useState(homeCost)

  const keyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      priceChangeHandler()
    }
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalHomeCostState(event.target.valueAsNumber)
  }

  const priceChangeHandler = () => {
    dispatch(setHomeCost(localHomeCostState))
  }

  return (
    <Layout
      pageType={PAGE_TYPE.BUYING_CALCULATOR}
    >
      <form>
        <Label>
          Price of the Home:
        </Label>
        <Input
          type='number'
          value={localHomeCostState}
          onBlur={priceChangeHandler}
          onKeyDown={keyDownHandler}
          onChange={handleOnChange}
        />
      </form>
    </Layout>
  )
}