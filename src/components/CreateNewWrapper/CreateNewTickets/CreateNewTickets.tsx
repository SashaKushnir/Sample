import React from 'react'
import { useSelector } from "react-redux";
import { selectTickets } from "../../../selectors/selectCreateNew";
import { TicketItem } from "./TicketItem";
import styles from './CreateNewTickets.module.css'

export const CreateNewTickets = () => {
    const tickets = useSelector(selectTickets).map((obj)=> <TicketItem ticketItem={obj}/>)
    return <div className={styles.tickets}>
        {tickets}
    </div>
}