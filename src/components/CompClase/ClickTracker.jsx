import React, {useState} from "react"

const ClickTracker = () =>{
    
    const [contador, setContador] = useState(

        {
            clicks: 0,
            fecha : null
        }
    )
    
    const handleClick = () => {
        
        setContador ({
            clicks: contador.clicks + 1,
            fecha: new Date().toLocaleString()
        })
    }

    return (
        <div className="container" onClick={handleClick}>
            <h2>Click tracker</h2>
            <hr />
            <p> Clicks: {contador.clicks}</p>
            <p>CLickeado el: {contador.fecha}</p>
        </div>
    )
}

export default ClickTracker