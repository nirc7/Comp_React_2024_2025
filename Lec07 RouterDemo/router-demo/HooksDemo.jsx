import { useEffect, useState } from 'react';
import './App.css';

function HooksDemo() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [values, setValues] = useState({ key1: 'val1', key2: 'val2' });

  const btnCountAdd = () => {
    
    let newC = count+1;
    setCount(newC);
    setCount2(prev2=>  prev2 + 1);
    setCount2(prev2=>  prev2 + 1);

    let newVals = {...values,   key1: 'avi' };
    setValues(newVals);
  }

  useEffect(() => {
    console.log(count, count2);
  });

  useEffect(() => {
    console.log('count2', count2);
  }, [count2]);

  useEffect(() => {
    console.log('did mount!');

    return () => {
      console.log('will unmount!');
    }
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={btnCountAdd}>
          count is {count}
        </button> <br />
        <button onClick={() => setCount(preC => preC + 1)}>
          count
        </button> <br />
        <button onClick={() => setCount2(preC => preC + 1)}>
          count2
        </button> <br />
        count2 = {count2}
      </div>
    </>
  )
}

export default App
