import React, { useEffect } from 'react'
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import s from './Content.module.css'
import {Redirect, Route, Switch, useRouteMatch} from "react-router-dom";

import {CreateNew} from "../../CreateNewWrapper/CreateNew/CreateNew";
import {Banquets} from "../../History/BanquetsHistory/Banquets";
import { logInWithToken } from "../../../redux/forCommon/forCommonThunks";
import { commonActions } from "../../../redux/forCommon/forCommonActions";
import {useDispatch, useSelector} from "react-redux";
import {CreateNewWrapper} from "../../CreateNewWrapper/CreateNewWrapper/CreateNewWrapper";
import {CreateNewEmployeePage} from "../../CreateEmployeeAccount/CreateNewEmployeePage";
import Chart from "../../Reports/PieChart";
import {RootState} from "../../../redux/store";

export const MyPage = () => {
    let {url} = useRouteMatch()
    const api_token = localStorage.getItem("api_token")
    const d = useDispatch()
    useEffect(() => {
        if (api_token) {
            d(logInWithToken(api_token))
           // d(commonActions.needRedirectToggle(true))
        }
        else {
            d(commonActions.authToggle(false))
        }
    },[api_token])
    const employee = useSelector((state:RootState) => state.common.userInfo?.role)
    return <div className={s.wrap}>
        <div className={s.content}>
            <Header/>
            <Switch>
                <Redirect exact from={`${url}`} to={`${url}/history`}/>
                <Route path={`${url}/new`} render={() => <CreateNewWrapper/>}/>
                {employee?.can_modify && <Route path={`${url}/history`} render={() => <div><Banquets/></div>}/>}
                <Route path={`${url}/editors`} render={() => <div>editors</div>}/>
                <Route path={`${url}/reports`} render={() => <div><Chart/></div>}/>
                {employee?.can_modify && <Route path={`${url}/support`} render={() => <div><CreateNewEmployeePage/></div>}/>}
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
