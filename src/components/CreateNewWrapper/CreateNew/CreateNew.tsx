import React, { useState } from 'react'
import { CreateNewNavBar } from "./CreateNewNavBar";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { CreateNewMenus } from "../CreateNewMenus/CreateNewMenus";
import { CreateNewServices } from "../CreateNewServices/CreateNewServices";
import { CreateNewTickets } from "../CreateNewTickets/CreateNewTickets";
import { BlankHeader } from "../BlankHeader/BlankHeader";
import s from './CreateNewNavBar.module.css'
import { createPost } from "../../../redux/formPostObject/createObjThunks";
import { useDispatch } from "react-redux";

export const CreateNew = () => {
    let {url} = useRouteMatch()
    const d = useDispatch()
    const [editMode, setEditMode] = useState(true)
    const saveB = () => {
        setEditMode(false)
    }
    const editB = () => {
        setEditMode(true)
    }
    const submitB = () => {
        d(createPost())
    }
    return <>
        {editMode && <div>
            <BlankHeader/>
            <CreateNewNavBar/>
            <Switch>
                <Redirect exact from={url} to={`${url}/menus`}/>
                <Route path={`${url}/menus`} render={() => <CreateNewMenus/>}/>
                <Route path={`${url}/tickets`} render={() => <CreateNewTickets/>}/>
                <Route path={`${url}/entertainments`} render={() => <CreateNewServices/>}/>
            </Switch>
            <div className={s.toRightSide}>
                <button className={s.buttonGreen} onClick={saveB}>Save</button>
            </div>
        </div>}
        {!editMode && <div>
            <BlankHeader/>
            <CreateNewNavBar/>
            <Switch>
                <Redirect exact from={url} to={`${url}/menus`}/>
                <Route path={`${url}/menus`} render={() => <CreateNewMenus/>}/>
                <Route path={`${url}/tickets`} render={() => <CreateNewTickets/>}/>
                <Route path={`${url}/entertainments`} render={() => <CreateNewServices/>}/>
            </Switch>
            <div className={s.toRightSide}>
                <button className={s.buttonBlack} onClick={editB}>Edit</button>
                <button className={s.buttonGreen} onClick={submitB}>Submit</button>
            </div>
        </div>}
    </>
}