import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
       </Routes>
      </div>
    </>
  )
}

export default App
