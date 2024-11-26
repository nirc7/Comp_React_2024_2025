
export default function FCStudentsList(props) {

  let studentsStr = props.students.map((stu, ind) =>
    <div key={ind} >id={stu.id} name={stu.name} grade={stu.grade}</div>);

  return (
    <div style={{ border: 'dashed red 2px', margin: 5, padding: 5, borderRadius: 10 }}>
      <h3>Students List:</h3>
      {studentsStr}
    </div>
  )
}
