import { Component } from 'react';

export default class CCStudentsListDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [
        { id: 1, name: 'avi', grade: 100 },
        { id: 2, name: 'benny', grade: 102 }]
    };
  }

  chgId = (e) => {
    this.setState({ id: Number(e.target.value) });
  }

  chgName = (e) => {
    this.setState({ name: e.target.value });
  }

  chgGarde = (e) => {
    this.setState({ grade: Number(e.target.value) });
  }

  btnAddStudent = () => {

    let newStudents = [...this.state.students,
    {
      id: this.state.id,
      name: this.state.name,
      grade: this.state.grade
    }];

    //console.log('before ', newStudents);
    console.log('before  ', this.state.students);
    this.setState({ students: newStudents });
    console.log('after ', this.state.students);
  }

  render() {
    let studentsStr = this.state.students.map((stu, ind) =>
      <div key={ind} >id={stu.id} name={stu.name} grade={stu.grade}</div>);

    console.log('render');

    return (
      <div>
        ID: <input type="text" onChange={this.chgId} /> <br />
        Name: <input type="text" onChange={this.chgName} /> <br />
        Grade: <input type="text" onChange={this.chgGarde} /> <br /> <br />
        <button onClick={this.btnAddStudent} >Add Student</button> <br />
        <h3>Students List:</h3>
        {studentsStr}
      </div>
    )
  }
}
