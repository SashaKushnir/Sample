import React, {useEffect, useState} from 'react'
import {CreateNewNavBar} from "./CreateNewNavBar";
import {Redirect, Route, Switch, useRouteMatch} from "react-router-dom";
import {CreateNewMenus} from "../CreateNewMenus/CreateNewMenus";
import {CreateNewServices} from "../CreateNewServices/CreateNewServices";
import {CreateNewTickets} from "../CreateNewTickets/CreateNewTickets";
import {BlankHeader} from "../BlankHeader/BlankHeader";
import s from './CreateNewNavBar.module.css'
import {createPost, postNewBanknote} from "../../../redux/formPostObject/createObjThunks";
import {useDispatch, useSelector} from "react-redux";
import {FetchingComponent} from "../../../common/compon/FetchingComponent/FetchingComponent";
import {RootState} from "../../../redux/store";
import {OrderItems} from "../../OrderInfo/OrderItems";
import {commonActions} from "../../../redux/forCommon/forCommonActions";

export const CreateNew = () => {
    const token = localStorage.getItem("api_token")
    const postBObj = useSelector((state: RootState) => state.postBanquet.postBanquetObj)
    const fullEmptyAmount = useSelector((state: RootState) => state.common.fullEmptyAmount)
    let {url} = useRouteMatch()
    const d = useDispatch()
    const [editMode, setEditMode] = useState(true)
    useEffect(() => {
        if (fullEmptyAmount === false)
            setEditMode(false)
        else setEditMode(true)
    }, [fullEmptyAmount])
    useEffect(() => {

    }, [])
    const saveB = () => {
        d(createPost())

    }
    const editB = () => {
        setEditMode(true)
        d(commonActions.needAmountToggle(true))
    }
    const submitB = () => {
        if (postBObj && token)
            d(postNewBanknote(postBObj, token))
    }
    if (useSelector((state: RootState) => state.common.isFetching))
        return <FetchingComponent/>

    return <>
        {editMode && <div>
            <BlankHeader isEdit={editMode}/>
            <CreateNewNavBar/>
            <Switch>
                <Redirect exact from={url} to={`${url}/menus`}/>
                <Route path={`${url}/menus`} render={() => <CreateNewMenus/>}/>
                <Route path={`${url}/tickets`} render={() => <CreateNewTickets/>}/>
                <Route path={`${url}/entertainments`} render={() => <CreateNewServices/>}/>
            </Switch>

            <div className={s.toRightSide}>
                {fullEmptyAmount && <div className={s.amountMessage}>
                    Some fields are empty!
                </div>}
                <button className={s.buttonGreen} onClick={saveB}>Save</button>
            </div>
        </div>}
        {!editMode && <div>
            <BlankHeader isEdit={editMode}/>
            <OrderItems/>
            <div className={s.toRightSide}>
                <button className={s.buttonBlack} onClick={editB}>Edit</button>
                <button className={s.buttonGreen} onClick={submitB}>Submit</button>
            </div>
        </div>}
    </>
}
