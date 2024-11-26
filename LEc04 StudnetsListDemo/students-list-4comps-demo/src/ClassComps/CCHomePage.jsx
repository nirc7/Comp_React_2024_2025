import { Component } from 'react';
import CCInputs from './CCInputs';
import FCStudentsList from '../FuncComps/FCStudentsList';

export default class CCHomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [
        { id: 1, name: 'avi', grade: 100 },
        { id: 2, name: 'benny', grade: 102 }]
    };
  }


  getStudentFromChild = (id, name, grade) => {
    let newStudents = [...this.state.students,
    {
      id: id,
      name: name,
      grade: grade
    }];

    console.log('before ', newStudents);
    console.log('before  ', this.state.students);
    this.setState({ students: newStudents });
    console.log('after ', this.state.students);
  }

  render() {
    return (
      <div style={{
        border: 'solid black 2px',
        margin: 5, padding: 5, borderRadius: 10
      }}>
        CCHomePage
        <CCInputs sendStudent2Parent={this.getStudentFromChild} />
        <FCStudentsList students={this.state.students} />
      </div>
    )
  }
}
