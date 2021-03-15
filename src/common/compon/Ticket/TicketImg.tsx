import React from 'react'
import ticketimg from '../../images/TicketIcon.png'
import s from './TicketImg.module.css'

export const TicketImg = () => {
    return <div className={s.item}>
        <img className={s.ticketimg} src={ticketimg} alt="Ticket img"/>
    </div>
}