import React from 'react'
import styles from './MenuList.module.css'
import { useSelector } from "react-redux";
import { menuKitchen } from "../../../selectors/selector";
import { MenuItem } from "../../../redux/newBanknote/newBanknoteReducer";
import { MenuItemComponent } from "./MenuItemComponent";


export const MenuList = () => {
    const menus = useSelector(menuKitchen).map((curMenuItem:MenuItem)=> <MenuItemComponent item={curMenuItem}/>)
    return <div>
        <div className={styles.name}>Menu List</div>
        {menus}
    </div>
}