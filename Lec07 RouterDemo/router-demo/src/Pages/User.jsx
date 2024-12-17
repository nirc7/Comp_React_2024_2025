import { useLocation } from "react-router-dom";


export default function User(props) {
    const { state } = useLocation();
    let userData = state;

    return (
        <div>
            <h3>User Page</h3>
            user id= {userData.userId} <br />
            user name={userData.userName}
        </div>
    )
}
