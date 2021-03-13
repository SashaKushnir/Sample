import React from 'react'
import styles from './MenuList.module.css'
import { useSelector } from "react-redux";
import { menuKitchen } from "../../../selectors/selector";
import { MenuItem } from "../../../redux/newBanknote/newBanknoteReducer";
import { useHistory } from 'react-router-dom';

export const MenuItemComponent: React.FC<{item: MenuItem}> = (props) => {
const dish = map((curMenuItem:MenuItem)=> <MenuItemComponent item={curMenuItem}/>)
    return <div>
        {props.item.menu_category.name}
        <div>

        </div>
    </div>
}