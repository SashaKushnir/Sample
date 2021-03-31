import React, { useEffect } from 'react'
import styles from './CreateNewMenus.module.css'
import { MenuList } from "./MenuList/MenuList";
import { useDispatch, useSelector } from "react-redux";
import { selectMenuKitchen } from "../../../selectors/selectCreateNew";
import { newBanknoteActions } from "../../../redux/newBanknote/newBanknoteActions";
import { setMenuT } from "../../../redux/newBanknote/newBanknoteThunks";


export const CreateNewMenus: React.FC = () => {
    const d = useDispatch()
    const menuData = useSelector(selectMenuKitchen)
    useEffect(() => {
        let localServices = JSON.parse(sessionStorage.getItem("menus") || "[]");
        if (localServices.length > 0) {
            d(newBanknoteActions.setMenuInfo(localServices));
            sessionStorage.removeItem("menus");
        } else
            d(setMenuT())
    }, [])
    useEffect(() => {
        sessionStorage.setItem("menus", JSON.stringify(menuData))
    })
    const menus = useSelector(selectMenuKitchen)
    return <div className={styles.wrap}>
        <MenuList menus={menus} showAmount={true}/>
        <MenuList menus={menus}/>
    </div>
}