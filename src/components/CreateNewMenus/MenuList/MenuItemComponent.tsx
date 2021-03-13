import React from 'react'
import styles from './MenuList.module.css'
import { useSelector } from "react-redux";
import { menuKitchen } from "../../../selectors/selector";
import { MenuItem } from "../../../redux/newBanknote/newBanknoteReducer";
import { useHistory } from 'react-router-dom';

export const MenuItemComponent: React.FC<{item: MenuItem}> = (props) => {
    const history = useHistory()

    history.push({

    })

    return <div>
        <div className={styles.name}>Menu List</div>
    </div>
}