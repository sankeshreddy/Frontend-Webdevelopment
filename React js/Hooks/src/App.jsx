import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'
/* useState Hook*/
function App() {

  const counter = useState(0)[0];
  const setCounter = useState(0)[1];
  console.log(counter);
  console.log(setCounter);

  let color = "Red";
  const changeColor = ()=>{
    color = "Blue";
  }
  return(
    <>
      <h1>My favourite color is {color}</h1>
      <button onClick={changeColor}>Blue</button>
    </>
  )
}

export default App
