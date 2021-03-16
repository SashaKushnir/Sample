import React, { useEffect } from 'react'
import styles from './CreateNewMenus.module.css'
import { MenuList } from "./MenuList/MenuList";
import { useDispatch } from "react-redux";
import { MenuArray, setMenuT } from "../../../redux/newBanknote/newBanknoteReducer";
import { Ticket } from "../../../redux/tickets/ticketsReducer";

interface CreateNewMenusProps {
    menus: MenuArray
}

export const CreateNewMenus: React.FC<CreateNewMenusProps> = ({menus}) => {
    const d = useDispatch()
    useEffect(()=>{
        d(setMenuT())
    },[])
    return <div className={styles.wrap}>
        <MenuList menus={menus} showAmount={true} />
        <MenuList menus={menus}/>
    </div>
}