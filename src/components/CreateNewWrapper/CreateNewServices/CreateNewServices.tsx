//import React from 'react'
import { useSelector } from "react-redux";
import { selectServices } from "../../../selectors/selectCreateNew";
import {ServiceCategoriesI} from "./ServiceCategoriesI";


export const CreateNewServices = () => {
    const services = useSelector(selectServices).map((obj,index)=> <ServiceCategoriesI serviceItem={obj}/>)
    return <div>
        {services}
    </div>
}