import React from 'react'
import { Input } from '@'

export const ControlledInput = () => {
  const [value, setValue] = React.useState('value')

  return <div>
    <Input value={value} onChange={event => setValue(event.target.value)} />
    <button onClick={() => setValue('changedValue')}>change</button>
  </div>
}
