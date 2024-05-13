import { Link } from "react-router-dom";


export default function Links(){
    return(
        <>
            <div className="">   
                   <Link to={'/mydiscs'}>Meus Discos</Link>
                </div>
                <div className="">
                    <Link to={'/carteira'}>Carteira</Link>
                </div>
        </>
    )
}