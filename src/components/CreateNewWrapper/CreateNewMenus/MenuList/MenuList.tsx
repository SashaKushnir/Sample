import React from 'react'
import styles from './MenuList.module.css'
import { useSelector } from "react-redux";
import { MenuItemComponent } from "./MenuItemComponent";
import { selectMenuKitchen } from "../../../../selectors/selectCreateNew";
import { MenuItem } from "../../../../redux/newBanknote/newBanknoteReducer";


export const MenuList:React.FC<{showAmount?: boolean}> = (props) => {
    const menus = useSelector(selectMenuKitchen).map((curMenuItem:MenuItem)=> <MenuItemComponent showAmount={props.showAmount} Menuitem={curMenuItem}/>)
    return <div>
        <div className={styles.name}>Menu List</div>
        <div className={styles.tickets}>
        {menus}
        </div>
    </div>
}