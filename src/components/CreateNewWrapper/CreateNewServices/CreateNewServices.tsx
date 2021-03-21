//import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { selectServices } from "../../../selectors/selectCreateNew";
import { ServiceCategoriesI } from "./ServiceCategoriesI";
import styles from "./CreateNewServices.module.css";
import { useEffect, useState } from "react";
import { setServicesT } from "../../../redux/services/servicesReducer";
import { createPost } from "../../../redux/formPostObject/createObjReducer";
import { newBanknoteActions } from "../../../redux/newBanknote/newBanknoteActions";
import { servicesActions } from "../../../redux/services/servicesActions";


export const CreateNewServices = () => {
    const d = useDispatch()
    const ser  = useSelector(selectServices)


    useEffect(() => {
        let localServices = JSON.parse(sessionStorage.getItem("services") || "[]");
        if(localServices.length > 0) {
             d(servicesActions.setEntertainmentInfo(localServices));
             sessionStorage.removeItem("services");
         }else {
            d(setServicesT())
        }

    }, [])
    useEffect(()=> {
        sessionStorage.setItem("services", JSON.stringify(ser))
    })

    const selectedServices = useSelector(selectServices).filter((obj)=>
        obj.showAmount).map((obj,index)=>
        <ServiceCategoriesI key={index} serviceItem={obj} showAmount={true}/>)

    const createMyPost = () => {
        d(createPost())
    }
    const services = useSelector(selectServices).map((obj, index) =>
        <ServiceCategoriesI key={index} serviceItem={obj}/>)


    return <div className={styles.main}>
        <div className={styles.basket}>
            {selectedServices}
        </div>
        <div className={styles.intertaiment}>
            {services}
        </div>
        <button onClick={createMyPost}>Save</button>

    </div>
}