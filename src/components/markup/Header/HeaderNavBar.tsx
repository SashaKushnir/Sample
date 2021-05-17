import React from 'react'
import {NavLink, useRouteMatch} from 'react-router-dom'
import s from './NavBar.module.css'

export const HeaderNavBar = () => {
    let {url} = useRouteMatch();
    return <nav className={s.navigation}>

        <NavLink activeClassName={s.activeClassName} className={s.navlink} to={`${url}/history`}>
            <div className={s.title}>Історія</div>
        </NavLink>



        <NavLink activeClassName={s.activeClassName} className={s.navlink} to={`${url}/new`}>
            <div className={s.title}>Створити новий</div>
        </NavLink>

        <NavLink activeClassName={s.activeClassName} className={s.navlink} to={`${url}/reports`}>
            <div className={s.title}>Звіти</div>
        </NavLink>
    </nav>
}
