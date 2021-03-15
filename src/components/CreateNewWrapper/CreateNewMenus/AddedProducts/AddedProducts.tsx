import React from 'react'
import styles from './AddedProducts.module.css'
import { useSelector } from "react-redux";
import { selectSelectedMenus } from "../../../../selectors/selectCreateNew";

export const AddedProducts = () => {
    const selectedOrders = useSelector(selectSelectedMenus)
    let selectedMenus
    if(selectedOrders?.selectedMenu)
        selectedMenus = selectedOrders?.selectedMenu.map(()=>{})
    return <div>
        <div className={styles.name}>AddedProducts</div>
    </div>
}