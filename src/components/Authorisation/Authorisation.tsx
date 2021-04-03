import React from 'react'
import {LoginForm} from "./LoginForm";
import s from './Authorisation.module.css'

export const Authorisation = () => {
    return <div className={s.wrap}>
        <h1 className={s.headerText}>Log in</h1>
        <LoginForm/>
    </div>
}
