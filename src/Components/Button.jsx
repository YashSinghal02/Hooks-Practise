import React, { useContext } from 'react'
import File1 from './File1'
import { CounterContext } from '../Context/Context'

const Button = () => {
    const value=useContext(CounterContext)
  return (
    <div>
     <button onClick={() => value.setCount((count) => count + 1)} >Button:{value.count}</button>
<File1/>
    </div>
  )
}

export default Button