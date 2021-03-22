import React, { ChangeEvent, useEffect, useState } from 'react'

import styles from './TicketItemMap.module.css'
import { TicketImg } from "../../../common/compon/Ticket/TicketImg";
import { ProductCategoriesItem } from "../../../redux/newBanknote/newBanknoteReducer";
import { useDispatch } from "react-redux";
import _uniqueId from "lodash/uniqueId";
import { NumericInput } from "../../../common/compon/InputNumber/InputNumber";
import { ticketsActions } from "../../../redux/tickets/ticketsActions";

interface TicketItemProps {
    ticketItem: ProductCategoriesItem
    showAmount?: boolean
}

export const TicketItemMapShowAmount: React.FC<TicketItemProps> = ({ticketItem,showAmount}) => {

    const textInput = React.createRef<HTMLInputElement>()
    const d = useDispatch()
    useEffect(() => {
        if (ticketItem.showAmount) {
            textInput.current?.focus()
        }
    }, [ticketItem.showAmount])
    const deleteItem = () => {
        d(ticketsActions.deleteFullTicketItem(ticketItem))
    }
    const changeCurT = (value: number) => {
        d(ticketsActions.addTicketItem(ticketItem, value))
    }
    const changeCurr = (e: ChangeEvent<HTMLInputElement>) => {
        d(ticketsActions.addTicketItem(ticketItem, e.target.value as any))
    }


    return <div>{ticketItem.showAmount && <div className={styles.ticket}>
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
            <button onClick={deleteItem} className={styles.btn}>Delete</button>
            <div className={styles.input}>
                <label htmlFor={"def"} className={styles.text}>Amount</label>
                <input ref={textInput} value={ticketItem.amount ? String(ticketItem.amount) : ""} onChange={changeCurr}/>
            </div>
            <div className={styles.desc}>
                {/*{ticketItem.description}*/}
            </div>
        </div>
    </div>}
    </div>
}