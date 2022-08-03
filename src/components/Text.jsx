import React, {useState}  from 'react'

export const Text = () => {
  const [input, setInput] = useState("")
  const handleInput = (e) =>{
    setInput(e.target.value);
  }
  return (
    <>
    <h4>インプッフォーム</h4>
      <div>
        <input 
          type="text"
          onChange={(event) => handleInput(event)}
          value={input}
          placeholder="名前を入力してください" />
      </div>
    </>
  )
}
