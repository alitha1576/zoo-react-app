import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0);
  console.log(count);

  const  [buttonName, setbuttonName] = useState("Click me");

  return (
    <div>
   <h1>React + Vite</h1>
   <p>Hello world {count}</p>
   <button onClick={()=> 
  setbuttonName("Don't click me!")
}>{buttonName}</button>
   </div>
  )
}



export default App
