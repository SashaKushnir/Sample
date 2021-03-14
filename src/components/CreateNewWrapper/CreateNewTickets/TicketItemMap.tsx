import React from 'react'
import { Determine, PeriodArray, PeriodItem, TicketCategoriesItem } from "../../../redux/tickets/ticketsReducer";
import { DataItem } from "./DataItem";

interface TicketItemProps {
    periodArray: PeriodArray
}

export const TicketItemMap: React.FC<TicketItemProps> = ({periodArray}) => {
    const periodItem = Object.keys(periodArray.period.beg_datetime).map((val)=>
        <DataItem key={val} keyVal={val} value={periodArray.period.beg_datetime[val as keyof Determine]} />)
    return <div>
        <div>
            {periodArray.name}
        </div>
        <div>
            {periodArray.description}
        </div>
        <div>
            {periodArray.price}
        </div>
        {periodItem}
    </div>
}