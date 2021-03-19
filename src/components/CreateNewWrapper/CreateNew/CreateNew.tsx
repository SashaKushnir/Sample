import React from 'react'
import { CreateNewNavBar } from "./CreateNewNavBar";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { CreateNewMenus } from "../CreateNewMenus/CreateNewMenus";
import { CreateNewServices } from "../CreateNewServices/CreateNewServices";
import { useSelector } from "react-redux";
import { selectMenuKitchen, selectTickets } from "../../../selectors/selectCreateNew";
import { MenuItemComponent } from "../CreateNewMenus/MenuList/MenuItemComponent";
import { CreateNewTickets } from "../CreateNewTickets/CreateNewTickets";

export const CreateNew = () => {
    let {url} = useRouteMatch()
        const menus = useSelector(selectMenuKitchen)
    return <>
        <CreateNewNavBar/>
        <Switch>
            <Redirect exact from={url} to={`${url}/menus`}/>
            <Route path={`${url}/menus`} render={() => <CreateNewMenus menus = {menus}/>}/>
            <Route path={`${url}/tickets`} render={() => <CreateNewTickets />}/>
            <Route path={`${url}/entertainments`} render={() => <CreateNewServices/>}/>
        </Switch>
    </>
}