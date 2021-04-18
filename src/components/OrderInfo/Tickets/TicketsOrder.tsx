import React from "react";
import {useDispatch} from "react-redux";
import {ProductCategoriesItem} from "../../../redux/newBanknote/newBanknoteReducer";
import styles from "../../CreateNewWrapper/CreateNewTickets/TicketItemMap.module.css";
import {TicketImg} from "../../../common/compon/Ticket/TicketImg";
import {TicketItem} from "../../../redux/tickets/ticketsReducer";

type Items = {
    item: TicketItem
}

export const TicketsOrder: React.FC<Items> = ({item}) => {
    const d = useDispatch()
    return <div>
        <div className={styles.ticket}>
            <div className={styles.img}>
                <TicketImg ticketI={item}/>
            </div>
            <div className={styles.item}>
                <div className={styles.title}>
                    <div className={styles.name}>
                        {item.name}
                    </div>
                    <div className={styles.price}>
                        {item.price}$
                    </div>
                </div>
                <div className={styles.desc}>
                    Amount {item.amount}
                </div>
            </div>
        </div>

    </div>
}

