import React, { useState, useRef } from 'react'
import './index.css'

export interface InputProperties
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>
}

export const Input: React.FC<InputProperties> = ({
  onChange,
  ...properties
}) => {
  const [value, setValue] = useState(
    typeof properties.value === 'undefined'
      ? properties.defaultValue
      : properties.value
  )
  const inputReference = useRef<HTMLInputElement>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setValue(value)
    onChange?.(event)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { onPressEnter, onKeyDown } = properties
    if (onPressEnter && event.keyCode === 13) {
      onPressEnter(event)
    }
    onKeyDown?.(event)
  }

  return (
    <input
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      {...properties}
      value={value}
      ref={inputReference}
    />
  )
}
