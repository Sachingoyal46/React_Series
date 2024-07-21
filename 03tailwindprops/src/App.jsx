import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1  className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind</h1>
      <Cards username="sachin"  btnText="click me"/>
      <Cards username="khushi" btnText="check it"/>
      
    </>
  )
}

export default App
