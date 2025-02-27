import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from '.';

describe('<Button> component', () => {
  const onClick = jest.fn().mockImplementation(() => {
    console.log('Button clicked')
  });

  it('renders a button', () => {
    render(<Button onClick={onClick}>Test Button</Button>);

    expect(screen.queryByText('Test Button')).toBeInTheDocument();
    expect(screen.getByText('Test Button').classList.contains('primary')).toBeTruthy();
  });

  it('renders a cancel button', () => {
    render(<Button onClick={onClick} styleType="cancel">Test Button</Button>);

    expect(screen.getByText('Test Button').classList.contains('cancel')).toBeTruthy();
  });

  xit('calls onClick method when clicked', () => {
    render(<Button onClick={onClick}>Test Button</Button>);

    userEvent.click(screen.getByText('Test Button'));

    expect(onClick).toHaveBeenCalled();
  });
});