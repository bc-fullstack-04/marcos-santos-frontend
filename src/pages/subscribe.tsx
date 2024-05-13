import { Link, Navigate, useNavigate } from "react-router-dom";
import Input from "../components/input";
import ButtonLogin from "../components/button-login";
import { FormEvent, useState } from "react";
import { user_api } from "../services/apiServices";
import toast from "react-hot-toast";

export default function Subscribe(){
    

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

 function createUser(){

        const UserData = {
            "name": name,
            "email": email,
            "password": password
          };

          if(UserData["name"] == "" || UserData["email"] == "" || UserData["password"] == ""){
            toast.error("Preencha todos os campos!");
          }else{
            user_api.post("/users/create", UserData).then(response => {
                toast.success("Usuário criado com sucesso");   
                navigate('/login');
                

            }).catch(error => {
                toast.error("Já existe um usuário com este email!");
            })
          }

        
           
                
            
            
        
       
        
    }

    return(
        <div className=" bg-fundo bg-cover  bg-no-repeat h-screen "> 
            <div className="absolute inset-0 bg-black bg-opacity-10 h-auto backdrop-blur-sm items-center justify-center flex">
                <div className="w-96  bg-white rounded-lg items-center flex flex-col login">
                    <div className="mt-5">
                         <img src="./src/assets/soon.png" className="w-7"/>
                    </div>
                    <div className="mt-2">
                        <h1 className="font-medium text-black text-xl">Criar conta</h1>
                    </div>
                  
                        <div className="mt-4">
                            <Input required onChange={e => setName(e.target.value)} children={"Nome Completo"} type="name"/>
                        </div>
                        <div>
                            <Input required onChange={e => setEmail(e.target.value)} children={"Email"} type="email"/>
                        </div>
                        <div>
                            <Input required onChange={e => setPassword(e.target.value)}  children={"Senha"}  type="password"/>
                        </div>
                        <div className="mt-2">
                             <button onClick={createUser} style={{width: "270px", height: "40px"}} className="bg-black w-44 h-10 rounded-full text-white font-semibold"> Criar conta </button>
                            
                        </div>
                
                    <div className="mt-5 mb-5">
                        <p className="text-xs text-zinc-900">já tem uma conta?  <Link  className="underline text-black font-bold" to={'/login'}> Entrar</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}