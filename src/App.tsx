import React, { useEffect } from 'react';
import './App.css';
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { MyPage } from "./components/markup/MyPage/MyPage";
import { Authorisation } from "./components/Authorisation/Authorisation";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

export const App = () => {
    const history = useHistory()
    const isAuth = useSelector((state: RootState)=> state.common.isAuthorised)
    console.log(useSelector((state: RootState)=> state.common.userInfo))
    useEffect(() => {
        if(!isAuth)
            history.push('/login')
        else history.push('/content')
    },[isAuth])
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