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
    </div>
}