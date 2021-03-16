import React, { useEffect } from 'react'
import styles from './CreateNewMenus.module.css'
import { MenuList } from "./MenuList/MenuList";
import { useDispatch } from "react-redux";
import { setMenuT } from "../../../redux/newBanknote/newBanknoteReducer";

export const CreateNewMenus = () => {
    const d = useDispatch()
    useEffect(()=>{
        d(setMenuT())
    },[])
    return <div className={styles.wrap}>
        <MenuList showAmount={true} />
        <MenuList/>
    </div>
}