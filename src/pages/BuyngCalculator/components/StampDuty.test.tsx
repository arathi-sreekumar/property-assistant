import { BrowserRouter } from 'react-router-dom'

import { renderWithProvider } from '../../../test/helpers'
import { act, screen, fireEvent, waitFor } from '@testing-library/react'

import { StampDuty } from './StampDuty'
import { setHomeCost } from '../../../state/buying/actions'

describe('StampDuty', () => {
  it('renders StampDuty component', () => {
    renderWithProvider(<StampDuty />)
    expect(screen.getByText('Stamp Duty:')).toBeInTheDocument()
  })

  it('shows 1000 as stamp duty for first time buyer with home cost 320000', async () => {
    const { store } = renderWithProvider(<StampDuty />)

    act(() => {
      store.dispatch(setHomeCost(320000))
    })

    await waitFor(() => {
      expect(screen.getByText('£ 1,000')).toBeInTheDocument()
    })
  })

  it('shows 6000 as stamp duty for single home buyer with home cost 320000', async () => {
    const { store } = renderWithProvider(<StampDuty />)
    act(() => {
      store.dispatch(setHomeCost(320000))
    })

    await waitFor(() => {
      expect(screen.getByText('£ 1,000')).toBeInTheDocument()

      const buyerTypeSelect = screen.getByLabelText('buyerType') as HTMLSelectElement

      fireEvent.change(buyerTypeSelect, { target: { value: 'singleHome' } })

      expect(buyerTypeSelect).toHaveValue('singleHome')
      expect(screen.getByText('£ 6,000')).toBeInTheDocument()
    })
  })

  it('shows 22000 as stamp duty for second home buyer with home cost 320000', async () => {
    const { store } = renderWithProvider(<StampDuty />)

    act(() => {
      store.dispatch(setHomeCost(320000))
    })

    await waitFor(() => {
      expect(screen.getByText('£ 1,000')).toBeInTheDocument()

      const buyerTypeSelect = screen.getByLabelText('buyerType') as HTMLSelectElement

      fireEvent.change(buyerTypeSelect, { target: { value: 'secondHome' } })

      expect(buyerTypeSelect).toHaveValue('secondHome')
      expect(screen.getByText('£ 22,000')).toBeInTheDocument()
    })
  })

  it('shows 22000 as stamp duty for buy to let buyer with home cost 320000', async () => {
    const { store } = renderWithProvider(<StampDuty />)

    act(() => {
      store.dispatch(setHomeCost(320000))
    })

    await waitFor(() => {
      expect(screen.getByText('£ 1,000')).toBeInTheDocument()

      const buyerTypeSelect = screen.getByLabelText('buyerType') as HTMLSelectElement

      fireEvent.change(buyerTypeSelect, { target: { value: 'buyToLet' } })

      expect(buyerTypeSelect).toHaveValue('buyToLet')
      expect(screen.getByText('£ 22,000')).toBeInTheDocument()
    })
  })

  it('renders a help icon', () => {
    renderWithProvider(<StampDuty />)
    expect(screen.getByRole('button', { name: /More information/i })).toBeInTheDocument()
  })

  it('opens a modal when help icon is clicked', () => {
    renderWithProvider(
      <BrowserRouter>
        <StampDuty />
      </BrowserRouter>
    )

    const helpButton = screen.getByRole('button', { name: /More information/i })

    expect(helpButton).toBeInTheDocument()

    fireEvent.click(helpButton)

    expect(screen.getByText('Stamp Duty Land Tax (SDLT) is a tax you pay when you buy a property in the UK.')).toBeInTheDocument()
  })
})