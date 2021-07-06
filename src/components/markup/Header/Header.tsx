import React from 'react'
import {HeaderNavBar} from "./HeaderNavBar";
import s from './Header.module.css'
import {useDispatch, useSelector} from "react-redux";
import {logOutT} from "../../../redux/forCommon/forCommonThunks";
import {commonActions} from "../../../redux/forCommon/forCommonActions";
import {RootState} from "../../../redux/store";

export const Header = () => {

    const d = useDispatch();
    const log_out =  ( ) => {
        d(logOutT())
        localStorage.clear()
        d(commonActions.needRedirectToggle(true))
    }
    const employee = useSelector((state:RootState) => state.common.userInfo?.role)

    return <>
        <header>
            <div className={s.headerText}>
                IMPERIA SITE HEADER

                <div className={s.log_out} onClick={log_out}>Log out</div>
                <div className={s.name}>{employee?.name}</div>
            </div>
            <div>
                <HeaderNavBar/>
            </div>
        </header>
    </>
}
