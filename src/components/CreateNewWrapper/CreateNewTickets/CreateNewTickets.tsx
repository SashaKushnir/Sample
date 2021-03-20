import React from 'react'
import { useSelector } from "react-redux";
import { selectTickets } from "../../../selectors/selectCreateNew";
import styles from './CreateNewTickets.module.css'
import { TicketItemMap } from "./TicketItemMap";

export const CreateNewTickets = () => {

    const tickets = useSelector(selectTickets).map((obj, index)=>
        <TicketItemMap key={index}  showAmount={false} ticketItem={obj}/>)

    const selectedTickets = useSelector(selectTickets).map((obj, index)=>
        <TicketItemMap key={index} showAmount={true} ticketItem={obj}/>)

    return <div className={styles.main}>
        <div className={styles.basket}>
            {selectedTickets}
        </div>
        <div className={styles.tickets}>
            {tickets}
        </div>

    </div>
}

