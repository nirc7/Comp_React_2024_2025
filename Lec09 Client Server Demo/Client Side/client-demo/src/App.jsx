import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClientPage from './ClientPage'
import Student from './Student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <ClientPage />
        <Student id={1} name="avi" /> <br />
        <Student id={2} name="benny" /> <br />
        count={count} <br />
        <button onClick={() => setCount(7)}>+7</button>
      </div>
    </>
  )
}

export default App
