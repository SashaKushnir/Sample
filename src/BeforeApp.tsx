import React, { useEffect } from "react";
import { App } from "./App";
import { useDispatch } from "react-redux";
import { logInWithToken } from "./redux/forCommon/forCommonThunks";

export const BeforeApp = () => {
    // const d = useDispatch()
    // const api_token = localStorage.getItem("api_token")
    // useEffect(() => {
    //     if(api_token)
    //       d(logInWithToken(api_token as string))
    // },[])
    return <App/>
}