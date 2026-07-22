import type { ReactNode } from "react"
import {  useState } from "react"
import { AuthContext } from "./Authcontext"
interface AuthContextProviderProps {
    children: ReactNode
}

function AuthContextProvider({children}:AuthContextProviderProps) {
    const[user,setUser] = useState<string | null>(null);
    const login  = (userName:string)=>setUser(userName);
    const logout  = ()=>  setUser(null);
  return (
   
        <AuthContext.Provider value={{user,login,logout}}>

      {children}
        </AuthContext.Provider>
    
  )
}

export default AuthContextProvider
