import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { selectServices } from "../../../selectors/selectCreateNew";
import { ServiceCategoriesI } from "./ServiceCategoriesI";
import styles from "./CreateNewServices.module.css";
import { useEffect } from "react";
import { servicesActions } from "../../../redux/services/servicesActions";
import { ServiceCategoriesIShowAmount } from "./ServiceCategoriesIShowAmount";
import { setServicesT } from "../../../redux/services/servicesThunks";


export const CreateNewServices = () => {
    const d = useDispatch()
    const ser  = useSelector(selectServices)


    useEffect(() => {
        let localServices = JSON.parse(localStorage.getItem("services") || "[]");
        if(localServices.length > 0) {
             d(servicesActions.setEntertainmentInfo(localServices));
         }else {
            d(setServicesT())
        }

    }, [])
    useEffect(()=> {
     //   localStorage.setItem("services", JSON.stringify(ser))
    })


    const selectedServices = useSelector(selectServices).filter((obj)=>
        obj.showAmount).map((obj,index)=>
        <ServiceCategoriesIShowAmount key={index} serviceItem={obj} showAmount={true}/>)


    const services = useSelector(selectServices).map((obj, index) =>
        <ServiceCategoriesI key={index} serviceItem={obj} showAmount={false}/>)


    return <div className={styles.main}>
        <div className={styles.basket}>
            {selectedServices}
        </div>
        <div className={styles.intertaiment}>
            {services}
        </div>
    </div>
}