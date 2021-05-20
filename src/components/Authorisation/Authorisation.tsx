import React, {useEffect} from 'react'
import {LoginForm} from "./LoginForm";
import s from './Authorisation.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {FetchingComponent} from "../../common/compon/FetchingComponent/FetchingComponent";
import {useHistory} from "react-router-dom";
import {logInWithToken} from "../../redux/forCommon/forCommonThunks";

export const Authorisation = () => {
    const d = useDispatch()
    const token = localStorage.getItem("api_token")
    const history = useHistory()
    const tokenSuccess = useSelector((state: RootState) => state.common.authByToken)
    useEffect(() => {
            if(token){
                d(logInWithToken(token))
            }
    }, [])
    if (tokenSuccess) {
        history.push('/')
    }
    if (useSelector((state: RootState) => state.common.isFetching))
        return <FetchingComponent/>
    return <div className={s.wrap}>
        <h1 className={s.headerText}>Вхід</h1>
        <LoginForm/>
    </div>
}

