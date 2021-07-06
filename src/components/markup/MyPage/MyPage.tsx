import React, {useEffect} from 'react'
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import s from './Content.module.css'
import {Redirect, Route, Switch, useRouteMatch} from "react-router-dom";
import {Banquets} from "../../History/BanquetsHistory/Banquets";
import {logInWithToken} from "../../../redux/forCommon/forCommonThunks";
import {commonActions} from "../../../redux/forCommon/forCommonActions";
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
        }
        else {
            d(commonActions.authToggle(false))
        }
    },[api_token,d])
    const employee = useSelector((state:RootState) => state.common.userInfo?.role)
    return <div className={s.wrap}>
        <div className={s.content}>
            <Header/>
            <Switch>
                <Route path={`${url}/new`} render={() => <CreateNewWrapper/>}/>
                {employee?.can_read && <Route path={`${url}/history`} render={() => <div><Banquets/></div>}/>}
                {employee?.is_owner && <Route path={`${url}/reports`} render={() => <div><Chart/></div>}/>}
                {employee?.is_owner && <Route path={`${url}/support`} render={() => <div><CreateNewEmployeePage/></div>}/>}
            </Switch>
        </div>
        <div className={s.footer}>
            <Footer/>
        </div>
    </div>
}
