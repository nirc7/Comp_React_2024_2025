import { useContext } from "react"
import { HobbyContext } from "./HobbyContextProvider";


export default function HobbiesListComp(props) {
    const { hobbies, RemoveHobby } = useContext(HobbyContext);

    let hobbiesStr = hobbies.map(hob =>
        <div key={hob.id}>id={hob.id} name={hob.name} times={hob.times}
            <span style={{ color: 'red', margin: 10, cursor: 'pointer' }}
                onClick={() => RemoveHobby(hob.id)}
            >X</span></div>
    );
    return (
        <div>
            <h3>Hobbies List:</h3>
            {hobbiesStr}

        </div>
    )
}
