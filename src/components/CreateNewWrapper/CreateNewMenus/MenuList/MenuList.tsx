import React from 'react'
import styles from './MenuList.module.css'
import { useSelector } from "react-redux";
import { MenuItemComponent } from "./MenuItemComponent";
import { menuKitchenInfo } from "../../../../selectors/selectCreateNew";
import { MenuItem } from "../../../../redux/newBanknote/newBanknoteReducer";


export const MenuList = () => {
    const menus = useSelector(menuKitchenInfo).map((curMenuItem:MenuItem)=> <MenuItemComponent Menuitem={curMenuItem}/>)
    return <div>
        <div className={styles.name}>Menu List</div>
        {menus}
    </div>
}