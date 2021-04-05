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
    const {url} = useRouteMatch()
    const [cookies, setCookie, removeCookie] = useCookies(["authInfo"]);
    const d = useDispatch()
    const history = useHistory()
    const isAuth = useSelector((state: RootState) => state.common.isAuthorised)
    const userInfo = (useSelector((state: RootState) => state.common.userInfo))
    const initAuth = () => {
        if (cookies.authInfo)
            d(commonActions.authToggle(true))
        else
            d(commonActions.authToggle(false))
    }
    console.log(cookies)
    useEffect(() => {
        initAuth()
    }, [])
    useEffect(() => {
        if (!isAuth) {
            history.push('/login')
        } else {

            if(url.includes("/login") || url.includes("/")) {
                history.push('/content')
            }
            if (userInfo?.api_token)
                setCookie('authInfo', userInfo.api_token, {
                    maxAge: 360000 * 24 * 30,
                    path:'/'
                })
        }
    }, [isAuth])
    useEffect(() => {
        initAuth()
    },[cookies])

    return (
        <div className="App">

            <Switch>
                <Redirect exact from="/" to="/content"/>
                <Route path='/login' render={() => <Authorisation/>}/>
                <Route path='/content' render={() => <MyPage removeCookie={removeCookie}/>}/>
                <Route path='*' render={() => <div>Error, empty link</div>}/>
            </Switch>
        </div>
    );
}