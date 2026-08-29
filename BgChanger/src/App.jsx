import React, { useState } from 'react'

// Using UseStates and localStorage here... 

const App = () => {

  const [color, setcolor] = useState( localStorage.getItem("color") || "olive")

  const changeColor = (newColor) => {
    setcolor(newColor) 
    localStorage.setItem("color", newColor)

    console.log(localStorage.getItem("color"));
  }

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    >

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

          <button 
          onClick={() => changeColor("red")}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "red"}}>
            Red
          </button>
            <button 
            onClick={() => changeColor("black")}className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "black"}}>
            Black
          </button>
            <button
            onClick={() => changeColor("green")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "green"}}>
            Green
          </button>
            <button
            onClick={() => changeColor("pink")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "pink"}}>
            Pink
          </button>
            <button
            onClick={() => changeColor("Purple")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "purple"}}>
            Purple
          </button>
            <button
            onClick={() => changeColor("Olive")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "Olive"}}>
            Olive
          </button>
            <button
            onClick={() => changeColor("Blue")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: "Blue"}}>
            Blue
          </button>

        </div>

      </div>

    


    </div>
  )
}

export default App