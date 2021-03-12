import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { MyPage } from "./components/MyPage/MyPage";
import { Authorisation } from "./Authorisation/Authorisation";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Redirect exact from="/" to="/content"/>
                    <Route path='/login' render={() => <Authorisation/>}/>
                    <Route path='/content' render={() => <MyPage/>}/>
                    <Route path='*' render={() => <div>Error, empty link</div>}/>
                </Switch>

            </div>
        </BrowserRouter>
    );
}

export default App;
