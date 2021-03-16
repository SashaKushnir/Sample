import React from 'react'
import styles from './MenuList.module.css'
import { useSelector } from "react-redux";
import { MenuItemComponent } from "./MenuItemComponent";
import { selectMenuKitchen } from "../../../../selectors/selectCreateNew";
import { MenuArray, MenuItem } from "../../../../redux/newBanknote/newBanknoteReducer";

interface MenuListProps {
    menus: MenuArray
    showAmount?: boolean
}

export const MenuList:React.FC<MenuListProps> = (props) => {
    const menus = props.menus.map((curMenuItem:MenuItem)=>
        <MenuItemComponent showAmount={props.showAmount} Menuitem={curMenuItem}/>)
    return <div>
        <div className={styles.name}>Menu List</div>
        <div className={styles.tickets}>
        {menus}
        </div>
    </div>
}