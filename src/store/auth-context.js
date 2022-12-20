
import React from "react"
const AuthContext=React.createContext({
    token:'',
    isLoggedIn:false,
    loginHandle:(auth)=>{},
    logoutHandle:()=>{}
})

export default AuthContext