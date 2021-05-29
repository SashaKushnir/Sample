import React, {useEffect} from 'react';
import './App.css';
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import {MyPage} from "./components/markup/MyPage/MyPage";
import {Authorisation} from "./components/Authorisation/Authorisation";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./redux/store";
import {commonActions} from "./redux/forCommon/forCommonActions";
import {OneBanquetPDF} from "./components/PDF/OneBanquetPDF/OneBanquetPDF";
import {OneDayPDF} from "./components/PDF/OneDayPDF/OneDayPDF";
import {KitchenPDF} from "./components/PDF/KitchenPDF/KitchenPDF";
import {PizzaPDF} from "./components/PDF/PizzaPDF/PizzaPDF";
import {ServicesPDF} from "./components/PDF/ServicesPDF/ServicesPDF";
import {getListOfSpaces} from "./redux/banquetInfo/banquetInfoT";
import {setBanqueStateT} from "./redux/BanquetState/BanquetStatesT";

export const pathPrefix = "/app"


 const App = () => {
    const tokenSuccess = useSelector((state:RootState) => state.common.authByToken)
    const needRedirect = useSelector((state: RootState) => state.common.needRedirect)
    const d = useDispatch()
    const history = useHistory()
    const isAuth = useSelector((state: RootState) => state.common.isAuthorised)
    const userInfo = (useSelector((state: RootState) => state.common.userInfo))
    const spaces = useSelector((state: RootState) => state.banquet.basicSpaces)
    const states = useSelector((state: RootState) => state.banquetStates.states)
    useEffect(() => {
        if (tokenSuccess) {
            if(isAuth === false){
                d(commonActions.needRedirectToggle(true))
            }
            d(commonActions.authToggle(true))
        }
        if (!spaces)
            d(getListOfSpaces(localStorage.getItem("api_token") || ""))
        if(!states)
            d(setBanqueStateT())
    }, [tokenSuccess])


    useEffect(() => {
        if (isAuth === false) {
            history.push(`${pathPrefix}/login`)
            d(commonActions.needRedirectToggle(true))
        } else {
            if(isAuth ===true)
                if((needRedirect === true) || (needRedirect === null)) {
                    history.push(`${pathPrefix}/content`)
                    d(commonActions.needRedirectToggle(false))
                }
            if (userInfo?.api_token)
                localStorage.setItem("api_token", userInfo.api_token)
            d(commonActions.needRedirectToggle(false))
        }
    }, [isAuth, needRedirect])


    return (
        <div className="App">
            <Switch>
                <Redirect exact from={pathPrefix} to={`${pathPrefix}/content`}/>
                <Redirect exact from='/' to={`${pathPrefix}/content`}/>
                <Route path={`${pathPrefix}/login`} render={() => <Authorisation/>}/>
                <Route path={`${pathPrefix}/content`} render={() => <MyPage/>}/>
                <Route path={`${pathPrefix}/OneBanquetPdf`} render={() => <OneBanquetPDF/>}/>
                <Route path={`${pathPrefix}/OneDayPdf`} render={() => <OneDayPDF/>}/>
                <Route path={`${pathPrefix}/KitchenPdf`} render={() => <KitchenPDF/>}/>
                <Route path={`${pathPrefix}/ServicesPdf`} render={() => <ServicesPDF/>}/>
                <Route path={`${pathPrefix}/PizzaPdf`} render={() => <PizzaPDF/>}/>
                <Route path='*' render={() => <div>Error, empty link</div>}/>
            </Switch>

        </div>
    );
}
export default App