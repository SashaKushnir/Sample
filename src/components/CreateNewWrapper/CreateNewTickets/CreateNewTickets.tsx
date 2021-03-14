import React from 'react'
import { useSelector } from "react-redux";
import { selectTickets } from "../../../selectors/selectCreateNew";
import { TicketItem } from "./TicketItem";

export const CreateNewTickets = () => {
    const tickets = useSelector(selectTickets).map((obj)=> <TicketItem ticketItem={obj}/>)
    return <div>
        {tickets}
    </div>
}