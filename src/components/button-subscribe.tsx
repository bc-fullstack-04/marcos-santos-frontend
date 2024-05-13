import { Link } from "react-router-dom";

interface Props{
    style?: React.CSSProperties;
}
export default function ButtonSubscribe(props: Props){
    return(
        <Link to={'/cadastro'}><button style={props.style}  className="subscribe w-44 h-10 rounded-full text-black font-bold">Inscrever-se</button></Link>
    )
}