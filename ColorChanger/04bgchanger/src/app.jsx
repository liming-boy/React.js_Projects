import { useState } from 'react'

import './app.css'

export function App() {
  const [color , setColor] = useState("black")

  return (
    
    <div className='w-full h-screen duration-400 inset-x-3 px-4'
    style={{backgroundColor: color}}>

      <div className='fixed flex flex-wrap justify-center items-center bottom-3 inset-x-0 px-3'>

        <div className='flex flex-wrap justify-center items-center px-5 py-3 bg-lime-500 rounded-4xl shadow-2xl'>
          <button onClick={() => setColor("red")}
          className='outline-none px-5 py-3 rounded-3xl
          text-lime-500 shadow-2xl bg-red-800' >Red</button>
          <button onClick={() => setColor("green")}
          className='outline-none px-5 py-3 rounded-3xl
          text-lime-500 shadow-2xl bg-green-800' >Green</button>
          <button onClick={() => setColor("orange")}
          className='outline-none px-5 py-3 rounded-3xl
          text-lime-500 shadow-2xl bg-orange-800' >Orange</button>
          <button onClick={() => setColor("yellow")}
          className='outline-none px-5 py-3 rounded-3xl
          text-lime-500 shadow-2xl bg-yellow-800' >Yellow</button>
          <button onClick={() => setColor("fuchsia")}
          className='outline-none px-5 py-3 rounded-3xl
          text-lime-500 shadow-2xl bg-fuchsia-800' >Fuchsia</button>

        </div>
      </div>
    </div>  
    
  )
}

export default App