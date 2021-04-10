import React from 'react'
import s from './BlankHeader.module.css'
import {useSelector} from "react-redux";
import {selectUsers} from "../../../selectors/selectCreateNew";

export const BlankHeader = () => {

    const customers = useSelector(selectUsers)
    console.log(customers)
    const customerInfo = customers.selectedCustomer
    return <div>
        <div className={s.item}>
            <div className={s.banquetWithName}><b>Banquet Name:</b></div>
            <div>Optional description</div>
            <hr className={s.solid}/>
        </div>
        <div className={s.item}>
            <div>Customer: {customerInfo?.name}</div>
            <hr className={s.solid}/>
        </div>
    </div>
}
