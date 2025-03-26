import { useRef } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import useOnClickOutside from "./useOnClickOutside";

type WrapperProps = {
  handler: () => void;
};

/**
 * Wrapper component to lower code boilerplate
 */
const Wrapper: React.FC<WrapperProps> = ({
  handler,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref as React.RefObject<HTMLDivElement>, handler)

  return (
    <div>
      <div>parent</div>
      <div ref={ref}>child</div>
    </div>
  );
};

describe('useOnClickOutside', () => {
  it('renders an element with useclickoutside hook', () => {
    const handler = jest.fn();
    render(<Wrapper handler={handler} />);

    expect(screen.getByText('child')).toBeDefined();
  })

  it("doesn't handle click inside", () => {
    const handler = jest.fn();
    render(<Wrapper handler={handler} />);

    fireEvent.mouseDown(screen.getByText('child'));
    expect(handler).not.toHaveBeenCalled();
  })

  it('handles click outside', async () => {
    const handler = jest.fn();
    render(<Wrapper handler={handler} />);

    fireEvent.mouseDown(screen.getByText('parent'));

    await waitFor(() => {
      expect(handler).toHaveBeenCalled();
    })
  })
})