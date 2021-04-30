import React, { useState } from 'react'
import ticketimg from '../../images/TicketIcon.png'
import s from './TicketImg.module.css'
import { useDispatch } from "react-redux";
import { message } from "antd";
import { servicesActions } from "../../../redux/services/servicesActions";
import { ProductCategoriesItem } from "../../../redux/newBanknote/newBanknoteReducer";
import { ticketsActions } from "../../../redux/tickets/ticketsActions";
import {TicketItem} from "../../../redux/tickets/ticketsReducer";

interface TicketImgProps {
    ticketI: TicketItem
}
export const TicketImg:React.FC<TicketImgProps> = ({ticketI}) => {
    let [amount, setAmount]= useState(ticketI.amount?ticketI.amount:1)
    const d = useDispatch()
    const productI = {...ticketI}
    const info = () => {
        message.info('You have already selected this item',1);
    };
    const addTicket = () => {
        if(!ticketI.showAmount) {
            setAmount(amount as number + 1)
            productI.amount = amount
            d(ticketsActions.addTicketItem(ticketI,null))
        } else {
            info()
        }
    }
    return <div onClick={addTicket} className={s.item}>
        <img className={s.ticketimg} src={ticketimg} alt="Ticket img"/>
    </div>
}
