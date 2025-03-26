import { fireEvent, render, screen } from '@testing-library/react';

import { Help } from "."

describe('<Help> component', () => {
  it('displays Help component', () => {
    render(<Help title='Help title'><p>Body text</p></Help>)

    expect(screen.getByRole('button', { name: /More information/i })).toBeInTheDocument()
  })

  it('opens a modal when help icon is clicked', () => {
    render(<Help title='Help title'><p>Body text</p></Help>)
    const helpButton = screen.getByRole('button', { name: /More information/i })

    fireEvent.click(helpButton)
    expect(screen.getByText('Help title')).toBeInTheDocument()
    expect(screen.getByText('Body text')).toBeInTheDocument()
  })

  it('closes the modal when close button clicked', () => {
    render(<Help title='Help title'><p>Body text</p></Help>)
    const helpButton = screen.getByRole('button', { name: /More information/i })

    fireEvent.click(helpButton)
    expect(screen.getByText('Help title')).toBeInTheDocument()
    expect(screen.getByText('Body text')).toBeInTheDocument()

    const closeButton = screen.getByRole('button', { name: /x/i })

    fireEvent.click(closeButton)

    expect(screen.queryByText('Help title')).not.toBeInTheDocument()
  })
})