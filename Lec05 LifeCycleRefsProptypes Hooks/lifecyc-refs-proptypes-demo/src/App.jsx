import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LifRefsPropyDemo from './ClassComps/LifRefsPropyDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <LifRefsPropyDemo id={1} name="avi"/>
      </div>
    </>
  )
}

export default App
