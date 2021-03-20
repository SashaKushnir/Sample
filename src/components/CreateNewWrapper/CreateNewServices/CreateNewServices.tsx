//import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { selectServices } from "../../../selectors/selectCreateNew";
import { ServiceCategoriesI } from "./ServiceCategoriesI";
import styles from "./CreateNewServices.module.css";
import { useEffect } from "react";
import { setServicesT } from "../../../redux/services/servicesReducer";


export const CreateNewServices = () => {
    const d = useDispatch()
    useEffect(() => {
        d(setServicesT())
    }, [])
    const services = useSelector(selectServices).map((obj, index) =>
        <ServiceCategoriesI key={index} serviceItem={obj}/>)
    const selectedServices = useSelector(selectServices).map((obj,index)=>
        <ServiceCategoriesI key={index} serviceItem={obj} showAmount={true}/>)
    return <div className={styles.main}>
        <div className={styles.basket}>
            {selectedServices}
        </div>
        <div className={styles.intertaiment}>
            {services}
        </div>

    </div>
}