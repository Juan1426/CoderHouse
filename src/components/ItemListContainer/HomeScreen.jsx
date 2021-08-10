
import React from "react"

const HomeScreen = ({ greeting }) => {
    return(
        <div>
            <div>
                <h1>Título 1</h1>
            </div>
            <div>
                <p>{greeting}</p>
            </div>
        </div>
    )
}

export default HomeScreen