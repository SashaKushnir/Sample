import React, {useEffect} from 'react'
import {History} from "./../../../redux/history/newHistoryReducer"
import s from "./OneDayPDF.module.css"
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {ProductCategoriesItem} from "../../../redux/newBanknote/newBanknoteReducer";
import {TicketItem} from "../../../redux/tickets/ticketsReducer";
import {ServiceCategoriesItem} from "../../../redux/services/servicesReducer";

type ItemProps = {

}



export const OneDayPDF: React.FC = () => {

    return <>
        <h1 className={s.title}>Звіт на день</h1>
        <table className={s.cover}>
            <tr>
                <td>ПІД замовника</td>

            </tr>
            <tr>
                <td>Номер телефону</td>

            </tr>
            <tr>
                <td colSpan={6}>
                    <h3 className={s.title}>Вхідні квитки</h3>
                </td>
            </tr>
            <tr className={s.info}>
                <td>Кількість</td>
                <td>Ціна</td>
                <td>Ціна зі знижкою</td>
                <td>СУМА</td>
                <td> - іменинник =</td>
                <td className={s.bold}></td>
            </tr>

            <tr className={s.bar}>
                <td colSpan={3}><h3 className={s.title}>Бар</h3></td>
                <td><h3 className={s.title}>Кількість</h3></td>
                <td><h3 className={s.title}>Ціна</h3></td>
                <td><h3 className={s.title}>Сума</h3></td>
            </tr>


            <tr className={s.tickets}>
                <td colSpan={5}><h3 className={s.title_right}>Всього</h3></td>

            </tr>
            <tr className={s.tickets}>
                <td colSpan={3}><h3 className={s.title}>Квитки</h3></td>
                <td><h3 className={s.title}>Кількість</h3></td>
                <td><h3 className={s.title}>Ціна</h3></td>
                <td><h3 className={s.title}>Сума</h3></td>
            </tr>

            <tr className={s.tickets}>
                <td colSpan={5}><h3 className={s.title_right}>Всього</h3></td>

            </tr>
            <tr className={s.tickets}>
                <td colSpan={6}></td>
            </tr>
            <tr className={s.tickets}>
                <td colSpan={5}><h3 className={s.title_right}>Загальна сума</h3></td>

            </tr>
        </table>
    </>
}
