import React from "react";

import { ServiceCategoriesItem } from "../../../redux/services/servicesReducer";

interface ServiceCategoriesItemProps {
    serviceItem: ServiceCategoriesItem
}

export const ServiceCategoriesI: React.FC<ServiceCategoriesItemProps> = ({serviceItem}) => {

    return <div>
        <div>
            {serviceItem.name}
        </div>
        <div>
            {serviceItem.description}
        </div>
        <div>
            {serviceItem.once_paid_price}
        </div>
        <div>
            {serviceItem.hourly_paid_price}
        </div>
    </div>
}