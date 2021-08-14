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
import {updateHistoryT} from "../../../redux/history/newHistoryThunk";
import {getListOfSpaces} from "../../../redux/banquetInfo/banquetInfoT";
import {setBanqueStateT} from "../../../redux/BanquetState/BanquetStatesT";
import {banquetActions} from "../../../redux/banquetInfo/banquetInfoActions";
import {useHistory} from "react-router-dom";
import { pathPrefix } from '../../../App';

type PropsType = {
    CusMenuSwitch: any
}

export const CreateNew: React.FC<PropsType> = (props) => {
    const token = localStorage.getItem("api_token")
    const postBObj = useSelector((state: RootState) => state.postBanquet.postBanquetObj)
    const fullEmptyAmount = useSelector((state: RootState) => state.common.fullEmptyAmount)
    const state = useSelector((state: RootState) => state.banquet.state)
    const spaces = useSelector((state: RootState) => state.banquet.basicSpaces)
    const isFetching = useSelector((state:RootState) => state.common.isMenusFetching)

    let {url} = useRouteMatch()
    const d = useDispatch()
    const [editMode, setEditMode] = useState(true)
    useEffect(() => {
        if (fullEmptyAmount === false) {
            setEditMode(false)
        } else {
            setEditMode(true)
        }
    }, [fullEmptyAmount])
    useEffect(() => {
        setEditMode(true)
        if (!spaces)
            d(getListOfSpaces(localStorage.getItem("api_token") || ""))
    }, [])
    useEffect(() => {
        if (!state)
            d(setBanqueStateT(localStorage.getItem("api_token") || ""))
    }, [])
    const saveB = () => {
        d(createPost())
        if (!fullEmptyAmount)
            setEditMode(false)

    }
    const editB = () => {
        setEditMode(true)
    }
    const history = useHistory()
    const redirect = () => {

        history.push(`${pathPrefix}/content/history`);
    }
    const submitB = () => {
        if (postBObj && token) {
            if (postBObj.id) {
                d(updateHistoryT(postBObj, token, redirect))
            } else {
                d(postNewBanknote(postBObj, token, redirect))
            }
            d(banquetActions.clearFlagsToPreventSpacesBeingDisabled())
            d(banquetActions.clearAllInfoAboutSpaces())
        }
    }
    if (useSelector((state: RootState) => state.common.isFetching))
        return <FetchingComponent/>

    return <>
        {editMode && <div>
            <BlankHeader isEdit={editMode} CusMenuSwitch={props.CusMenuSwitch}/>
            <CreateNewNavBar/>
            <Switch>
                <Redirect exact from={url} to={`${url}/menus`}/>
                <Route path={`${url}/menus`} render={() => <CreateNewMenus/>}/>
                <Route path={`${url}/tickets`} render={() => <CreateNewTickets/>}/>
                <Route path={`${url}/entertainments`} render={() => <CreateNewServices/>}/>
            </Switch>

            <div className={s.toRightSide}>
                {fullEmptyAmount && <div className={s.amountMessage}>
                    Не всі поля заповнені!!!
                </div>}
                <button className={s.buttonGreen} onClick={saveB}>Зберегти</button>
            </div>
        </div>}
        {!editMode && <div>
            <BlankHeader isEdit={editMode}/>
            { isFetching ? <FetchingComponent/>
            :<OrderItems/>
            }
            <div className={s.toRightSide}>
                <button className={s.buttonBlack} onClick={editB}>Редагувати</button>
                <button className={s.buttonGreen} onClick={submitB}>Відправити</button>
            </div>
        </div>}
    </>
}
