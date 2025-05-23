import React,{useState,useRef,useEffect} from 'react'

const USeRef1 = () => {
    const [count, setCount] = useState(0)
    const colour = useRef()

    //Dirtectly Updating DOM
    useEffect(() => {
        colour.current.style.backgroundColor="red"

    }, [])
    
    //Accessing DOM Element
    function Chnge(){
        colour.current.style.backgroundColor="blue"
    }

    return (
    <div>
        <button ref={colour} onClick={(count)=>setCount(count+1)}>Click Me!{count}</button>
        <button  onClick={Chnge}>Change Click Me!</button>
    </div>
  )
}

export default USeRef1