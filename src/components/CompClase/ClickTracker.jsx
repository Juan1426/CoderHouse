import React, {useState} from "react"

const ClickTracker = () =>{
    
    const [contador, setContador] = useState(0)
    
    const handleClick = () => {
        
        setContador (contador + 1)
    }

    return (
        <div className="container" onClick={handleClick()}>
            <h2>Click tracker</h2>
            <hr />
            <p> Clicks: {contador}</p>
        </div>
    )
}

export default ClickTracker