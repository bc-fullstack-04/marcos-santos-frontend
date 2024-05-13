import { FormEvent, useEffect, useState } from "react";
import Input from "../components/input";
import ButtonLogin from "../components/button-login";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");    
    const { login , isAutenticated} = useAuth(); 
    const navigate = useNavigate();

    
    
    useEffect(() => {
       
    }, [])

    async function HendleLogin(event: FormEvent){
        event.preventDefault();

      try{
        await login(email, password);
        toast.success("Logado com sucesso!" )
        navigate('/home');
    
      }catch{
        toast.error("Dados de login incorretos!")
      }
        
    }

    return (
        <>
       
            {isAutenticated && <Navigate to='/home'/> }

        <div className=" bg-fundo bg-cover  bg-no-repeat h-screen " >
            <div className="absolute inset-0 bg-black bg-opacity-10 h-auto backdrop-blur-sm items-center justify-center flex">
                <div className="w-96  bg-white rounded-lg items-center flex flex-col login">
                    <div className="mt-5">
                         <img src="./src/assets/soon.png" className="w-7"/>
                    </div>
                    <div className="mt-2">
                        <h1 className="font-medium text-black text-xl">Acesse sua conta</h1>
                    </div>
                    <form onSubmit={HendleLogin}>
                        <div className="mt-4">
                            <Input required onChange={e => setEmail(e.target.value)} children={"Email"} type="email"/>
                        </div>
                        <div>
                            <Input required onChange={e => setPassword(e.target.value)} children={"Senha"}  type="password"/>
                        </div>
                        <div className="mt-2">
                           
                            <button type="submit" style={{width: "270px", height: "40px"}} className="bg-black w-44 h-10 rounded-full text-white font-semibold"> Entrar </button>
                        </div>
                    </form>
                    <div className="mt-5 mb-5">
                        <p className="text-xs text-zinc-900">Ainda não tem uma conta? <Link  className="underline text-black font-bold" to={'/cadastro'}>Inscrever-se </Link> </p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}