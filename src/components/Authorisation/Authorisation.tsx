import React from 'react'
import {LoginForm} from "./LoginForm";
import s from './Authorisation.module.css'
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { FetchingComponent } from "../../common/compon/FetchingComponent/FetchingComponent";
import { useHistory } from "react-router-dom";

export const Authorisation = () => {
    const history = useHistory()
    if(localStorage.getItem("api_token")){
       history.push('/content')
    }

    if (useSelector((state: RootState)=> state.common.isFetching))
        return <FetchingComponent/>
        return <div className={s.wrap}>
            <h1 className={s.headerText}>Log in</h1>
            <LoginForm/>
        </div>
}

