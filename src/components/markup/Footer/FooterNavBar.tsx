import React from 'react'
import { NavLink, useRouteMatch } from "react-router-dom";
import s from "../Header/NavBar.module.css";


export const FooterNavBar = () => {
    let {url} = useRouteMatch()
    return <nav className={s.navigation}>
        <NavLink activeClassName={s.activeClassName} className={s.navlink} to={`${url}/support`}>
            <div className={s.division}> Support </div>
        </NavLink>

        <NavLink activeClassName={s.activeClassName} className={s.navlink} to={`${url}/block`}>
            <div> Block </div>
        </NavLink>

        <NavLink activeClassName={s.activeClassName} className={s.navlink} to={`${url}/block`}>
            <div> Block </div>
        </NavLink>

        <NavLink activeClassName={s.activeClassName} className={s.navlinkRight} to={`${url}/authors`}>
            <div> Authors </div>
        </NavLink>
    </nav>
}