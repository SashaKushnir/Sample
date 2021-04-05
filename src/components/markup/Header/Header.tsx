import React from 'react'
import { HeaderNavBar } from "./HeaderNavBar";
import s from './Header.module.css'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logOutT } from "../../../redux/forCommon/forCommonThunks";
import { commonActions } from "../../../redux/forCommon/forCommonActions";

export const Header = () => {

    const history = useHistory()
    const d = useDispatch();
    const log_out =  ( ) => {
        d(logOutT())
        localStorage.clear()
        d(commonActions.needRedirectToggle(true))
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
