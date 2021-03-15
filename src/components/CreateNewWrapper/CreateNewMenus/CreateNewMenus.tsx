import React, { useEffect } from 'react'
import styles from './CreateNewMenus.module.css'
import { MenuList } from "./MenuList/MenuList";
import { AddedProducts } from "./AddedProducts/AddedProducts";
import { useDispatch } from "react-redux";

export const CreateNewMenus = () => {
    const d = useDispatch()
    useEffect(()=>{
    },[])
    return <div className={styles.wrap}>
        <AddedProducts/>
        <MenuList/>
    </div>
}