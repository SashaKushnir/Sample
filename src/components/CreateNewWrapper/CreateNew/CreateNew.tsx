import React from 'react'
import { CreateNewNavBar } from "./CreateNewNavBar";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { CreateNewMenus } from "../CreateNewMenus/CreateNewMenus";

export const CreateNew = () => {
    let {url} = useRouteMatch()
    return <>
        <CreateNewNavBar/>
        <Switch>
            <Redirect exact from={url} to={`${url}/menus`}/>
            <Route path={`${url}/menus`} render={() => <CreateNewMenus/>}/>
            <Route path={`${url}/tickets`} render={() => <div></div>}/>
            <Route path={`${url}/entertainments`} render={() => <div></div>}/>
        </Switch>
    </>
}