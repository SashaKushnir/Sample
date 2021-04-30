import React from 'react'

import styles from './TicketItemMap.module.css'
import { TicketImg } from "../../../common/compon/Ticket/TicketImg";
import { ProductCategoriesItem } from "../../../redux/newBanknote/newBanknoteReducer";
import {TicketItem} from "../../../redux/tickets/ticketsReducer";

interface TicketItemProps {
    ticketItem: TicketItem
    showAmount?: boolean
}

export const TicketItemMap: React.FC<TicketItemProps> = ({ticketItem,showAmount}) => {
    return <div className={styles.ticket}>
            <div className={styles.img}>
                <TicketImg ticketI={ticketItem}/>
            </div>
            <div className={styles.item}>
                <div className={styles.title}>
                    <div className={styles.name}>
                        {ticketItem.name}
                    </div>
                    <div className={styles.price}>
                        {ticketItem.price}$
                    </div>
                </div>
                <div className={styles.desc}>
                    {ticketItem.description}
                </div>
            </div>
        </div>


}
