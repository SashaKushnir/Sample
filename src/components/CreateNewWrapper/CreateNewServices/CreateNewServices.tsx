import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { selectServices } from "../../../selectors/selectCreateNew";
import { ServiceCategoriesI } from "./ServiceCategoriesI";
import styles from "./CreateNewServices.module.css";
import { useEffect } from "react";
import { servicesActions } from "../../../redux/services/servicesActions";
import { ServiceCategoriesIShowAmount } from "./ServiceCategoriesIShowAmount";
import { setServicesT } from "../../../redux/services/servicesThunks";
import {ItemType} from "../CreateNewMenus/MenuList/MenuItemComponent";
import {ServiceCategoriesItem} from "../../../redux/services/servicesReducer";


export const CreateNewServices = () => {
    const d = useDispatch()
    const ser  = useSelector(selectServices)


    useEffect(() => {
        if(JSON.parse(localStorage.getItem("services") || "[]").length > 0) {
             d(servicesActions.setEntertainmentInfo(JSON.parse(localStorage.getItem("services") || "[]")));
         }else {
            d(setServicesT())
            if(ser)
                localStorage.setItem("services", JSON.stringify(ser))
        }

    }, [])
    useEffect(()=> {
        if(ser)
        localStorage.setItem("services", JSON.stringify(ser))
    })


    const selectedServices = useSelector(selectServices)?.filter((obj)=>
        obj.showAmount).map((obj,index)=>
        <ServiceCategoriesIShowAmount key={index} serviceItem={obj} showAmount={true}/>)

    let categoryIds: Array<string> | undefined = ser?.reduce((acum: Array<string>, cur) => {
        acum.push(cur.category.name as never)
        return acum
    },[])
    categoryIds = Array.from(new Set(categoryIds))


    const resArray = categoryIds.reduce((acum: Array<ItemType<ServiceCategoriesItem>>, resItem) => {
        const items = ser?.filter((arrItem) => {
            return arrItem.category.name === resItem
        })
        if(items)
            acum.push({
                category: resItem,
                items: items
            })
        return acum
    }, [])

    return <div className={styles.main}>
        <div className={styles.basket}>
            {selectedServices}
        </div>
        <div className={styles.services}>
            {
                resArray.map((resArrayItem) => {
                    const items = resArrayItem.items.map((obj, index) => {
                        return <ServiceCategoriesI key={index} serviceItem={obj} showAmount={false}/>
                    })
                    return  <div>
                        {resArrayItem.category}
                        <div>{items}</div>
                    </div>
                })
            }
        </div>
    </div>
}
