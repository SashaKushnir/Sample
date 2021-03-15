import React, { useEffect } from 'react'
import styles from './CreateNewMenus.module.css'
import { MenuList } from "./MenuList/MenuList";
import { AddedProducts } from "./AddedProducts/AddedProducts";
import { useDispatch } from "react-redux";
import { setMenuT } from "../../../redux/newBanknote/newBanknoteReducer";

export const CreateNewMenus = () => {
    const d = useDispatch()
    useEffect(()=>{
        d(setMenuT())
    },[])
    return <div className={styles.wrap}>
        <AddedProducts/>
        <MenuList/>
    </div>
}