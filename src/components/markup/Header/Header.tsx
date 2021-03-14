import React from 'react'
import { HeaderNavBar } from "./HeaderNavBar";
import s from './Header.module.css'

export const Header = () => {
    return <>
        <header>
            <div className={s.headerText}>
                IMPERIA SITE HEADER
            </div>
            <div>
                <HeaderNavBar/>
            </div>
        </header>
    </>
}