import React, { useState, useRef, useEffect } from 'react'
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
  useEffect(() => {
    if (properties.value !== undefined || properties.value !== value) {
      setValue(properties.value)
    }
  }, [properties.value, value])

  const inputReference = useRef<HTMLInputElement>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setValue(value)
    if (onChange) onChange(event)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { onPressEnter, onKeyDown } = properties
    if (onPressEnter && event.code === 'Enter') {
      onPressEnter(event)
    }
    if (onKeyDown) onKeyDown(event)
  }

  return (
    <input
      {...properties}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={value}
      ref={inputReference}
    />
  )
}
