import React from 'react'
import {TicketCategoriesItem} from "../../../redux/tickets/ticketsReducer";
import {TicketItemMap} from "./TicketItemMap";
import styles from './TicketItem.module.css'
import {TicketImg} from "../../../common/compon/Ticket/TicketImg";

interface TicketItemProps {
    ticketItem: TicketCategoriesItem
}

export const TicketItem: React.FC<TicketItemProps> = ({ticketItem}) => {
    const ticketItemMap = ticketItem.tickets.map((obj) => <TicketItemMap periodArray={obj}/>)
    return <div>

        <div>
            <div className={styles.name}>
                {ticketItem.name}
            </div>



            <div className={styles.desc}>
                ({ticketItem.description})
            </div>

        </div>
        <div className={styles.ticket}>

            {ticketItemMap}
        </div>
    </div>
}