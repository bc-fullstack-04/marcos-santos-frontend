import { useEffect, useState } from "react";
import Input from "../components/input";
import Header from "../components/header-home";
import { album_api, user_api } from "../services/apiServices";
import { Navigate, redirect } from "react-router-dom";
import toast from "react-hot-toast";



export default function Wallet(){

    const [balance, setBalance] = useState();
    const [points, setPoints] = useState();
    const [valueInput, setValueInput] = useState('');

    const handleChange = (event) => {
        setValueInput(event.target.value);
    }
    
    useEffect(() => {
        user_api.defaults.headers.common.Authorization = `Basic ${localStorage.getItem('@token')}`;
        user_api.get('/wallet').then(response => {
           const balance = response.data;
            setBalance(balance["balance"]);
            setPoints(balance["points"]);
        })
    }, []);

     function Credit(){
        user_api.defaults.headers.common.Authorization = `Basic ${localStorage.getItem('@token')}`;  
        const value = parseFloat(valueInput);
        user_api.post(`/wallet/credit/${value}`).then(response => {
            toast.success(`O valor de R$${value} foi creditado com sucesso!`);
            setTimeout(() => {
                window.location.reload();
            }, 1500)
            
        }).catch(error => {
            toast.error("Valor inválido!");
        })
           
        
        
        
    }

    return(
        <div>
            <Header/>
  
            <div className="w-full flex justify-center items-center  wallet">
                <div className="w-[400px] mt-20 h-auto rounded-lg bg-white walletMobile"  style={{border: '1px solid #000'}}>
                    <div className="flex flex-col">
                        <div className="text-center pt-5">
                            <h1 className="text-4xl text-black">Carteira</h1>
                        </div>
                        <div className="flex justify-center">
                            <div className="text-white flex flex-col  mt-4 w-[150px] rounded-lg p-2 bg-gray-900">
                                <h1>Saldo atual:</h1>
                                <h1>R$ {balance}</h1>
                            </div>
                            <div className="text-white flex flex-col ml-4 mt-4 w-[150px] rounded-lg p-2 bg-gray-900">
                                <h1>Pontos:</h1>
                                <h1>{points}</h1>
                            </div>
                        </div>
                        <div className="flex w-full justify-center">
                            <div className="mt-2 ">
                                <Input value={valueInput} onChange={handleChange} placeholder="R$" style={{width:'320px'}} type="number"/>
                            </div>
                            
                        </div>
                        <div className="flex mt-2 items-end justify-end mr-10 pb-6">
                            <button onClick={Credit} className="w-44 h-10 rounded-lg bg-green-600 hover:bg-green-700 text-black font-bold" >Creditar</button>
                        </div>
                        
                        
                    </div>
                   
                   
                    
                    
                </div>
                
            </div>
        
        </div>
        
    )
}