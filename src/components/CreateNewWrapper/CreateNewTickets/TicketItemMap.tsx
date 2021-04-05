import React from 'react'

import styles from './TicketItemMap.module.css'
import { TicketImg } from "../../../common/compon/Ticket/TicketImg";
import { ProductCategoriesItem } from "../../../redux/newBanknote/newBanknoteReducer";

interface TicketItemProps {
    ticketItem: ProductCategoriesItem
    showAmount?: boolean
}

export const TicketItemMap: React.FC<TicketItemProps> = ({ticketItem,showAmount}) => {
    return <div>
        <div className={styles.ticket}>
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

    </div>
}
