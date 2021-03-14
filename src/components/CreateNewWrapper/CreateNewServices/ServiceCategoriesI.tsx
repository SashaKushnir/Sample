import React from "react";

import { ServiceCategoriesItem } from "../../../redux/services/servicesReducer";
import { ServiceI } from "./ServiceI";

interface ServiceCategoriesItemProps {
    serviceItem: ServiceCategoriesItem
}

export const ServiceCategoriesI: React.FC<ServiceCategoriesItemProps> = ({serviceItem}) => {
    const services = serviceItem.services.map((obj,index)=>
        <ServiceI serviceI={obj} key={index}/>)
    return <div>
        <div>
            {serviceItem.name}
        </div>
        <div>
            {serviceItem.description}
        </div>
        {services}
    </div>
}