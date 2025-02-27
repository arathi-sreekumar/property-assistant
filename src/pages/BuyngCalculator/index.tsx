import { Page } from "../../components/Page"
import { Nav } from '../../components/Nav';

import { useAppDispatch, useAppSelector } from "../../state/hooks"

import { LayoutUI } from "./Buying.css"
import { ColumnUI } from "../../components/Page/Content/Content.css";
import { Label } from "../../components/Form/Label";
import { Input } from "../../components/Form/Input";
import { selectHomeBuyingCost } from "../../state/buying/selector";
import { useState } from "react";
import { setHomeCost } from "../../state/buying/actions";

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
    <LayoutUI>
      <Nav />
      <Page>
        <Page.Header id="main-header">Home Buying Costs Calculator</Page.Header>
        <Page.Content className="two-column">
          <ColumnUI>
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
          </ColumnUI>
          <ColumnUI>
          </ColumnUI>
        </Page.Content>
      </Page>
    </LayoutUI>
  )
}