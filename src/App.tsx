import React, { useEffect } from 'react';
import './App.css';
import { Redirect, Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import { MyPage } from "./components/markup/MyPage/MyPage";
import { Authorisation } from "./components/Authorisation/Authorisation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { commonActions } from "./redux/forCommon/forCommonActions";
import { useCookies } from "react-cookie";

export const App = () => {
    const api_token = localStorage.getItem("api_token")
    const {url} = useRouteMatch()
    const needRedirect = useSelector((state: RootState) => state.common.needRedirect)
    const d = useDispatch()
    const history = useHistory()
    const isAuth = useSelector((state: RootState) => state.common.isAuthorised)
    const userInfo = (useSelector((state: RootState) => state.common.userInfo))
    const initAuth = () => {
        if (localStorage.getItem("api_token")) {
            if(!isAuth){
                d(commonActions.needRedirectToggle(true))
            }
            d(commonActions.authToggle(true))
        }
        else {
            d(commonActions.authToggle(false))
        }
    }
    useEffect(() => {
        initAuth()
    }, [])
    useEffect(() => {
        if (api_token) {
            d(commonActions.authToggle(true))
            d(commonActions.needRedirectToggle(true))
        }
        else {
            d(commonActions.authToggle(false))
        }
    },[api_token])

    useEffect(() => {
        if (isAuth === false) {
            history.push('/login')
            d(commonActions.needRedirectToggle(true))
        } else {
            if(isAuth ===true)
                if((needRedirect === true) || (needRedirect === null)) {
                    history.push('/content')

                }
            if (userInfo?.api_token)
              localStorage.setItem("api_token", userInfo.api_token)
            d(commonActions.needRedirectToggle(false))
        }
    }, [isAuth, needRedirect])


    return (
        <div className="App">
            <Switch>
                <Redirect exact from="/" to="/content"/>
                <Route path='/login' render={() => <Authorisation/>}/>
                <Route path='/content' render={() => <MyPage/>}/>
                <Route path='*' render={() => <div>Error, empty link</div>}/>
            </Switch>
        </div>
    );
}