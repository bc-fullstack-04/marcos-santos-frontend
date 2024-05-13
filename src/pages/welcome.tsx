import ButtonSubscribe from "../components/button-subscribe";
import HeaderWelcome from "../components/header-welcome";

//interface Props{
  //  style
//}

export default function Welcome(){
    return (
            
        <div className=" bg-fundo bg-cover  bg-no-repeat h-screen">
            <div className="absolute inset-0 bg-black bg-opacity-10 h-auto ">

            <HeaderWelcome/>
                
                <div className=" mx-auto container">
                    <h1 className="pl-10 mt-40 text-white text-welcome text-history font-medium">A história da música <br/> não pode ser <br/> esquecida!</h1>
                </div>
                <div className=" mx-auto container apresentation mt-4">
                    <p className="pl-10 text-white">Crie já sua conta e curta os sucessos que <br/> marcaram os tempos no Vinil.</p>
                </div>
                
                <div className=" mx-auto container pl-10 mt-5">
                    <ButtonSubscribe style={{height: "50px", width: "250px", fontWeight: "550"}}/>
                </div>
                
            </div> 
            
        </div>
    )
}