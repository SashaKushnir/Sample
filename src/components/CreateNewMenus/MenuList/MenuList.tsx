import React from 'react'
import styles from './MenuList.module.css'
import { useSelector } from "react-redux";
import { menuKitchenInfo } from "../../../selectors/selectCreateNew";
import { MenuItem } from "../../../redux/newBanknote/newBanknoteReducer";
import { MenuItemComponent } from "./MenuItemComponent";


export const MenuList = () => {
    const menus = useSelector(menuKitchenInfo).map((curMenuItem:MenuItem)=> <MenuItemComponent Menuitem={curMenuItem}/>)
    return <div>
        <div className={styles.name}>Menu List</div>
        {menus}
    </div>
}