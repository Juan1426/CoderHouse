import { stock } from "../data/stock"

const pedirDatos = () => {
    
    return new Promise((resolve, reject) => {
        
        setTimeout(()=>{
            resolve(stock)
        }, 1000)

    })
}

export default pedirDatos