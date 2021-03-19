import React from 'react'
import intertaimentimg from '../../images/entertainment placeholder.svg'
import s from './IntartaimentImg.module.css'

export const IntertaimentImg = () => {
    return <div className={s.item}>
        <img className={s.intertaimentimg} src={intertaimentimg} alt="Ticket img"/>
    </div>
}