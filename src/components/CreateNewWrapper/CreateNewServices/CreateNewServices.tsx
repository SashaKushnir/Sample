//import React from 'react'
import { useSelector } from "react-redux";
import { selectServices } from "../../../selectors/selectCreateNew";


export const CreateNewServices = () => {
    const services = useSelector(selectServices).map((obj,index)=>
        <div> s</div>)
    return <div>
        {services}
    </div>
}