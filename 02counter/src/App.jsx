// use usestate hooks

import { useState } from 'react' // hooks 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter]=useState(5);

  function check()
  {
    
    if(counter < 0 || counter >20)
      {
        setcounter(0);
      }
    else
    {
      setcounter(counter)
    }  
  }

  const addvalue =()=>{
    check(counter);
    counter = counter+1
    
    
  }

  const removevalue =()=>{
      check(counter);
      counter = counter-1
     

  }
  

  return (
    <>
    <h1>chai or code</h1>
    <h2>counter value : {counter}</h2>
    <button onClick={addvalue}>add value</button>
    <br></br>
    <button onClick={removevalue}>remove value</button>
      
    </>
  )
}

export default App;

