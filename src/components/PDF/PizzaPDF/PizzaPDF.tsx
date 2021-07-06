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
    data: ProductCategoriesItem

}


const Item: React.FC<ItemProps> = (props) => {
    return <tr>
            <td className={s.per33}>{props.data?.name}</td>
            <td >{props.data?.amount}</td>
            <td>
                <ul className={s.left}>{props.data.comments.map((obj:CommentItem, index) =>
                <li key={index}>{obj.text}</li>)}</ul>
            </td>
    </tr>
}

export const PizzaPDF: React.FC = (props) => {

    const banquet = useSelector((state: RootState) => state.common.banquet_pdf)
    const menus = banquet?.product_order?.items.map((obj: ProductCategoriesItem, index) => {
        //Pizza, Піцца, Піца, піцца, піца
        if(obj.category.name === "Pizza" || obj.category.name === "Піцца" || obj.category.name === "Піца" || obj.category.name === "піцца" || obj.category.name === "піца")
            return <Item key={index} data={obj}/>
    })



    return <>
        <h1 className={s.title}>Анкета піци</h1>
        <div className={s.pidpys}></div>
        <table className={s.table1}>
            <tr className={s.first_line}>
                <td>Дата: {banquet?.beg_datetime}</td>
                <td>Час: {banquet?.beg_datetime.slice(-8)} - {banquet?.end_datetime.slice(-8)}</td>
                <td>Кількість дітей з іменинником: {banquet?.child_guests_amount}</td>
                <td>Кількість дорослих: {banquet?.adult_guests_amount}</td>
            </tr>
        </table>
        <table>
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
        </table>
        <Pidpus/>
    </>
}
