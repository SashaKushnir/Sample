import React from 'react'
import {HeaderNavBar} from "./HeaderNavBar";
import s from './Header.module.css'
import {RootState} from "../../../redux/store";
import {useDispatch} from "react-redux";
import {commonActions} from "../../../redux/forCommon/forCommonActions";

export const Header = () => {
    const d = useDispatch();
    const log_out = () =>  d(commonActions.authToggle(false))
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
