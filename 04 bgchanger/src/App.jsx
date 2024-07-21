import { useState } from 'react'

function App() {
  const [color,setcolor]=useState("olive");

  return (
    <div className="w-full h-screen duration-200 "  style={{backgroundColor : color}}>
      <div className="fixed flex  flex-wrap justify-center bottom-12 insert-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=> setcolor("Red")}   className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"Red"}}>Red</button>
          <button onClick={()=> setcolor("Green")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"Green"}}>Green</button>
          <button onClick={()=> setcolor("Yellow")}  className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"Yellow"}}>Yellow</button>
          <button onClick={()=> setcolor("Blue")}  className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"Blue"}}>Blue</button>
          <button onClick={()=> setcolor("Pink")}  className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"Pink"}}>pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
