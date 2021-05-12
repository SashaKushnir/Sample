import React, {useEffect} from 'react'
import {History} from "./../../../redux/history/newHistoryReducer"
import s from "../pdfStyles.module.css"
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";


export const OneDayPDF: React.FC = () => {
    const banquets = useSelector((state: RootState) => state.common.oneDay_pdf)

    let advance = 0
    banquets?.map((obj:History) => {
       advance += obj.advance_amount
    })

    return <>
        <h1 className={s.title}>Звіт на день</h1>
        <div className={s.pid}></div>
        <p>Кількість банкетів: {banquets?.length}</p>
        <p>Загальна сума авансів: {advance}</p>
    </>
}
