import { depositType } from '../types/state'
import { getNewDepositValue } from './calculateCosts'

describe('getNewDepositValue', () => {
  it('retains deposit value if percentage', () => {
    const deposit: depositType = {
      unit: 'percentage',
      value: 10
    }
    const homeCost = 100
    const newHomeCost = 200
    expect(getNewDepositValue({ deposit, homeCost, newHomeCost })).toEqual(deposit)
  })

  it('calculates new deposit value if cash', () => {
    const deposit: depositType = {
      unit: 'cash',
      value: 10
    }
    const homeCost = 100
    const newHomeCost = 200
    expect(getNewDepositValue({ deposit, homeCost, newHomeCost })).toEqual({
      unit: 'cash',
      value: 20
    })
  })
})