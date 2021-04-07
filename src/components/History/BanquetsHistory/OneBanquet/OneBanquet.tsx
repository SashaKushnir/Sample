import React from 'react'
import s from "./OneBanquet.module.css"
import {History} from "./../../../../redux/history/newHistoryReducer"
import {ProductCategoriesMyItem} from "./../../../CreateNewWrapper/CreateNewMenus/MenuList/DishItem/ProductCategoriesMyItem"
import {ProductCategoriesMyItemBasket} from "../../../CreateNewWrapper/CreateNewMenus/MenuList/DishItem/ProductCategoriesMyItemBasket";
import {ProductCategoriesItem} from "../../../../redux/newBanknote/newBanknoteReducer";
import {TicketItemMap} from "./../../../CreateNewWrapper/CreateNewTickets/TicketItemMap"
import {ServiceCategoriesItem} from "../../../../redux/services/servicesReducer";
import {ServiceCategoriesI} from "./../../../CreateNewWrapper/CreateNewServices/ServiceCategoriesI"

interface BanquetProps {
    data: History
}

export const OneBanquet: React.FC<BanquetProps> = (props) => {

    const data = props.data
    let products = null
    if(props.data.product_order !== null)
        products = props.data.product_order.items.map((obj:ProductCategoriesItem, index:number) =>
        <ProductCategoriesMyItem keyVal={index} product_categoriesItem={obj}/>)

    let tickets = null
    if(props.data.ticket_order !== null)
        tickets = props.data.ticket_order.items.map((obj:ProductCategoriesItem) =>
        <TicketItemMap ticketItem={obj}/>)

    let services = null
    if(props.data.service_order !== null)
        services = props.data.service_order.items.map((obj:ServiceCategoriesItem) =>
            <ServiceCategoriesI serviceItem={obj}/>)

    return <div className={s.main}>
        <div className={s.first}>
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
                Products
                <div className={s.products_items}>
                    {products}
                </div>
            </div>
            <div className={s.tickets}>
                Tickets
                <div className={s.tickets_items}>
                    {tickets}
                </div>
            </div>
            <div className={s.enter}>
                Enrtainments
                <div className={s.enter_items}>
                    {services}
                </div>
            </div>
        </div>
    </div>
}
