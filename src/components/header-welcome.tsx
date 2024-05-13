import { useState } from "react";
import ButtonLogin from "./button-login";
import ButtonSubscribe from "./button-subscribe";


export default function HeaderWelcome(){

    const[menuIsOpen, setMenuIsOpen] = useState(false);

    const toggleNavbar = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    const closeDropdown = (e) => {
        setIsOpen(false);
    }

    return(
        <div className="fixed w-full bg-opacity-35 bg-white ">
            
            <div className="container mx-auto flex flex-row items-center h-16  space-x-2">
                <div className="pl-10">
                    <img src ="src/assets/soon.png"/>
                    
                </div>
                <div className="">
                   <p className="boot text-white font-semibold bt-login">BootPlay</p>
                </div>
                
               
                <div className="md:hidden menu w-full flex items-end pr-16 ">
                    <img onClick={toggleNavbar} className="w-7 mr-10" src="./src/assets/menu.png" />
                </div>
                <div className="flex  justify-end container navButons space-x-4">
                    <div>   
                        <ButtonLogin children="Entrar"/>
                    
                    </div>
                    <div className="">
                        <ButtonSubscribe/>
                    </div>
                </div>
            </div>
            
            {menuIsOpen && (
                    <div className="flex flex-col justify-center  items-center basis-full">
                        <div className="mb-2">   
                        <ButtonLogin children="Entrar"/>
                    
                    </div>
                    <div className="mb-4">
                        <ButtonSubscribe/>
                    </div>
                    </div>
                )}
        </div>
    )
}