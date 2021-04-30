import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { selectTickets } from "../../../selectors/selectCreateNew";
import styles from './CreateNewTickets.module.css'
import { TicketItemMap } from "./TicketItemMap";
import { ticketsActions } from "../../../redux/tickets/ticketsActions";
import {TicketItemMapShowAmount} from "./TicketItemMapShowAmount";
import { setTicketsT } from "../../../redux/tickets/ticketsThunks";

export const CreateNewTickets = () => {

    const ticketData  = useSelector(selectTickets)

    const d = useDispatch()

    useEffect(() => {
        let localTickets = JSON.parse(localStorage.getItem("tickets") || "[]");
        if(localTickets.length > 0)
            d(ticketsActions.setTicketInfo(localTickets));
        else
            d(setTicketsT())
    }, [])

    useEffect(()=> {
        if(ticketData)
        localStorage.setItem("tickets", JSON.stringify(ticketData))
    })

    let tickets, selectedTickets
    if(ticketData) {
        tickets = ticketData.map((obj, index) =>
        <TicketItemMap key={index} showAmount={false} ticketItem={obj}/>)
        selectedTickets = ticketData.map((obj, index) =>
            <TicketItemMapShowAmount key={index} showAmount={true} ticketItem={obj}/>)
    }
    return <div className={styles.main}>
        <div className={styles.basket}>
            {selectedTickets}
        </div>
        <div className={styles.tickets}>
            {tickets}
        </div>
    </div>
}

