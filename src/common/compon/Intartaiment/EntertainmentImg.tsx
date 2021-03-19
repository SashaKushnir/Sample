import React, { useState } from 'react'
import intertaimentimg from '../../images/entertainment placeholder.svg'
import s from './IntartaimentImg.module.css'
import { useDispatch } from "react-redux";
import { message } from "antd";
import { newBanknoteActions } from "../../../redux/newBanknote/newBanknoteActions";
import { ServiceCategoriesItem } from "../../../redux/services/servicesReducer";
import { servicesActions } from "../../../redux/services/servicesActions";

interface EntertainmentImgProps {
    entertainmentI: ServiceCategoriesItem
}
export const IntertaimentImg: React.FC<EntertainmentImgProps> = ({entertainmentI}) => {
    let [amount, setAmount]= useState(entertainmentI.amount?entertainmentI.amount:1)
    const d = useDispatch()
    const productI = {...entertainmentI}
    const info = () => {
        message.info('You have already selected this item',1);
    };
    const addProduct = () => {
        if(!entertainmentI.amount  ) {
            setAmount(amount + 1)
            productI.amount = amount
            d(servicesActions.addEntertainmentItem(entertainmentI, null))
        } else {
            info()
        }
    }
    return <div className={s.item}>
        <img className={s.intertaimentimg} src={intertaimentimg} alt="Ticket img"/>
    </div>
}