import { useContext } from "react";
import { HobbyContext } from "./HobbyContextProvider";

export default function AddHobyyComp(props) {
    const { AddHobby } = useContext(HobbyContext);

    return (
        <div>
            <button onClick={() => {
                let ran = Math.floor(Math.random() * 11);
                AddHobby('hob' + ran, ran);
            }}>Add Hobby</button>
        </div>
    )
}
