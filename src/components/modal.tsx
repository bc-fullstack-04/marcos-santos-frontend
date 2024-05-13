import { format } from "date-fns";  

interface Props{
    isOpen: boolean;
    closeModal: () => void
    name: string;
    idSpotify: string;
    artistName: string;
    imageUrl: string;
    value: number;
    dateAlbum: string;
    BuyAlbum: () => void;

}
export default function Modal(props: Props){
    
   if(!props.isOpen) return null;

   
         const DataFormated = format(new Date(props.dateAlbum), 'dd/MM/yyyy');
        
         
   

    return (
        
        <div   className="h-screen w-screen fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className=" w-[500px] bg-white rounded-2xl h-auto flex flex-row modalMobile" >
                 <div  className=" rounded-s-2xl">
                        <img className=" h-full rounded-s-2xl imageMobile" src={props.imageUrl}/>
                 </div>
                 <div className=" h-auto w-auto pr-2">
                        <div className="bg-white  w-[250px] rounded-r-2xl items-baseline flex flex-row-reverse close">
                            <img onClick={props.closeModal}  className="w-4 pt-2 mr-2 hover: cursor-pointer" src="./src/assets/close.png"/>
                        </div>
                        <div className="flex items-center justify-center bg-white artist">
                            <h1 className="text-black font-bold" style={{fontSize:'20px'}}>{props.artistName}</h1>
                        </div>
                        <div className="pl-5 mt-4 bg-white pb-5 text-sm">
                            <b>Nome do Album:</b>
                            <h1 className="mb-1">{props.name}</h1>
                            <b>Lançamento:</b>  
                            <h1 className="mb-1">{DataFormated}</h1>
                            <b>Valor:</b>  
                            <h1>R${props.value}</h1>
                        </div>
                        <div className="flex items-center justify-center mb-4">
                            <button onClick={props.BuyAlbum} className="buy w-44 h-9 rounded-full text-black font-bold bg-yellow-500">Comprar</button>
                        </div>
                       
                 </div>
                 <div></div>
                 
            </div>
        </div>
        
    )
}