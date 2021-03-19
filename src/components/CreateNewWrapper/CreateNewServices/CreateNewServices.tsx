//import React from 'react'
import { useSelector } from "react-redux";
import { selectServices } from "../../../selectors/selectCreateNew";
import {ServiceCategoriesI} from "./ServiceCategoriesI";
import styles from "./CreateNewServices.module.css";


export const CreateNewServices = () => {
    const services = useSelector(selectServices).map((obj,index)=> <ServiceCategoriesI serviceItem={obj}/>)
    return <div className={styles.main}>
        <div className={styles.basket}>
            Корзина
        </div>
        <div className={styles.intertaiment}>
            {services}
        </div>

    </div>
}