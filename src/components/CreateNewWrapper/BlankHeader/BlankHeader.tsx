import React, {ChangeEvent} from 'react'
import s from './BlankHeader.module.css'
import {useDispatch, useSelector} from "react-redux";
import {selectUsers} from "../../../selectors/selectCreateNew";
import {banquetActions} from "./../../../redux/banquetInfo/banquetInfoActions";

export const BlankHeader = () => {

    const d = useDispatch()

    const setName = (e: ChangeEvent<HTMLInputElement>) => {
        d(banquetActions.setName(e.target.value as any))
    }



    const customers = useSelector(selectUsers)
    console.log(customers)
    const customerInfo = customers.selectedCustomer
    return <div>
        <div className={s.item}>
            <div className={s.banquetWithName}><input className={s.input} placeholder={"Banquet name"} /></div>
            <div><textarea className={s.input} placeholder={"Description"}></textarea></div>
            <hr className={s.solid}/>
        </div>
        <div className={s.item}>
            <div>Customer: {customerInfo?.name}</div>
            <hr className={s.solid}/>
        </div>
    </div>
}
