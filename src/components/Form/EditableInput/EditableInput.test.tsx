import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { EditableInput } from '.';
import user from '@testing-library/user-event';

describe('<EditableInput> component', () => {
  it('displays an editable input component initially with a text value', () => {
    render(<EditableInput onSave={() => { }} value={100} unit="cash" />)

    expect(screen.getByText('£ 100')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Edit/i })).toBeInTheDocument()
  })

  it('shows as editable field on click of edit icon button', () => {
    render(<EditableInput onSave={() => { }} value={100} unit="cash" />)

    const editButton = screen.getByRole('button', { name: /Edit/i })

    expect(screen.getByText('£ 100')).toBeInTheDocument()

    fireEvent.click(editButton)

    expect(screen.queryByText('£ 100')).not.toBeInTheDocument()
    expect(screen.getByDisplayValue('100')).toBeInTheDocument()
    const saveButton = screen.getByRole('button', { name: /Save/i })
    expect(saveButton).toBeInTheDocument()
  })

  it('shows as editable field on click of text', () => {
    render(<EditableInput onSave={() => { }} value={100} unit="cash" />)

    const textDisplay = screen.getByText('£ 100')
    expect(textDisplay).toBeInTheDocument()

    fireEvent.click(textDisplay)

    expect(screen.queryByText('£ 100')).not.toBeInTheDocument()
    expect(screen.getByDisplayValue('100')).toBeInTheDocument()
    const saveButton = screen.getByRole('button', { name: /Save/i })
    expect(saveButton).toBeInTheDocument()
  })

  it('should be able to edit and see the changes', async () => {
    render(<EditableInput onSave={() => { }} value={100} unit="cash" />)

    const editButton = screen.getByRole('button', { name: /Edit/i })

    fireEvent.click(editButton)

    const editInput = screen.getByDisplayValue('100') as HTMLInputElement

    expect(screen.getByDisplayValue('100')).toBeInTheDocument()

    fireEvent.change(editInput, { target: { value: '2000' } })

    expect(editInput).toHaveValue('2000')
  })

  it('should be able to save the changes on clicking save icon', () => {
    const onSave = jest.fn()
    render(<EditableInput onSave={onSave} value={100} unit="cash" />)

    const editButton = screen.getByRole('button', { name: /Edit/i })

    fireEvent.click(editButton)

    const editInput = screen.getByDisplayValue('100') as HTMLInputElement

    fireEvent.change(editInput, { target: { value: '200' } })

    expect(editInput).toHaveValue('200')

    const saveButton = screen.getByRole('button', { name: /Save/i })

    fireEvent.click(saveButton)

    expect(onSave).toHaveBeenCalledWith({ unit: 'cash', value: 200 })
    expect(screen.getByText('£ 200')).toBeInTheDocument()
  })

  it('should be able to save the changes on enter keypress', async () => {
    const onSave = jest.fn()
    render(<EditableInput onSave={onSave} value={100} unit="cash" />)

    const editButton = screen.getByRole('button', { name: /Edit/i })

    fireEvent.click(editButton)

    const editInput = screen.getByDisplayValue('100') as HTMLInputElement

    fireEvent.change(editInput, { target: { value: '200' } })

    expect(editInput).toHaveValue('200')

    user.type(editInput, '{enter}')

    await waitFor(() => {
      expect(onSave).toHaveBeenCalledWith({ unit: 'cash', value: 200 })
      expect(screen.getByText('£ 200')).toBeInTheDocument()
    })
  })

  //todo write tests for unit change
  it('should be able to change the unit', async () => {
    const onSave = jest.fn()
    render(
      <EditableInput
        onSave={onSave}
        value={100}
        unit="cash"
        unitOptions={[
          { optionValue: 'cash', displayValue: '£' },
          { optionValue: 'percentage', displayValue: '%' },
        ]}
        getValueForUnitChange={(fieldValues) => {
          if (fieldValues.unit === 'cash') {
            return 100
          } else {
            return 10
          }
        }}
      />
    )

    expect(screen.getByText('£ 100')).toBeInTheDocument()

    const editButton = screen.getByRole('button', { name: /Edit/i })

    fireEvent.click(editButton)

    const unitSelect = screen.getByRole('combobox', { name: /unit/i })

    fireEvent.change(unitSelect, { target: { value: 'percentage' } })

    expect(unitSelect).toHaveValue('percentage')

    const saveButton = screen.getByRole('button', { name: /Save/i })

    fireEvent.click(saveButton)

    expect(onSave).toHaveBeenCalledWith({ unit: 'percentage', value: 10 })

    expect(screen.getByText('10 %')).toBeInTheDocument()
  })
})