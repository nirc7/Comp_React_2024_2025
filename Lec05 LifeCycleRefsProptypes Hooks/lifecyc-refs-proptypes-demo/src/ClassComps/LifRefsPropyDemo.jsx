import { Component } from 'react';
import PropTypes from 'prop-types';

export default class LifRefsPropyDemo extends Component {
    constructor(props) {
        super(props);

        console.log('ctor');

        this.state = { counter: 0, userName: "" };
        //go to DB select stidents...5secsetState ERROR!

        let num=9;

        this.txt = null;
    }

    componentDidMount() {
        console.log('componentDidMount');
        //go to DB select stidents...5secsetState GOOD:)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }


    btnAddCounter = () => {
        let newCoutner = this.state.counter + 1;
        console.log(newCoutner);

        console.log('before', this.state.counter);
        this.setState({ counter: newCoutner });
        console.log('after', this.state.counter);

        console.log( this.txt);
        this.txt.focus();
        this.txt.size = 10;

    }


    onTextChanged = (event) => {
        this.setState({ userName: event.target.value.toUpperCase() });
    }

    render() {
        console.log('render');
        //SetState...ERROR

        return (
            <div>
                <h3>Demo</h3>
                counter= {this.state.counter} <br />
                <button onClick={this.btnAddCounter}>Add Counter</button> <br />
                connected to state input WO onchange  <input type="text" name="userName" value={this.state.userName} /><br />
                connected to state input With onchange<input type="text" name="userName" value={this.state.userName}
                    onChange={this.onTextChanged} placeholder='enter a num....' /> <br />

                grade: <input type="text" ref={ ref1 => this.txt=ref1} />
            </div>
        )
    }
}

LifRefsPropyDemo.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
};
