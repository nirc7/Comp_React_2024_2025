import { useDebugValue } from "react";
import { useNavigate } from "react-router-dom";


export default function Home(props) {
    const navigate = useNavigate();

    const btnGo2UWD = () => {

        let userData = {
            userId: 1,
            userName: 'avi'
        };

        navigate('user', { state: userData });
    }

    return (
        <div>
            <h3>Home Page</h3>
            <button className="btn btn-success" onClick={btnGo2UWD}>go2UserWD</button>
        </div>
    )
}
