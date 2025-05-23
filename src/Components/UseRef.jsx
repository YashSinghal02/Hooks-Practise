import React,{useRef} from 'react'

const UseRef = () => {
    // const [first, setfirst] = useState(second)
    const input=useRef('')
    function Click(){

      if (input.current.classList != 'green') {
        input.current.classList.remove("red");
        input.current.classList.add("green");
        console.log(input.current)
        //  input.current.focus();
        
      }
      else{
        input.current.focus();
        input.current.classList.remove("green");
        input.current.classList.add("red");

      }
        // input.current.className = "red";
        // console.log(input.current.classList.add("red"));
        // input.current.classList.remove("green");
        // console.log( input.current.classList.remove("green"));

    }
  return (
    <div>
        <h1>UseRef</h1>
<input type="text" name="" id="" className='red' ref={input}/>
<button onClick={Click}>Click Me!</button>

    </div>
  )
}

export default UseRef