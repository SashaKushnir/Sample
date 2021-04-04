import React from 'react'
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import s from './Content.module.css'
import {Redirect, Route, Switch, useRouteMatch} from "react-router-dom";
import {CreateNew} from "../../CreateNewWrapper/CreateNew/CreateNew";
import {Register} from "../../Registration/Register";

export const MyPage: React.FC<any> = ({removeCookie}) => {
    let {url} = useRouteMatch()
    return <div className={s.wrap}>
        <div className={s.content}>
            <Header removeCookie={removeCookie}/>
            <Switch>
                <Redirect exact from={`${url}`} to={`${url}/history`}/>
                <Route path={`${url}/new`} render={() => <CreateNew/>}/>
                <Route path={`${url}/history`} render={() => <div>history</div>}/>
                <Route path={`${url}/editors`} render={() => <div>editors</div>}/>
                <Route path={`${url}/reports`} render={() => <div>reports</div>}/>
                <Route path={`${url}/support`} render={() => <div><Register/></div>}/>
                <Route path={`${url}/block`} render={() => <div>block</div>}/>
                <Route path={`${url}/block`} render={() => <div>block</div>}/>
                <Route path={`${url}/authors`} render={() => <div>authors</div>}/>
            </Switch>
        </div>
        <div className={s.footer}>
            <Footer/>
        </div>

    </div>
}
