import { useEffect, useState } from "react";
import HeaderHome from "../components/header-home";
import InputAlbum from "../components/input-album";
import { AlbumModel } from "../models/UserModel";
import { album_api } from "../services/apiServices";
import Modal from "../components/modal";
import toast from "react-hot-toast";
import Header from "../components/header";


export default function Home(){

    const [album, setAlbum] = useState<AlbumModel[]>();
    const [search, setSearch] = useState("");

    const [isOpen, setIsOpen] = useState(false);
    const [image, setImage] = useState("");
    const [artistName, setArtistName] = useState("");
    const [albumName, setAlbumName] = useState("");
    const [date , setDate] = useState("");
    const [valueAlbum, setValueAlbum] = useState(Number);
    const [idSpotify, setIdSpotify] = useState("");

    const openModal = (ImageUrl: string, Artist: string, albumName: string, DateAlbum: string, valueAlbum: number, idSpotify: string) => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    
    useEffect(() => {
        album_api.defaults.headers.common.Authorization = `Basic ${localStorage.getItem('@token')}`;
        console.log(search);

        if(search == ""){
            album_api.get(`/albums/all?searchText="Sertanejo"`).then(resp => {
                setAlbum(resp.data)
                console.log(resp.data)
            });
        }else{
            album_api.get(`/albums/all?searchText="${search}"`).then(resp => {
                setAlbum(resp.data)
                console.log(resp.data)
            });
        }
        }

       

       , [search])

    const hendleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

 function AlbumClick(ImageUrl: string, Artist: string, AlbumName: string, DateAlbum: string, value: number, IdSpotify:string){
     openModal(ImageUrl, Artist, AlbumName, DateAlbum, value, IdSpotify);
     setImage(ImageUrl);
     if(Artist == "Various Artists"){
        Artist = "Vários Artistas"
     }
     setArtistName(Artist);
     setAlbumName(AlbumName);
     setDate(DateAlbum);
     setValueAlbum(value);
     setIdSpotify(IdSpotify);
    
     
 }


 function BuyAlbum(){

    
        const data = JSON.parse(localStorage.getItem('@Auth.Data') || "{}");


        const AlbumData = {
            name: albumName,
            idSpotify: idSpotify,
            artistName: artistName,
            imageUrl: image,
            value: valueAlbum,
            userAccounts: {
                id: data["id"],
                email: data["email"],
                password: data["password"]
            }
        };
        
    
        album_api.defaults.headers.common.Authorization = `Basic ${localStorage.getItem('@token')}`;
        album_api.post("/albums/sale", AlbumData).then(response => {
            toast.success("Compra efetuada com sucesso!");
            closeModal();
        }).catch(error => {
            if(error){
                toast.error("Você já comprou esse álbum!");
            }
        });
    
        console.log(AlbumData);
        

        

        
    
        return AlbumData;
    

    
 }

        return (

    

            <div className=" h-screen bg-cover bg-no-repeat  ">
                
                    <Header/>
               
                <div  className="pl-7 p-20 pt-72 bg-banner banner mb-5 bg-cover bg-no-repeat text-white text-welcome ">
                    <h1 className="text-4xl  font-medium">A história da música <br/> não pode ser esquecida!</h1>
                    <p className="mt-5 success-home font-normal">Sucessos que marcaram o tempo!!!</p>
                </div>
                
            
                <div className="flex items-center justify-center pt-5   flex-col">
                         <div className="relative flex  items-center">
                            <img className="absolute ml-64 w-5 mb-3 " src="./src/assets/vector.png"/>
                            <input  value={search} onChange={hendleInputChange} className="p-1 pr-10 bg-dark text-white rounded-md ring-1 ring-zinc-300 mb-3 w-72" />
                     </div>
                        
                </div> 

                
                
    
                {search === "" ? (


                        <div className=" pt-7    relative overflow-hidden pb-20 ">
                              
                        <h1 className="  pl-20 text-trends font-bold">Trends</h1>  
                                <div className="ml-20 mr-20 overflow-hidden h-full">
                                <div className=" carousel absolute left-0 flex items-center w-full mt-5">
                                {album?.map((album, i) => {
                                                    return(
                                                       <div className="pr-8" >
                                                            <div  onClick={() => AlbumClick(album.images[0].url, album.artists[0].name, album.name, album.releaseDate, album.value, album.id)}  style={{backgroundImage: `url(${album.images[0].url})`, width: '200px', height: '200px' }} className="card  bg-cover  bg-no-repeat flex items-center text-right justify-center h-full cursor-pointer  ">
                                                            <div className="flex items-end text-right w-full rounded-2xl h-full justify-center items-center backdrop-brightness-50 p-6 cursor-pointer">
                                                                <h1 className="text-white font-bold mb-4 animation">R${album.value}</h1>
                                                        </div>
                                                                                                
                                                            </div>
                                                       </div>
                                                    
                                                  
                                                        
                                                    
                                                    
                                                    )
                                                })}
                                            
                                </div>
                                </div>
                                
                                               
                        </div> 
                    ) : (
                        <section className="flex flex-wrap justify-center pt-10 gap-4 pb-28">
                            
                        { album?.map((album, i) => (
                        <div onClick={() => AlbumClick(album.images[0].url, album.artists[0].name, album.name, album.releaseDate, album.value, album.id)} key={i} style={{'--bg-fundo': `url(${album.images[0].url})`} as React.CSSProperties} className="bg-[image:var(--bg-fundo)] bg-cover bg-no-repeat w-60 h-[245px] rounded-md">
                          <div className="flex items-end text-right h-full justify-center items-center backdrop-brightness-50 p-6 cursor-pointer">
                                <h1 className="text-white font-bold mb-4 animation">R${album.value}</h1>
                          </div>
                        </div>
                      ))}
                        </section>
                        
                    )}

                    
                    <Modal BuyAlbum={BuyAlbum} value={valueAlbum} dateAlbum={date}  name={albumName} imageUrl={image}  artistName={artistName} isOpen={isOpen} closeModal={closeModal}/>
                
                   
                   
               
            </div>  
         
            
           
        )

        
    }

    
