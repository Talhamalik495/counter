import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const add = () => {
    count++;
    console.log(count);
    setCount(count)

  }
  const remove = () => {
    if (count > 0) {
      count--;
      console.log(count);
      setCount(count)
    }

  }
  return (
    <>
      <h1>Counter Increase And Decreace</h1>
      <br />
      <p className='number'>{count}</p>
      <br />
      <div className='button-container'>
        <button className='button' onClick={add}>Add</button>
        <button className='button' onClick={remove}>Remove</button>
      </div>
    </>
  )
}

export default App
