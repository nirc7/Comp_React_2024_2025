
export default function FCStudent(props) {

  let myGrade = props.grade;
  let hob = "...";

  function btnAdd() {
    console.log(myGrade);
    myGrade++
    console.log(myGrade);
  }

  function chgHob(event){
    console.log(event.target.value);
    hob = event.target.value;    
  }

  if (props.id < 5) {
    return (
      <div>less 5!</div>
    );
  }

  return (
    <div style={{
      backgroundColor: 'grey',
      margin: 10, padding: 10,
      borderWidth: 2, borderRadius: 5
    }}>
      id={props.id} <br />
      name={props.name} <br />
      grade= {myGrade} <br />
      <button onClick={btnAdd}>Add</button> <br />
      hobby : <input type="text" onChange={chgHob} /> {hob}
    </div>
  );
}