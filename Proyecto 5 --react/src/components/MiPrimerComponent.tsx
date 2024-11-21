import { FC } from "react";
interface IPropsMiPrimercomponent{
    text:string
    color:string
}

export const MiPrimerComponent: FC<IPropsMiPrimercomponent>= ({text,color,}) => {
    return (
    <div style={{color:`${color}`}}><p>{text}</p></div>
    )
}
