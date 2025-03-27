import { renderWithProvider } from '../../../test/helpers';
import { screen, fireEvent } from '@testing-library/react';

import { HomePrice } from './HomePrice';

describe('Home Price', () => {
  it('renders Home Price component', () => {
    renderWithProvider(<HomePrice />)
    expect(screen.getByText('Price of the Home:')).toBeInTheDocument()
    expect(screen.getByText('£ 120,000')).toBeInTheDocument()
  })

  it('renders and edit icon', () => {
    renderWithProvider(<HomePrice />)
    expect(screen.getByRole('button', { name: /Edit/i })).toBeInTheDocument()
  })

  it('can edit home price', () => {
    renderWithProvider(<HomePrice />)
    const editButton = screen.getByRole('button', { name: /Edit/i })

    fireEvent.click(editButton)

    expect(screen.queryByText('£ 120,000')).not.toBeInTheDocument()
    const editInput = screen.getByDisplayValue('120000') as HTMLInputElement
    expect(editInput).toBeInTheDocument()

    fireEvent.change(editInput, { target: { value: '200000' } })

    expect(editInput).toHaveValue(200000)

    const saveButton = screen.getByRole('button', { name: /Save/i })

    fireEvent.click(saveButton)

    expect(screen.getByText('£ 200,000')).toBeInTheDocument()
  })
})