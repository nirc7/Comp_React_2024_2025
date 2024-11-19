import { Component } from "react";

export default class CCStudent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            grade: this.props.grade,
            age: 60
        };

    }


    btnBinus = () => {
        //this.state = xxx //ERROR
        //this.state.grade = xxx //ERROR
        //this.setState({ grade: 200, age: 80 });
        this.setState(prevS => ({ grade: prevS.grade + 5, age: 80 }));
    }

    render() {
        return (
            <div style={{
                margin: 5,
                padding: 5, border: 'solid red 2px',
                borderRadius: 15
            }}>
                id={this.props.id} <br />
                name={this.props.name} <br />
                props grade={this.props.grade}  <br />
                state grade={this.state.grade} <br />
                age={this.state.age} <br />
                <button onClick={this.btnBinus}>AddBinus</button>
            </div>
        );
    }
}