import React, {useEffect} from 'react'
import {History} from "./../../../redux/history/newHistoryReducer"
import s from "../pdfStyles.module.css"
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {ProductCategoriesItem} from "../../../redux/newBanknote/newBanknoteReducer";
import {TicketItem} from "../../../redux/tickets/ticketsReducer";
import {ServiceCategoriesItem} from "../../../redux/services/servicesReducer";
import {date} from "yup";
import {Pidpus} from "../PDF";

type ItemProps = {
    data?: ProductCategoriesItem | TicketItem
    services?: ServiceCategoriesItem
}


const Item: React.FC<ItemProps> = (props) => {

    return <tr>

        {props.data && <>
            <td colSpan={3} className={s.per50}>{props.data?.name}</td>
            <td className={s.per16}>{props.data?.amount}</td>
            <td className={s.per16}>{props.data.price}</td>
            <td>{props.data?.amount as number * props.data.price}</td>
        </>}
        {props.services && <>
            <td colSpan={3} className={s.per50}>{props.services?.name}</td>
            <td className={s.per16}>{props.services?.amount}</td>
            <td className={s.per16}>{props.services.once_paid_price}</td>
            <td>{props.services?.amount as number * props.services.once_paid_price}</td>
        </>}

    </tr>

}

export const OneBanquetPDF: React.FC = (props) => {

    const banquet = useSelector((state: RootState) => state.common.banquet_pdf)
    let total_menus = 0
    let total_tickets = 0
    let total_services = 0
    const menus = banquet?.product_order?.items.map((obj: ProductCategoriesItem) => {
        total_menus += obj.amount as number * obj.price
        return <Item data={obj}/>
    })

    const tickets = banquet?.ticket_order?.items.map((obj: TicketItem) => {
        total_tickets += obj.amount as number * obj.price
        return <Item data={obj}/>
    })

    const services = banquet?.service_order?.items.map((obj: ServiceCategoriesItem) => {
        total_services += obj.amount as number * obj.once_paid_price
        return <Item services={obj}/>

    })

    return <>
        <h1 className={s.title}>Анкета на банкет</h1>
        <div className={s.pidpys}></div>
        <table className={s.table1}>
            <tr className={s.first_line}>
                <td>Дата: {banquet?.beg_datetime}</td>
                <td>Час: {banquet?.beg_datetime}</td>
                <td>Кількість дітей з іменинником: {banquet?.child_guests_amount}</td>
                <td>Кількість дорослих: {banquet?.adult_guests_amount}</td>
            </tr>
        </table>
        <table className={s.cover}>
            <tr>
                <td colSpan={1}>ПІД замовника</td>
                <td colSpan={5}>{banquet?.customer.name}</td>
            </tr>
            <tr>
                <td colSpan={1}>Номер телефону</td>
                <td colSpan={5}>{banquet?.customer.phone}</td>
            </tr>
            <tr>
                <td colSpan={6}>
                    <h3 className={s.title}>Вхідні квитки</h3>
                </td>
            </tr>

            <tr className={s.tickets}>
                <td colSpan={3}><h3 className={s.title}>Кухня</h3></td>
                <td><h3 className={s.title}>Кількість</h3></td>
                <td><h3 className={s.title}>Ціна</h3></td>
                <td><h3 className={s.title}>Сума</h3></td>
            </tr>
            {menus}

            <tr className={s.tickets}>
                <td colSpan={5}><h3 className={s.title_right}>Всього</h3></td>
                <td className={s.bold}>{total_menus}</td>
            </tr>
            <tr className={s.tickets}>
                <td colSpan={3}><h3 className={s.title}>Квитки</h3></td>
                <td><h3 className={s.title}>Кількість</h3></td>
                <td><h3 className={s.title}>Ціна</h3></td>
                <td><h3 className={s.title}>Сума</h3></td>
            </tr>
            {tickets}
            <tr className={s.tickets}>
                <td colSpan={5}><h3 className={s.title_right}>Всього</h3></td>
                <td className={s.bold}>{total_tickets}</td>
            </tr>


            <tr className={s.tickets}>
                <td colSpan={3}><h3 className={s.title}>Розваги</h3></td>
                <td><h3 className={s.title}>Кількість</h3></td>
                <td><h3 className={s.title}>Ціна</h3></td>
                <td><h3 className={s.title}>Сума</h3></td>
            </tr>
            {services}
            <tr className={s.tickets}>
                <td colSpan={5}><h3 className={s.title_right}>Всього</h3></td>
                <td className={s.bold}>{total_services}</td>
            </tr>


            <tr className={s.tickets}>
                <td colSpan={6}></td>
            </tr>
            <tr className={s.tickets}>
                <td colSpan={5}><h3 className={s.title_right}>Загальна сума</h3></td>
                <td>{total_tickets + total_menus + total_services}</td>
            </tr>
        </table>
        <table className={s.table2}>
            <tr className={s.first_line}>
                <td colSpan={2}><h3 className={s.title}>Аванс</h3></td>
                <td>{banquet?.advance_amount}</td>
                <td colSpan={2}><h3 className={s.title}>Залишок</h3></td>
                <td>{(total_tickets + total_menus + total_services) - (banquet?.advance_amount as number)}</td>
            </tr>
        </table>
       <Pidpus/>
    </>
}
