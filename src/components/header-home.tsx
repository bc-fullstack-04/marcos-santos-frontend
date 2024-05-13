import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"
import { useEffect, useState } from "react";
import OutsideClickHandler from 'react-outside-click-handler';
import Links from "./Links";


export default function Header(){

    const { logout } = useAuth();

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark");

    const [isChecked, setIsChecked] = useState(localStorage.getItem("theme") === "light");

    const [isOpen, setIsOpen] = useState(false);

    const[menuIsOpen, setMenuIsOpen] = useState(false);

    const toggleNavbar = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

 

    useEffect(() => {
        localStorage.setItem("theme", theme);
        localStorage.setItem("isChecked", isChecked);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [])


    const hendleToggle = (e) => {
       const newTheme = e.target.checked ? "light" : "dark";
       setIsChecked(e.target.checked);
       setTheme(newTheme);
       localStorage.setItem("theme", newTheme); 
       document.querySelector("html").setAttribute("data-theme", newTheme);
       console.log(e.target.checked);
    }

    const closeDropdown = (e) => {
        setIsOpen(false);
    }
   
    return (
        <OutsideClickHandler onOutsideClick={closeDropdown}>
        <div className=" w-full  bg-opacity-35 bg-white header ">
            
        <div className="container mx-auto flex flex-row items-center h-16  space-x-2">
            <div className="pl-10">
            <Link to={'/home'}> <img src ="src/assets/soon.png"/> </Link>
                
            </div>
            <div className="">
            <Link to={'/home'}><p className="boot font-semibold bt-login">BootPlay</p></Link>
            </div>
            <div className="flex  justify-end container space-x-10">
                <div className="links flex flex-row space-x-10">
                    <Links/>
                </div>
               
                <div className="">
                    <img  onClick={toggleDropdown} className="avatar  w-7 cursor-pointer" src="./src/assets/avatar.png"/>
                    {isOpen && (
                         <div className="absolute right mt-2 bg-white border border-gray-300 rounded shadow-md">
                         <ul>
                            <Link to={'/home'}> <li className="px-4 py-2 cursor-pointer border-b hover:bg-gray-100">Home</li></Link>
                             <li onClick={logout} className="px-4 py-2 cursor-pointer hover:bg-gray-100">Sair</li>
                         </ul>
                     </div>
                    )}
                   
                </div>
                <div>
                    <label className="swap swap-rotate">
                        
                       
                        <input type="checkbox" checked={isChecked} onChange={hendleToggle} />
                        
                    
                        
                    
                       
                        
                        <img src = " ./src/assets/sol.png"  className="swap-on w-8"/>

                         <svg className="swap-off fill-current w-7 theme rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>    

                    </label>
                </div>
                <div className="md:hidden">
                    <img onClick={toggleNavbar} className="w-7 mr-10" src="./src/assets/menu.png" />
                </div>
                
                
            </div>
           
        </div>
        {menuIsOpen && (
                    <div className="flex justify-center space-x-3 items-center basis-full">
                        <Links/>
                    </div>
                )}
    </div>
    </OutsideClickHandler>
    )
}