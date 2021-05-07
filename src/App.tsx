import React, { useEffect } from 'react';
import './App.css';
import { Redirect, Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import { MyPage } from "./components/markup/MyPage/MyPage";
import { Authorisation } from "./components/Authorisation/Authorisation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { commonActions } from "./redux/forCommon/forCommonActions";
import { logInWithToken } from "./redux/forCommon/forCommonThunks";
import {OneBanquetPDF} from "./components/PDF/OneBanquetPDF/OneBanquetPDF";
import {OneDayPDF} from "./components/PDF/OneDayPDF/OneDayPDF";

export const App = () => {
    const api_token = localStorage.getItem("api_token")
    const tokenSuccess = useSelector((state:RootState) => state.common.authByToken)
    const needRedirect = useSelector((state: RootState) => state.common.needRedirect)
    const d = useDispatch()
    const history = useHistory()
    const isAuth = useSelector((state: RootState) => state.common.isAuthorised)
    const userInfo = (useSelector((state: RootState) => state.common.userInfo))

    useEffect(() => {
        if (tokenSuccess) {
            if(isAuth === false){
                d(commonActions.needRedirectToggle(true))
            }
            d(commonActions.authToggle(true))
        }
    }, [tokenSuccess])


    useEffect(() => {
        if (isAuth === false) {
            history.push('/login')
            d(commonActions.needRedirectToggle(true))
        } else {
            if(isAuth ===true)
                if((needRedirect === true) || (needRedirect === null)) {
                    history.push('/content')
                    d(commonActions.needRedirectToggle(false))
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
                <Route path='/OneBanquetPdf' render={() => <OneBanquetPDF/>}/>
                <Route path='/OneDayPdf' render={() => <OneDayPDF/>}/>
                <Route path='*' render={() => <div>Error, empty link</div>}/>
            </Switch>

        </div>
    );
}
