import React,{useContext} from 'react'
import { CounterContext } from '../Context/Context'

const File1 = () => {
    const value=useContext(CounterContext)
  return (
    <div>
        File:{value.count}


    </div>
  )
}

export default File1