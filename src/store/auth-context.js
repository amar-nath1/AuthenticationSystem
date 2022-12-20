
import React from "react"
const AuthContext=React.createContext({
    email:'',
    token:'',
    isLoggedIn:false,
    loginHandle:(auth)=>{},
    logoutHandle:()=>{}
})

export default AuthContext