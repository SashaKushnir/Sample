import React from 'react'
import s from "./OneBanquet.module.css"
import {History} from "./../../../../redux/history/newHistoryReducer"
import {ProductCategoriesMyItem} from "./../../../CreateNewWrapper/CreateNewMenus/MenuList/DishItem/ProductCategoriesMyItem"
import {ProductCategoriesMyItemBasket} from "../../../CreateNewWrapper/CreateNewMenus/MenuList/DishItem/ProductCategoriesMyItemBasket";
import {ProductCategoriesItem} from "../../../../redux/newBanknote/newBanknoteReducer";
import {TicketItemMap} from "./../../../CreateNewWrapper/CreateNewTickets/TicketItemMap"
import {ServiceCategoriesItem} from "../../../../redux/services/servicesReducer";
import {ServiceCategoriesI} from "./../../../CreateNewWrapper/CreateNewServices/ServiceCategoriesI"
import {ProductsOrder} from "../../../OrderInfo/Products/ProductsOrder";
import {TicketsOrder} from "../../../OrderInfo/Tickets/TicketsOrder";
import {ServicesOrder} from "../../../OrderInfo/Services/ServicesOrder";
import {deleteHistoryT} from "../../../../redux/history/newHistoryThunk";
import {useDispatch} from "react-redux";
import {selectHistory} from "../../../../selectors/selectCreateNew";
import {historyActions} from "../../../../redux/history/newHistoryAction";

interface BanquetProps {
    data: History
}




export const OneBanquet: React.FC<BanquetProps> = (props) => {
    const d = useDispatch()
    const data = props.data
    let products = null
    if(props.data.product_order !== null)
        products = props.data.product_order.items.map((obj:ProductCategoriesItem, index:number) =>
        <ProductsOrder item={obj}/>)

    let tickets = null
    if(props.data.ticket_order !== null)
        tickets = props.data.ticket_order.items.map((obj:ProductCategoriesItem) =>
        <TicketsOrder item={obj}/>)

    let services = null
    if(props.data.service_order !== null)
        services = props.data.service_order.items.map((obj:ServiceCategoriesItem) =>
            <ServicesOrder item={obj}/>)

    const Delete = () => {
        if (window.confirm("Delete this banquet? It can not be restored!!!")) {
            d(deleteHistoryT(data.id,localStorage.getItem("api_token") as string))
            d(historyActions.deleteOneHistoty(data.id))
        }
    }

    return <div className={s.main}>
        <div className={s.first}>
            <button onClick={Delete}>Delete</button>
            <div className={s.line1}>
                <div className={s.name}>
                    {data.name}
                </div>
                <div className={s.start}>
                    {data.beg_datetime}
                </div>
            </div>
            <div className={s.line2}>
                <div className={s.total}>
                    {data.total}$
                </div>
                <div className={s.end}>
                    {data.end_datetime}
                </div>
            </div>
            <div className={s.desc}>
                {data.description}
            </div>
        </div>
        <div className={s.second}>
            <div className={s.products}>
                <div className={s.title}>
                    Products
                </div>

                <div className={s.products_items}>
                    {products}
                </div>
            </div>
            <div className={s.tickets}>
                <div className={s.title}>
                    Tickets
                </div>
                <div className={s.tickets_items}>
                    {tickets}
                </div>
            </div>
            <div className={s.enter}>
                <div className={s.title}>
                    Enrtainments
                </div>

                <div className={s.enter_items}>
                    {services}
                </div>
            </div>
        </div>

    </div>
}
