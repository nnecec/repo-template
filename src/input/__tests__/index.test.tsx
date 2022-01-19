import { describe, expect, it, fn } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import { Input } from '..'

describe('Components: Input', () => {
  it('mount', () => {
    render(<Input />)
  })

  it('defaultValue and value', () => {
    const demo1 = render(<Input defaultValue="Hello, world!" />)
    expect(demo1.getByDisplayValue('Hello, world!')).toBeInTheDocument()
    demo1.unmount()

    const demo2 = render(<Input defaultValue="Hello, world!" value="Hello, nnecec!" />)
    expect(demo2.getByDisplayValue('Hello, nnecec!')).toBeInTheDocument()
    demo2.unmount()
  })

  it('value and change value', async () => {
    let argumentEventObject
    let argumentEventObjectValue
    const onChange = event => {
      argumentEventObject = event
      argumentEventObjectValue = event.target.value
    }
    const { getByDisplayValue, getByTestId } = render(<Input onChange={onChange} data-testid="input" />)
    expect(getByTestId('input')).toBeInTheDocument()
    fireEvent.change(getByTestId('input'), { target: { value: 'changedValue' } })
    expect(argumentEventObject.type).toBe('change')
    expect(argumentEventObjectValue).toBe('changedValue')

    expect(getByDisplayValue('changedValue')).toBeInTheDocument()
  })

  it('onKeyDown', () => {
    const onPressEnter = fn()
    const onKeyDown = fn()
    const { getByTestId } = render(<Input onPressEnter={onPressEnter} onKeyDown={onKeyDown} data-testid="input" />)

    fireEvent.keyDown(getByTestId('input'), { key: 'Enter', code: 'Enter' })
    expect(onPressEnter).toBeCalledWith(
      expect.objectContaining({
        type: 'keydown',
        key: 'Enter'
      })
    )

    fireEvent.keyDown(getByTestId('input'), { key: 'j', code: 'KeyJ' })
    expect(onKeyDown).toBeCalledWith(
      expect.objectContaining({
        type: 'keydown',
        key: 'j'
      })
    )
  })
})
