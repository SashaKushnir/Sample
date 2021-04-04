import React, { useEffect } from 'react'
import styles from './CreateNewMenus.module.css'
import { MenuList } from "./MenuList/MenuList";
import { useDispatch, useSelector } from "react-redux";
import { selectMenuKitchen } from "../../../selectors/selectCreateNew";
import { newBanknoteActions } from "../../../redux/newBanknote/newBanknoteActions";
import { setMenuT } from "../../../redux/newBanknote/newBanknoteThunks";


export const CreateNewMenus: React.FC = () => {
    const d = useDispatch()

    useEffect(() => {
        let localMenus = JSON.parse(localStorage.getItem("menus") || "[]");
        if (localMenus.length > 0) {
            d(newBanknoteActions.setMenuInfo(localMenus));
        } else
            d(setMenuT())
    }, [])
    useEffect(() => {
        if(menuData)
        localStorage.setItem("menus", JSON.stringify(menuData))
    })
    const menuData = useSelector(selectMenuKitchen)
    return <div className={styles.wrap}>
        <MenuList menus={menuData} showAmount={true}/>
        <MenuList menus={menuData}/>
    </div>
}