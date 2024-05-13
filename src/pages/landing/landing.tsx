import React, { useEffect, useState } from "react"
import Card from "../../components/cards"
import { api_integration } from "../../services/apiServices";
import { AlbumModel } from "../../models/albumModel";

export default function Albums(){

    const [album, setAlbum] = useState<AlbumModel[]>();
    const [search, setSearch] = useState<string>();
    
 

    useEffect(() => {
        api_integration.defaults.headers.common.Authorization = "Basic dGVzdGU6JDJhJDEwJElacWxZQ1ZwejRGU250Q1lNYWd3dU95U2o3WWpyWWR4UDBCN1Z4bkNKSDdkQjFDTzhVZnJX" 
        api_integration.get("/api/albums/all?album=" + search).then(resp => {
           console.log(resp.data); 
           setAlbum(resp.data);
        })
        
    }, [search]);

    function hendleLink(url: string){
       window.open(url, '_blank');
    }


    const hendleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    return(
        <main className="   ">
                 <input type="text" value={search} onChange={hendleInputChange}/>
                {album?.map((album, i) => {
                    return(
                        
                       
                        <div className="bg-slate-800 w-36 h-36  ">
                            <div onClick={() => hendleLink(album.externalUrls.externalUrls.spotify)} >
                                <img src={album.images[0].url}/>
                            </div>
                            
                        </div>
                    
                    )
                })}
             
        </main>
    )
  
}