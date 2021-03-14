import React from 'react'
import { TicketCategoriesItem } from "../../../redux/tickets/ticketsReducer";
import { TicketItemMap } from "./TicketItemMap";

interface TicketItemProps {
    ticketItem: TicketCategoriesItem
}

export const TicketItem: React.FC<TicketItemProps> = ({ticketItem}) => {
    const ticketItemMap = ticketItem.tickets.map((obj) => <TicketItemMap periodArray={obj}/>)
    return <div>
        <div>
            {ticketItem.name}
        </div>
        <div>
            {ticketItem.description}
        </div>
        {ticketItemMap}
    </div>
}