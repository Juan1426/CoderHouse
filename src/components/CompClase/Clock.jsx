import React, {useState} from "react" 

const Clock = () => {

    const [time, setTime] = useState(new Date() /*Aca puede ir un valor inicial, no obligatorio*/)

    const HandleTime = () => {
        setTime(new Date() )
    }

    return(
        <div onClick = {HandleTime}>
            <h2>Hora local </h2>
            <p>{time.toLocaleString()}</p>
        </div>
    )
}

export default Clock