import React from 'react';
import './App.css';
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { MyPage } from "./components/markup/MyPage/MyPage";
import { Authorisation } from "./components/Authorisation/Authorisation";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";


export const App = () => {
    const history = useHistory()

    if(!useSelector((state: RootState)=> state.common.isAuthorised)) {
        history.push('/login')
    }
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