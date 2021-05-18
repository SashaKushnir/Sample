import React from 'react'
import {CommentItem} from "./../../../redux/history/newHistoryReducer"
import s from "../pdfStyles.module.css"
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {ProductCategoriesItem} from "../../../redux/newBanknote/newBanknoteReducer";
import {TicketItem} from "../../../redux/tickets/ticketsReducer";
import {ServiceCategoriesItem} from "../../../redux/services/servicesReducer";
import {Pidpus} from "../PDF";

type ItemProps = {
    data?: ProductCategoriesItem | TicketItem
    services?: ServiceCategoriesItem
}


const Item: React.FC<ItemProps> = (props) => {

    return <tr>

        {props.data && <>
            <td className={s.per33}>{props.data?.name}</td>
            <td >{props.data?.amount}</td>
            <td><ul className={s.left}>{props.data.comments.map((obj:CommentItem, index) =>
                <li key={index}>{obj.text}</li>)}</ul></td>
        </>}
        {props.services && <>
            <td >{props.services?.name}</td>
            <td >{props.services?.amount}</td>
            <td>{props.services?.amount as number * props.services.once_paid_price}</td>
            <td><ul className={s.left}>{props.services.comments.map((obj:CommentItem, index) =>
                <li key={index}>{obj.text}</li>)}</ul></td>
        </>}

    </tr>

}

export const ServicesPDF: React.FC = (props) => {

    const banquet = useSelector((state: RootState) => state.common.banquet_pdf)
    // let total_menus = 0                                      never used please remove or use
    const menus = banquet?.service_order?.items.forEach((obj: ServiceCategoriesItem, index) => {
        // total_menus += obj.amount as number * obj.price      never used please remove or use
        if(obj.category.name === "Pizza")
            return <Item key={index} services={obj}/>
    })



    return <>
        <h1 className={s.title}>Анкета розваг</h1>
        <div className={s.pidpys}></div>
        <table className={s.table1}>
            <tr className={s.first_line}>
                <td>Дата: {banquet?.beg_datetime}</td>
                <td>Час: {banquet?.beg_datetime}</td>
                <td>Кількість дітей з іменинником: {banquet?.child_guests_amount}</td>
                <td>Кількість дорослих: {banquet?.adult_guests_amount}</td>
            </tr>
        </table>
        <table>
            <tr>
                <td>ПІД</td>
                <td colSpan={3}>{banquet?.customer.name}</td>

            </tr>
            <tr>
                <td>Номер</td>
                <td colSpan={3}>{banquet?.customer.phone}</td>
            </tr>
            <tr>
                <td colSpan={4}><h3 className={s.title}>Кухня</h3></td>
            </tr>
            <tr>
                <td><h3 className={s.title}>Послуга</h3></td>
                <td><h3 className={s.title}>Кількість</h3></td>
                <td><h3 className={s.title}>Ціна</h3></td>
                <td><h3 className={s.title}>Коментар</h3></td>
            </tr>
            {menus}
        </table>
        {/*<table className={s.table2}>*/}
        {/*    <tr className={s.first_line}>*/}
        {/*        <td colSpan={2}><h3 className={s.title}>Аванс</h3></td>*/}
        {/*        <td>{banquet?.advance_amount}</td>*/}
        {/*        <td colSpan={2}><h3 className={s.title}>Залишок</h3></td>*/}
        {/*        <td>{(total_tickets + total_menus + total_services) - (banquet?.advance_amount as number)}</td>*/}
        {/*    </tr>*/}
        {/*</table>*/}
        <Pidpus/>
    </>
}
