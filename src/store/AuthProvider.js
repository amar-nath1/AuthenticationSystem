

import { useState } from "react";
import AuthContext from "./auth-context";

const AuthProvider=(props)=>{

const [authToken,setAuthToken]=useState(null)
const [email, setEmail]=useState(null)

const isLoggedIn=!!authToken

const loginHandle=(token,email)=>{

    setAuthToken(token)
    setEmail(email)
}

const logoutHandle=()=>{
    setAuthToken(null)
}

    const authCtxValue={
        email:email,
        token:authToken,
        isLoggedIn:isLoggedIn,
        loginHandle:loginHandle,
        logoutHandle:logoutHandle
    }

    return (

        <AuthContext.Provider value={authCtxValue}>{props.children}</AuthContext.Provider>
    )

}

export default AuthProvider