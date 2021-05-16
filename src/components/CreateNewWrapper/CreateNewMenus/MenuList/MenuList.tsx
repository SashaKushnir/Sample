import React from 'react'
import styles from './MenuList.module.css'
import { useSelector } from "react-redux";
import { MenuItemComponent } from "./MenuItemComponent";
import { selectMenuKitchen } from "../../../../selectors/selectCreateNew";
import { MenuArray, MenuItem } from "../../../../redux/newBanknote/newBanknoteReducer";

interface MenuListProps {
    menus?: MenuArray
    showAmount?: boolean
}

export const MenuList:React.FC<MenuListProps> = (props) => {
    const menus = props.menus?.map((curMenuItem:MenuItem, index)=>
        <MenuItemComponent key={index} showAmount={props.showAmount} Menuitem={curMenuItem}/>)
    return <div>
        {!props.showAmount && <div className={styles.name}>Меню</div>}
        {props.showAmount && <div className={styles.name}>Кошик</div>}

        {props.showAmount && <div>
            {menus}
        </div>}
        {!props.showAmount && <div className={styles.menus}>
            {menus}
        </div>}

    </div>
}
