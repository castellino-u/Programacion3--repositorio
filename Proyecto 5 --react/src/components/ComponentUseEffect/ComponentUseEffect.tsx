import { useEffect } from "react";

const ComponentUseEffect = () => {
    useEffect(() => {
        
        console.log("Estoy");
        
    }, []);


    return (
    <div>ComponentUseEffect  </div>
    )
}

export default ComponentUseEffect
