import { Component } from "react";


export default class CCChild extends Component {
    constructor(props){
        super(props);

    }
    
    btnSendD2P=()=>{
        this.props.sendData2P(7);
    }


    render() {
        return (
            <div>Child <br />
                <button onClick={this.btnSendD2P}  >send d 2 p</button>
            </div>
        );
    }
}