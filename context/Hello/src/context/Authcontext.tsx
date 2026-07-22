import { createContext } from "react";
interface AuthContextType {
    user : string | null
    login : (name:string)  => void ;
    logout : ()=> void ;
}
export const AuthContext = createContext<AuthContextType | null>(null);
