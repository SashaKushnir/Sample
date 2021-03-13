import React from 'react'
import styles from './MenuList.module.css'
import { MenuItem } from "../../../redux/newBanknote/newBanknoteReducer";

export const MenuItemComponent: React.FC<{item: MenuItem}> = ({item}) => {
    return <div>
        <div className={styles.name}>Menu List</div>
    </div>
}