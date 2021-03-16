import React from 'react'
import {Determine, PeriodArray, PeriodItem, Ticket} from "../../../redux/tickets/ticketsReducer";
import {DataItem} from "./DataItem";
import styles from './TicketItemMap.module.css'
import {TicketImg} from "../../../common/compon/Ticket/TicketImg";

interface TicketItemProps {
    periodArray: PeriodArray
}

export const TicketItemMap: React.FC<TicketItemProps> = ({periodArray}) => {
    const periodItem = Object.keys(periodArray.period.beg_datetime).map((val) =>
        <DataItem key={val} keyVal={val} value={periodArray.period.beg_datetime[val as keyof Determine]}/>)
    return <div>
        <TicketImg/>
        <div className={styles.item}>
            <div className={styles.title}>
                <div className={styles.name}>
                    {periodArray.name}
                </div>
                <div className={styles.price}>
                    {periodArray.price} грн.
                </div>

            </div>
            <div className={styles.desc}>
                {periodArray.description}
            </div>
        </div>
        {/*{periodItem}*/}
    </div>
}