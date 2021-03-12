import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import s from './NavBar.module.css'

export const HeaderNavBar = () => {
    let {path, url} = useRouteMatch();
    return <nav className={s.navigation}>
        <NavLink activeClassName={s.activeClassName} className={s.navlink} to={`${url}/menu`}>
            <div className={s.division}>Menu</div>
        </NavLink>

        <NavLink activeClassName={s.activeClassName} className={s.navlink} to={`${url}/new`}>
            <div> Create new</div>
        </NavLink>

        <NavLink activeClassName={s.activeClassName} className={s.navlink} to={`${url}/editors`}>
            <div> Editors</div>
        </NavLink>

        <NavLink activeClassName={s.activeClassName} className={s.navlink} to={`${url}/reports`}>
            <div>Reports</div>
        </NavLink>
    </nav>
}