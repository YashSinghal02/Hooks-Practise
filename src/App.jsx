import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CounterContext } from './Context/Context'
import Navbar from './Components/Navbar'
import UseRef from './Components/UseRef'
import USeRef1 from './Components/USeRef1'
import UseRef3 from './Components/UseRef3'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CounterContext.Provider value={{count,setCount}}>
      <Navbar/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <UseRef/>
      <USeRef1/>
      <UseRef3/>
      </CounterContext.Provider>
    </>
  )
}

export default App
