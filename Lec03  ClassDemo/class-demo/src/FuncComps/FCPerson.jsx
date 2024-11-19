import { renderToStaticMarkup } from "react-dom/server";

export default function FCPerson(props) {


  let myId = props.id;
  let myName = '...';

  function btnAdd() {
    myId++;
    console.log(myId);
  }

  function chgName(event){
    myName = event.target.value;
    console.log(myName);    
  }

  if (props.id < 2) {
    return (
      <div>less than 2</div>
    );
  }

  return (
    <div style={{
      margin: 5,
      padding: 5, border: 'solid green 2px',
      borderRadius: 5
    }}>
      id={myId} <br />
      name={props.name} <br />
      <button onClick={btnAdd}>Add</button> <br />
      <input type="text" onChange={chgName} /> {myName}
    </div>
  );
}