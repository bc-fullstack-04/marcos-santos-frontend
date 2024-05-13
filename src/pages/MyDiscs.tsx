import { useEffect, useState } from "react";
import HeaderHome from "../components/header-home";
import { album_api } from "../services/apiServices";
import '../global.css';

export default function MyDiscs(){
    
    const [albums, setAlbums] = useState([]);

    const [investment, setInvestment] = useState(Number);

    const[qtdAlbums, setQtdAlbums] = useState(Number);
       

    useEffect(() => {
        album_api.defaults.headers.common.Authorization = `Basic ${localStorage.getItem('@token')}`;
        album_api.get('/albums/my-collection').then(response => {
            const albums = response.data
            console.log(albums)
            setAlbums(albums)

            const value = albums.reduce((acc, album) => acc + album.value, 0);
            const formated = value.toFixed(2).replace('.', '.');


            setInvestment(formated);

            const qtd = albums.length;
            setQtdAlbums(qtd);
        
        });

        
     
        
    }, []);



 
  


    return(
        <div className=" h-screen ">
            <HeaderHome/>
            <div className="pt-44 pl-12 MyDiscs">
                <h1 className=" font-medium" style={{fontSize: '35px'}}>Meus Discos</h1>
            </div>
            <div className="pl-12 mt-8 flex invest ">
                <div className="w-60 p-3 rounded-lg flex bg-white" style={{border: '1px solid #000'}}>
                    <img className="w-10 h-10" src="./src/assets/video.png"/>
                    <h1 className="ml-3 text-black font-bold">Total de Albuns   <br/> <h1 className="font-normal" style={{fontSize: '20px'}}>{qtdAlbums}</h1></h1>
                </div>
                <div className="w-60 p-3 rounded-lg h-full bg-white flex ml-5" style={{border: '1px solid #000'}}>
                    <img className="w-10 h-10" src="./src/assets/real.png"/>
                    <h1 className="ml-3 text-black font-bold">Valor Investido   <br/> <h1 className="font-normal" style={{fontSize: '20px'}}>R$ {investment}</h1></h1>
                </div>
                
            </div >
            <div className="pl-20 mt-8 flex flex-col investMobile ">
                <div className="w-60 p-3 rounded-lg flex bg-white"  style={{border: '1px solid #000'}}>
                    <img className="w-10 h-10" src="./src/assets/video.png"/>
                    <h1 className="ml-3 text-black font-bold">Total de Albuns   <br/> <h1 className="font-normal" style={{fontSize: '20px'}}>{qtdAlbums}</h1></h1>
                </div>
                <div className="w-60 p-3 rounded-lg h-full mt-2 bg-white flex "  style={{border: '1px solid #000'}}>
                    <img className="w-10 h-10" src="./src/assets/real.png"/>
                    <h1 className="ml-3 text-black font-bold">Valor Investido   <br/> <h1 className="font-normal" style={{fontSize: '20px'}}>R$ {investment}</h1></h1>
                </div>
                
            </div >
                
                    <div className="mt-10 flex flex-wrap pl-10 pb-10 gap-4 albumsMobile">
                        { albums?.map((album, i) => (
                                    <div key={i} style={{backgroundImage:`url(${album.imageUrl})`}} className="bg-cover  bg-no-repeat w-60 h-[245px]   rounded-md">
                                        
                                    </div>
                                ))}
                     </div>
            
                               
           
            </div>
    )
}