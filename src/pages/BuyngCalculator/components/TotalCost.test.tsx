import { renderWithProvider } from '../../../test/helpers'
import { act, screen, waitFor } from '@testing-library/react'

import { TotalCost } from './TotalCost'
import { setConveyancingFee, setHomeCost, setStampDuty, setSurveyFee, setValuationFee } from '../../../state/buying/actions'

describe('Total Cost', () => {
  it('renders Total Cost component', () => {
    renderWithProvider(<TotalCost />)
    expect(screen.getByText('Total cost to buy:')).toBeInTheDocument()
    expect(screen.getByText('£ 121,800')).toBeInTheDocument()
  })

  it('updates total cost when homeCost changes', async () => {
    const { store } = renderWithProvider(<TotalCost />)

    act(() => {
      store.dispatch(setHomeCost(320000))
    })

    await waitFor(() => {
      expect(screen.getByText('£ 322,800')).toBeInTheDocument()
    })
  })

  it('updates total cost when conveyancingFee changes', async () => {
    const { store } = renderWithProvider(<TotalCost />)

    act(() => {
      store.dispatch(setConveyancingFee(1500))
    })

    await waitFor(() => {
      expect(screen.getByText('£ 122,300')).toBeInTheDocument()
    })
  })

  it('updates total cost when stampDuty changes', async () => {
    const { store } = renderWithProvider(<TotalCost />)

    act(() => {
      store.dispatch(setStampDuty('secondHome'))
    })

    await waitFor(() => {
      expect(screen.getByText('£ 127,800')).toBeInTheDocument()
    })
  })

  it('updates total cost when surveyFee changes', async () => {
    const { store } = renderWithProvider(<TotalCost />)

    act(() => {
      store.dispatch(setSurveyFee(700))
    })

    await waitFor(() => {
      expect(screen.getByText('£ 122,000')).toBeInTheDocument()
    })
  })

  it('updates total cost when valuation fee changes', async () => {
    const { store } = renderWithProvider(<TotalCost />)

    act(() => {
      store.dispatch(setValuationFee(200))
    })

    await waitFor(() => {
      expect(screen.getByText('£ 121,700')).toBeInTheDocument()
    })
  })
})