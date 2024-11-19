import { Component } from "react";
import CCChild from "./CCChild";


export default class CCParent extends Component {
    constructor(props) {
        super(props);

    }

    getDataFromChild = (data) => {
        console.log(data);
    }

    render() {
        return (
            <div>Parent <br />
                <CCChild  sendData2P={this.getDataFromChild} />
            </div>
        );
    }
}