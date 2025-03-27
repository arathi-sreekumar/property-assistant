import { renderWithProvider } from '../../../test/helpers'
import { act, screen, waitFor } from '@testing-library/react'

import { YourCost } from './YourCost'
import {
  setConveyancingFee,
  setDeposit,
  setStampDuty,
  setSurveyFee,
  setValuationFee,
} from '../../../state/buying/actions'

describe('Your Cost', () => {
  it('renders Your Cost component', () => {
    renderWithProvider(<YourCost />)
    expect(screen.getByText('Your cost of buying:')).toBeInTheDocument()
    expect(screen.getByText('£ 13,800')).toBeInTheDocument()
  })

  it('updates your cost when deposit changes', async () => {
    const { store } = renderWithProvider(<YourCost />)

    act(() => {
      store.dispatch(setDeposit({ unit: 'cash', value: 32000 }))
    })

    await waitFor(() => {
      expect(screen.getByText('£ 33,800')).toBeInTheDocument()
    })
  })

  it('updates your cost when conveyancingFee changes', async () => {
    const { store } = renderWithProvider(<YourCost />)

    act(() => {
      store.dispatch(setConveyancingFee(1500))
    })

    await waitFor(() => {
      expect(screen.getByText('£ 14,300')).toBeInTheDocument()
    })
  })

  it('updates your cost when stampDuty changes', async () => {
    const { store } = renderWithProvider(<YourCost />)

    act(() => {
      store.dispatch(setStampDuty('secondHome'))
    })

    await waitFor(() => {
      expect(screen.getByText('£ 19,800')).toBeInTheDocument()
    })
  })

  it('updates total cost when surveyFee changes', async () => {
    const { store } = renderWithProvider(<YourCost />)

    act(() => {
      store.dispatch(setSurveyFee(700))
    })

    await waitFor(() => {
      expect(screen.getByText('£ 14,000')).toBeInTheDocument()
    })
  })

  it('updates total cost when valuation fee changes', async () => {
    const { store } = renderWithProvider(<YourCost />)

    act(() => {
      store.dispatch(setValuationFee(200))
    })

    await waitFor(() => {
      expect(screen.getByText('£ 13,700')).toBeInTheDocument()
    })
  })
})