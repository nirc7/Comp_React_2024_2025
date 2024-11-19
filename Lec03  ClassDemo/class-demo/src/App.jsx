

import './App.css'
import CCParent from './ClassComps/CCParent'
import CCPersonsListDemo from './ClassComps/CCPersonsListDemo'
import CCStudent from './ClassComps/CCStudent'
import EHeader from './Elemetns/Eheader'
import FCPerson from './FuncComps/FCPerson'

function App() {

  return (
    <>
      {EHeader}
      <h1>Vite + React</h1>
      <div className="card">

        <CCPersonsListDemo /> <br /><br />

        <CCParent />

        <CCStudent id={1} name="avi" grade={100} />
        <CCStudent id={2} name="benny" grade={99} />
        <CCStudent id={3} name="charlie" grade={97} />

        <FCPerson id={1} name="avi" />
        <FCPerson id={2} name="benny" />
        <FCPerson id={3} name="charlie" />
      </div>
    </>
  )
}

export default App
