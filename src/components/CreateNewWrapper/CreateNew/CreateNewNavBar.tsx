import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import s from './CreateNewNavBar.module.css'

export const CreateNewNavBar = () => {
    let {url} = useRouteMatch()
    return <nav className={s.naVigation}>
        <NavLink activeClassName={s.isActive} className={s.navlink} to={`${url}/menus`}>
            <div> Menus </div>
        </NavLink>
        <NavLink activeClassName={s.isActive} className={s.navlink} to={`${url}/tickets`}>
            <div> Tickets </div>
        </NavLink>
        <NavLink activeClassName={s.isActive} className={s.navlink} to={`${url}/entertainments`}>
            <div> Entertainments </div>
        </NavLink>
    </nav>
}