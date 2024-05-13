import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { album_api, user_api } from "../services/apiServices";
import { UserModel } from "../models/UserModel";
import { Navigate } from "react-router-dom";

interface AuthContextModel extends UserModel{
    login: (email:string, password:string) => Promise<string | void>;
    isAutenticated: boolean;
    logout: () => void;
    
 
}

const AuthContext = createContext({} as AuthContextModel);

interface Props{
    children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({children}) =>{

    const [userData, setUserData] = useState<UserModel>();

    useEffect(() => {
        const data: UserModel = JSON.parse(localStorage.getItem('@Auth.Data') || "{}");

        if(data.id){
            setUserData(data);
          
        }


    }, []);

    const login = useCallback(async (email: string, password: string) => {
    
    const response  = await user_api.post('/users/auth', {email, password}); 


        if(response instanceof Error) {
            return response.message;
       }

       localStorage.setItem('@token',response.data.token);
       
       user_api.defaults.headers.common.Authorization = `Basic ${response.data.token}`;

       album_api.defaults.headers.common.Authorization = `Basic ${response.data.token}`;

    

        const respUserInfo = await user_api.get(`/users/${response.data.id}`, );

        
        if(respUserInfo instanceof Error) {
            return respUserInfo.message;
       }

       
       
       setUserData(respUserInfo.data)

       localStorage.setItem('@Auth.Data', JSON.stringify(respUserInfo.data));

       setUserData(respUserInfo.data);

    }, []);


    const logout = useCallback(() => {
        localStorage.clear();
        setUserData(undefined);
        return <Navigate to='/' />
    }, []);

    return(
        <AuthContext.Provider value={{ isAutenticated: !!userData, ...userData, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext);