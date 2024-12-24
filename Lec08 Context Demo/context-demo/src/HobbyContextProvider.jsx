import { createContext, useState } from "react";

import { v4 as uuidv4 } from 'uuid';


export const HobbyContext = createContext();

export default function HobbyContextProvider(props) {
    const [hobbies, setHobbies] = useState([
        { id: 1, name: 'play', times: 3 },
        { id: 2, name: 'flight', times: 2 }
    ]);

    const AddHobby = (name, times) => {
        let newHobbies = [...hobbies, { id: uuidv4(), name, times }];
        setHobbies(newHobbies);
    }


    const RemoveHobby = (id) => {
        let newHobbies = hobbies.filter(hob => hob.id !== id);
        setHobbies(newHobbies);
    }

    return (
        <HobbyContext.Provider value={{hobbies, AddHobby, RemoveHobby}}>
            {props.children}
        </HobbyContext.Provider>
    )
}
