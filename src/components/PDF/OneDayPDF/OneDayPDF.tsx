import React, {useEffect} from 'react'
import {History} from "./../../../redux/history/newHistoryReducer"
import s from "../pdfStyles.module.css"
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";


export const OneDayPDF: React.FC = () => {
    const banquets = useSelector((state: RootState) => state.common.oneDay_pdf)
    const date = useSelector((state: RootState) => state.common.pdf_date)
    let advance = 0
    let total = 0
    banquets?.forEach((obj:History) => {
       advance += obj.advance_amount
    })
    banquets?.forEach((obj:History) => {
        total += obj.total
    })
    const days = ["Неділя","Понеділок","Вівторок","Середа","Четрер","П'ятниця","Субота","Неділя"]
    console.log(new Date(date.slice(0,10)).getDay())


    return <>
        <h1 className={s.title}>Звіт на день </h1>
        <h2 className={s.title}>{days[new Date(date.slice(0,10)).getDay()]}, {banquets ? banquets[0].beg_datetime.slice(0,10):"none"}</h2>
        <div className={s.pid}></div>
        <p>Створено банкетів: {banquets?.length}</p>
        <p>Загальна сума: {total}</p>
        <p>Загальна сума авансів: {advance}</p>
    </>
}
