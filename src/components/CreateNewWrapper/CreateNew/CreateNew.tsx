import React from 'react'
import { CreateNewNavBar } from "./CreateNewNavBar";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { CreateNewMenus } from "../CreateNewMenus/CreateNewMenus";
import { CreateNewTickets } from "../CreateNewTickets/CreateNewTickets";
import { CreateNewServices } from "../CreateNewServices/CreateNewServices";

export const CreateNew = () => {
    let {url} = useRouteMatch()
    return <>
        <CreateNewNavBar/>
        <Switch>
            <Redirect exact from={url} to={`${url}/menus`}/>
            <Route path={`${url}/menus`} render={() => <CreateNewMenus/>}/>
            <Route path={`${url}/tickets`} render={() => <CreateNewTickets/>}/>
            <Route path={`${url}/entertainments`} render={() => <CreateNewServices/>}/>
        </Switch>
    </>
}