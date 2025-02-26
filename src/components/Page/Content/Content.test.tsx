
import '@testing-library/dom'
import {screen, render } from '@testing-library/react'

import { Content } from "."

describe('Content', () => {
  it('displays a Content', () => {
    render(
      <Content>
        Test
      </Content>
    )
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})