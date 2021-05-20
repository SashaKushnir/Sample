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
        </>}

    </tr>

}

export const KitchenPDF: React.FC = (props) => {

    const banquet = useSelector((state: RootState) => state.common.banquet_pdf)
    // let total_menus = 0
    // let total_tickets = 0                never used!!!
    // let total_services = 0
    const menus = banquet?.product_order?.items.map((obj: ProductCategoriesItem, index) => {
        // total_menus += obj.amount as number * obj.price
        if(obj.category.name !== "Pizza")
            return <Item key={index} data={obj}/>
    })



    return <>
        <h1 className={s.title}>Анкета страв</h1>
        <h2 className={s.title}>Банкет: {banquet?.id}</h2>
        <div className={s.pidpys}></div>
        <table className={s.table1}>
            <tbody>
            <tr className={s.first_line}>
                <td>Дата: {banquet?.beg_datetime}</td>
                <td>Час: {banquet?.beg_datetime.slice(-8)} - {banquet?.end_datetime.slice(-8)}</td>
                <td>Кількість дітей з іменинником: {banquet?.child_guests_amount}</td>
                <td>Кількість дорослих: {banquet?.adult_guests_amount}</td>
            </tr>
            </tbody>
        </table>
        <table>
            <tbody>
            <tr>
                <td>ПІД</td>
                <td colSpan={2}>{banquet?.customer.name}</td>

            </tr>
            <tr>
                <td>Номер</td>
                <td colSpan={2}>{banquet?.customer.phone}</td>
            </tr>
            <tr>
                <td colSpan={3}><h3 className={s.title}>Кухня</h3></td>
            </tr>
            <tr>
                <td><h3 className={s.title}>Страва</h3></td>
                <td><h3 className={s.title}>Кількість</h3></td>
                <td><h3 className={s.title}>Коментар</h3></td>
            </tr>
            {menus}
            </tbody>
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

// <table className={s.cover}>
//     <tr>
//         <td >ПІД замовника</td>
//         <td >{banquet?.customer.name}</td>
//     </tr>
//     <tr>
//         <td >Номер телефону</td>
//         <td >{banquet?.customer.phone}</td>
//     </tr>
//     <tr>
//         <td >
//             <h3 className={s.title}>Вхідні квитки</h3>
//         </td>
//     </tr>
//
//     <tr>
//         <td ><h3 className={s.title}>Кухня</h3></td>
//         <td><h3 className={s.title}>Кількість</h3></td>
//         <td><h3 className={s.title}>Сума</h3></td>
//     </tr>
//     {menus}
//
//     <tr>
//         <td ><h3 className={s.title_right}>Всього</h3></td>
//         <td className={s.bold}>{total_menus}</td>
//     </tr>
//
//
//
//
//
//
//
//     <tr>
//         <td ></td>
//     </tr>
//     <tr>
//         <td ><h3 className={s.title_right}>Загальна сума</h3></td>
//         <td>{total_menus}</td>
//     </tr>
// </table>
