import logo from './logo.svg';
import './App.css';
import EHeader from './Elements/EHeader';
import FCStudent from './FuncComps/FCStudent';

function App() {
  return (
    <div className="App">
      {EHeader}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ruppin
        </p>
        {EHeader}
        <FCStudent id="7" name="avi" grade={100}/>
        <FCStudent id="8" name="benny" grade={99}/>
        <FCStudent id="4" name="charlie" grade={97}/>
      </header>
    </div>
  );
}

export default App;
