
import { Component } from 'react';

export default class CCPersonsListDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            persons: [{ id: 1, name: "avi" }, { id: 2, name: "benny" }]
        };
    }

    chgId = (e) => {
        this.setState({ id: e.target.value });
    }

    chgName = (e) => {
        this.setState({ name: e.target.value });
    }

    btnAddPErson = () => {
        let newPersnos = [...this.state.persons,
        { id: this.state.id, name: this.state.name }];
        console.log(newPersnos);

        this.setState({ persons: newPersnos });
    }

    render() {

        let peronsStr = this.state.persons.map(
            (per) => <div key={per.id}>id={per.id} name={per.name}</div>);

        return (
            <div>
                ID: <input type="text" onChange={this.chgId} /><br />
                NAME: <input type="text" onChange={this.chgName} /> <br />
                <button onClick={this.btnAddPErson} >ADD PERSON</button>
                <h3>LIST</h3>
                {peronsStr}
            </div>
        )
    }
}
