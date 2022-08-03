import React, {useState} from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0);

  const CountUp = () => {
    setCount(prevState => prevState+1)
  };
  const CountDown = () => {
    setCount(prevState => prevState-1)
  };

  return (
    <div>
      <h4>カウンター</h4>
      <p>現在のカウント数；{count}</p>
      <button onClick={(event)=> CountUp(event)}> up </button>
      <button onClick={(event)=> CountDown(event)}> down </button>
    </div>
  )
}
