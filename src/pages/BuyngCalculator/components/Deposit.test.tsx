import { renderWithProvider } from '../../../test/helpers';
import { screen, fireEvent } from '@testing-library/react';

import { Deposit } from './Deposit';

describe('Deposit', () => {

  it('renders Deposit component', () => {
    renderWithProvider(<Deposit />)
    expect(screen.getByText('Deposit:')).toBeInTheDocument()
  })

  it('renders and edit icon button', () => {
    renderWithProvider(<Deposit />)
    expect(screen.getByRole('button', { name: /Edit/i })).toBeInTheDocument()
    expect(screen.queryByText('£ 12000')).toBeInTheDocument()
  })

  it('can edit deposit unit', () => {
    renderWithProvider(<Deposit />)
    const editButton = screen.getByRole('button', { name: /Edit/i })

    fireEvent.click(editButton)

    const unitSelect = screen.getByLabelText('unit') as HTMLSelectElement

    expect(unitSelect).toBeInTheDocument()

    fireEvent.change(unitSelect, { target: { value: 'percentage' } })

    expect(unitSelect).toHaveValue('percentage')
    expect(screen.getByDisplayValue('10')).toBeInTheDocument()

    const saveButton = screen.getByRole('button', { name: /Save/i })

    fireEvent.click(saveButton)

    expect(screen.getByText('10 %')).toBeInTheDocument()
  })

  it('can edit deposit', () => {
    renderWithProvider(<Deposit />)
    const editButton = screen.getByRole('button', { name: /Edit/i })

    fireEvent.click(editButton)

    expect(screen.queryByText('£ 12000')).not.toBeInTheDocument()
    const editInput = screen.getByDisplayValue('12000') as HTMLInputElement
    expect(editInput).toBeInTheDocument()

    fireEvent.change(editInput, { target: { value: '2000' } })

    expect(editInput).toHaveValue(2000)

    const saveButton = screen.getByRole('button', { name: /Save/i })

    fireEvent.click(saveButton)

    expect(screen.getByText('£ 2000')).toBeInTheDocument()
  })
})
