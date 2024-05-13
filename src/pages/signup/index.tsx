import { FormEvent, useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import {api} from "../../services/apiServices";
import toast from "react-hot-toast";



export default function Signup() {

   const [name, setName] = useState<string>();
   const [email, setEmail] = useState<string>();
   const [tel, setTel] = useState<string>();
   const [password, setPassword] = useState<string>();

   async function hendleSignup(event: FormEvent){

      event.preventDefault();
      
      const data = {
         name,
         email,
         tel,
         password
      }

      console.log(data);

      try{
          await api.post("/api/user/signup", data).then(resp => {
            console.log(resp.data);  
            toast.success("Usuário criado com sucesso!");
           });
      }catch{
         toast.error("error");
      }

    

   }

    return (
     <main className="bg-fundo bg-no-repeat bg-cover h-screen place-items-center grid">
        <div className="flex flex-col bg-slate-200 rounded-md pt-10  w-96 p-7 mx-auto">
            <h1 className="text-4xl text-center mt-5 font-bold mb-5">Inscreva-se</h1>
            <form onSubmit={hendleSignup} className="flex flex-col">
               <Input type="text" onChange={event => setName(event.target.value)}>Nome:</Input>
               <Input type="email" onChange={event => setEmail(event.target.value)}>E-mail</Input>
               <Input type="tel" onChange={event => setTel(event.target.value)}>Telefone</Input>
               <Input type="password" onChange={event => setPassword(event.target.value)}>Senha</Input>
               <Button type="submit">Entrar</Button>
            </form>
        </div>
     </main>
    )
  }
  
  