import React from 'react'
import { HeaderNavBar } from "./HeaderNavBar";
import s from './Header.module.css'
import { useDispatch } from "react-redux";
import { commonActions } from "../../../redux/forCommon/forCommonActions";
import { useHistory } from "react-router-dom";

export const Header: React.FC<any> = ({removeCookie}) => {

    const history = useHistory()
    const d = useDispatch();
    const log_out =  ( ) => {
        d(commonActions.logOut())
         removeCookie("authInfo")
        localStorage.clear()
    }
    return <>
        <header>
            <div className={s.headerText}>
                IMPERIA SITE HEADER
                <div className={s.log_out} onClick={log_out}>Log out</div>
            </div>
            <div>
                <HeaderNavBar/>
            </div>
        </header>
    </>
}
