import React from 'react'
import {NavLink, useRouteMatch} from 'react-router-dom'
import s from './NavBar.module.css'

export const HeaderNavBar = () => {
    let {url} = useRouteMatch();
    return <nav className={s.navigation}>
        <NavLink activeClassName={s.activeClassName} className={s.navlink} to={`${url}/history`}>
             History
        </NavLink>

        <NavLink activeClassName={s.activeClassName} className={s.navlink} to={`${url}/new`}>
            <div className={s.title}> Create new</div>
        </NavLink>

        <NavLink activeClassName={s.activeClassName} className={s.navlink} to={`${url}/editors`}>
            <div className={s.title}> Editors</div>
        </NavLink>

        <NavLink activeClassName={s.activeClassName} className={s.navlink} to={`${url}/reports`}>
            <div className={s.title}>Reports</div>
        </NavLink>
    </nav>
}
