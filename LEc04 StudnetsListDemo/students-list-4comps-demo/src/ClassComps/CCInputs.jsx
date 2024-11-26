import { Component } from 'react';

export default class CCInputs extends Component {
  constructor(props) {
    super(props);
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
    this.props.sendStudent2Parent(this.state.id, this.state.name, this.state.grade);
  }

  render() {
    return (
      <div style={{ border: 'solid green 2px', margin: 5, padding: 5, borderRadius: 10 }}>
        ID: <input type="text" onChange={this.chgId} /> <br />
        Name: <input type="text" onChange={this.chgName} /> <br />
        Grade: <input type="text" onChange={this.chgGarde} /> <br /> <br />
        <button className='btn btn-success' onClick={this.btnAddStudent} >Add Student</button> <br />
      </div>
    )
  }
}
