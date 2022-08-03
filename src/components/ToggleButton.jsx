import React, {useState} from 'react'

export const ToggleButton = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(prevState => !prevState)
  }
  return (
    <div>
      <h4>トグルボタン</h4>
      <button onClick={(event) => toggle(event)}> {open? "open":"false"} </button>
    </div>
  )
}
