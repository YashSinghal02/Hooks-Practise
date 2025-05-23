import React, { useRef,useEffect,useState } from 'react'

const UseRef3 = () => {
    const [count, setCount] = useState(0)
    // const prev=useRef(0)
    let a=useRef(0);

    useEffect(() => {
       a.current=a.current+1;
      console.log(a)
    })
    function Click(){
        setCount(count+1)
    }
    
  return (
    <div>
        <p>USeRef3</p>
<button onClick={Click}>Click{count}</button>

    </div>
  )
}

export default UseRef3