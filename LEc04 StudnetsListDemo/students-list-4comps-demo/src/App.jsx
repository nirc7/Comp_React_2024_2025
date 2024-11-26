
import './App.css'
import CCHomePage from './ClassComps/CCHomePage'

function App() {

  return (
    <div style={{border:'dotted blue 2px', margin:5, padding:5, borderRadius:10}}>
      <h1>List Demo</h1>
      <div className="card">
        <CCHomePage />
      </div>
    </div>
  )
}

export default App
