import React from 'react'
import customerI from '../../images/customer.png'
import s from './styles.module.css'

export const CustomerIcon:React.FC = () => {

    return <img className={s.Icon_customer} src={customerI} alt="Customer img"/>
}
