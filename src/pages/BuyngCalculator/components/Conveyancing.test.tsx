import { renderWithProvider } from '../../../test/helpers';
import { screen, fireEvent } from '@testing-library/react';

import { Conveyancing } from './Conveyancing';

describe('Conveyancing', () => {
  it('renders Conveyancing component', () => {
    renderWithProvider(<Conveyancing />)
    expect(screen.getByText('Conveyancing Fee:')).toBeInTheDocument()
    expect(screen.getByText('£ 1,000')).toBeInTheDocument()
  })

  it('renders and edit icon', () => {
    renderWithProvider(<Conveyancing />)
    expect(screen.getByRole('button', { name: /Edit/i })).toBeInTheDocument()
  })

  it('can edit conveyancing fee', () => {
    renderWithProvider(<Conveyancing />)
    const editButton = screen.getByRole('button', { name: /Edit/i })

    fireEvent.click(editButton)

    expect(screen.queryByText('£ 1,000')).not.toBeInTheDocument()
    const editInput = screen.getByDisplayValue('1000') as HTMLInputElement
    expect(editInput).toBeInTheDocument()

    fireEvent.change(editInput, { target: { value: '2000' } })

    expect(editInput).toHaveValue(2000)

    const saveButton = screen.getByRole('button', { name: /Save/i })

    fireEvent.click(saveButton)

    expect(screen.getByText('£ 2,000')).toBeInTheDocument()
  })

  it('renders a help icon', () => {
    renderWithProvider(<Conveyancing />)
    expect(screen.getByRole('button', { name: /More information/i })).toBeInTheDocument()
  })

  it('opens a modal when help icon is clicked', () => {
    renderWithProvider(<Conveyancing />)
    const helpButton = screen.getByRole('button', { name: /More information/i })

    fireEvent.click(helpButton)

    expect(screen.getByText('Conveyancing solicitor fees can be split into two parts:')).toBeInTheDocument()
  })
})