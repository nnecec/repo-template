import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Input } from '..'

describe('Input', () => {
  it('mount', () => {
    render(<Input />)
  })
})
