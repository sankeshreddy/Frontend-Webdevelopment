import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15;
  const [counter, setCounter] = useState(0)
  const addValue = () =>{
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    // counter = counter + 1
    // console.log(counter);
    // setCounter(counter+1)
  }
  const removeValue = () =>{
    setCounter((prevCounter) => prevCounter - 1)
    setCounter((prevCounter) => prevCounter - 1)
    setCounter((prevCounter) => prevCounter - 1)
    setCounter((prevCounter) => prevCounter - 1)
    // setCounter(counter-1)
  }
  return (
    <>
    {/* <h1>My name is sankesh {counter}</h1> */}
    <h1>Counter Application</h1>
    <h2>Counter value :{counter}</h2>
    <button
    onClick={addValue}>Add value</button> {""}
    <button
    onClick={removeValue}>remove value</button>
    <p>footer : {counter}</p>
    </>
  )
}

export default App
