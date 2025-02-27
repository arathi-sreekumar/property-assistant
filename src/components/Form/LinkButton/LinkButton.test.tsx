
import '@testing-library/dom'
import {screen, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';

import { LinkButton } from "."

describe('LinkButton', () => {
  it('displays a LinkButton', () => {
    render(
      <Router>
        <LinkButton to="/test">
          Test
        </LinkButton>
      </Router>
    )
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  //add test to verify onclick takes you to /test url
})