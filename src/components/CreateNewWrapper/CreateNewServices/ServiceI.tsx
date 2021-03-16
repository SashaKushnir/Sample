import React from "react";

import { ServiceItem } from "../../../redux/services/servicesReducer";
import { DataItem } from "../CreateNewTickets/DataItem";
import { Determine } from "../../../redux/tickets/ticketsReducer";

interface ServiceCategoriesItemProps {
    serviceI: ServiceItem
}

export const ServiceI: React.FC<ServiceCategoriesItemProps> = ({serviceI}) => {
    let bad_determ, end_determ
    if(serviceI.period){
        if(serviceI.period.beg_datetime)
            bad_determ = Object.keys(serviceI.period.beg_datetime).map((obj) =>
                <DataItem key={obj} keyVal={obj} value={serviceI?.period?.beg_datetime[obj as keyof Determine]}/>)

        if(serviceI.period.end_datetime)
        end_determ = Object.keys(serviceI.period.end_datetime).map((obj) =>
            <DataItem key={obj} keyVal={obj} value={serviceI?.period?.end_datetime[obj as keyof Determine]}/>)
    }
    return <div>
        <div>
            {serviceI.name}
        </div>
        <div>
            {serviceI.description}
        </div><
        div>
            {serviceI.hourly_paid_price}
        </div>
        <div>
            {serviceI.once_paid_price}
        </div>
        <div>
            {bad_determ}
        </div>
        <div>
            {end_determ}
        </div>
    </div>
}