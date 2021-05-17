import React from "react";
import styles from "../ItemsStyles.module.css";
import {TicketItem} from "../../../redux/tickets/ticketsReducer";

type Items = {
    item: TicketItem
}

export const TicketsOrder: React.FC<Items> = ({item}) => {
    return <div className={styles.dish}>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.amount_price}>
            <div className={styles.amount}>x{item.amount}</div>
            <div className={styles.price}>${item.price}</div>
        </div>
    </div>
}

