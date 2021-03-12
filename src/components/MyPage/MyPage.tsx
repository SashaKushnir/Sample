import React from 'react'
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import s from './Content.module.css'
import { CreateNew } from "../CreateNew/CreateNew";
import { Route, Switch } from "react-router-dom";

export const MyPage = () => {
    return <div className={s.wrap}>
        <div className={s.content}>
            <Header/>
            <Switch>
                <Route path='/content/new' render={() => <CreateNew/>}/>
            </Switch>
        </div>
        <div className={s.footer}>
            <Footer/>
        </div>

    </div>
}