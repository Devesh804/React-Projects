import React, { useEffect } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

const App = () => {

  const [length, setlength] = useState(8)
  const [NumberAllowed, setNumberAllowed] = useState(false)
  const [CharAllowed, setCharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  const passwordGenerator = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(NumberAllowed) str += "0123456789"
      if(CharAllowed) str += "!@#$%^&*()"

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)

        pass += str.charAt(char)

      }
      setpassword(pass)

    }, [length, NumberAllowed, CharAllowed, setpassword]
  )
  
  useEffect(() => {
    passwordGenerator()
  }, [length, NumberAllowed, CharAllowed, passwordGenerator])

  return (
    <>
    <div className='w-full text-2xl max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-6 bg-gray-800 text-orange-500'>

      <h1 className='text-white text-center py-4'>
        Password Generator
      </h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3 bg-white text-black'
          placeholder='Password'
          readOnly
        />
        <button 
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Copy </button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setlength(e.target.value)}}
          />
          <label>Length: {length} </label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={NumberAllowed}
          id='numberInput'
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={CharAllowed}
          id='characterInput'
          onChange={() => {
            setCharAllowed((prev) => !prev);
          }}
          />
          <label htmlFor="characterinput">Characters</label>
        </div>
      </div>
    </div>
    </>
    

  )
}

export default App