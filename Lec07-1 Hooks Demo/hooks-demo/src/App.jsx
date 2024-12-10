import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [values, setValues] = useState({ num1: 0, num2: 0 });

  const btnAddCoutner = () => {
    //setCount(7);
    //setCount(count + 1); //ERROR!

    let newC = count + 1;
    console.log(newC);
    setCount(newC);

    setCount(prevC => prevC + 1);
    // //code....
    // setCount(prevC => prevC + 1);
    //setValues(prevV=> ({ num1: 1, num2: prevV.num2 }));
    setValues({ ...values, num1: 1 });
  }

  const btnAddCoutner2 = () => {
    setCount2(7);
  }

  useEffect(() => {
    console.log('effect ', count, count2);
  });

  useEffect(() => {
    console.log('effect count2 ', count, count2);
  }, [count2]);

  useEffect(() => {
    console.log('did mount!');

    return () => {
      console.log('will unmount!');
    }
  }, []);

  console.log('before return');
  return (
    <>
      <h1>Hooks Demo</h1>
      <div className="card">
        <button onClick={btnAddCoutner} >count++</button> <br />
        <button onClick={btnAddCoutner2}> counter2++</button> <br />
        count={count} <br />
        count2 = {count2} <br />
        num1= {values.num1} <br />
        num2= {values.num2} <br />
      </div>
    </>
  )
}

export default App
