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
                <Route path='/content/history' render={() => <div>history</div>}/>
                <Route path='/content/editors' render={() => <div>editors</div>}/>
                <Route path='/content/reports' render={() => <div>reports</div>}/>
                <Route path='/content/support' render={() => <div>support</div>}/>
                <Route path='/content/new' render={() => <div>block</div>}/>
                <Route path='/content/block' render={() => <div>block</div>}/>
                <Route path='/content/authors' render={() => <div>authors</div>}/>
            </Switch>

        </div>
        <div className={s.footer}>
            <Footer/>
        </div>

    </div>
}