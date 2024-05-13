import { CSSProperties } from "react"
import { Link } from "react-router-dom"

interface Props{
    style?: CSSProperties
    type?: "submit"
    children: React.ReactNode
}

export default function ButtonLogin(props: Props){
    return(
        <Link to={'/login'}><button style={props.style} type={props.type} className="bg-black w-44 h-10 rounded-full text-white font-semibold"> {props.children} </button></Link>
    )
}