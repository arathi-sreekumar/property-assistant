import { renderWithProvider } from '../../../test/helpers';
import { screen, fireEvent } from '@testing-library/react';

import { ValuationFee } from './ValuationFee';

describe('ValuationFee', () => {
  it('renders ValuationFee component', () => {
    renderWithProvider(<ValuationFee />)
    expect(screen.getByText('Valuation Fee:')).toBeInTheDocument()
    expect(screen.getByText('£ 300')).toBeInTheDocument()
  })

  it('renders and edit icon', () => {
    renderWithProvider(<ValuationFee />)
    expect(screen.getByRole('button', { name: /Edit/i })).toBeInTheDocument()
  })

  it('can edit valuation fee', () => {
    renderWithProvider(<ValuationFee />)
    const editButton = screen.getByRole('button', { name: /Edit/i })

    fireEvent.click(editButton)

    expect(screen.queryByText('£ 300')).not.toBeInTheDocument()
    const editInput = screen.getByDisplayValue('300') as HTMLInputElement
    expect(editInput).toBeInTheDocument()

    fireEvent.change(editInput, { target: { value: '200' } })

    expect(editInput).toHaveValue(200)

    const saveButton = screen.getByRole('button', { name: /Save/i })

    fireEvent.click(saveButton)

    expect(screen.getByText('£ 200')).toBeInTheDocument()
  })

  it('renders a help icon', () => {
    renderWithProvider(<ValuationFee />)
    expect(screen.getByRole('button', { name: /More information/i })).toBeInTheDocument()
  })

  it('opens a modal when help icon is clicked', () => {
    renderWithProvider(<ValuationFee />)
    const helpButton = screen.getByRole('button', { name: /More information/i })

    fireEvent.click(helpButton)

    expect(screen.getByText('Your mortgage lender will also want to conduct a mortgage valuation survey.')).toBeInTheDocument()
  })
})