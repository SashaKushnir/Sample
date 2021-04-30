import React from 'react'
import s from "../../CreateNewWrapper/CreateNew/CreateNewNavBar.module.css";
import {NavLink, useRouteMatch} from "react-router-dom";

export const AccountNavbar = () => {
    const {url} = useRouteMatch()
    return <nav className={s.navFor50}>
        <NavLink activeClassName={s.isActive} className={s.navlink} to={`${url}/signup`}>
            <div> Creating account </div>
        </NavLink>
        <NavLink activeClassName={s.isActive} className={s.navlink} to={`${url}/edit_delete`}>
            <div> Edit/Delete </div>
        </NavLink>
    </nav>
}