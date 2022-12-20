

import { useState } from "react";
import AuthContext from "./auth-context";

const AuthProvider=(props)=>{

const [authToken,setAuthToken]=useState(null)

const isLoggedIn=!!authToken

const loginHandle=(token)=>{

    setAuthToken(token)
}

const logoutHandle=()=>{
    setAuthToken(null)
}

    const authCtxValue={
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