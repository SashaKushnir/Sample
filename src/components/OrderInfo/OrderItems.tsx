import React, {useEffect} from 'react'
import s from './OrderItems.module.css'
import {MenuItem, Product_categories, ProductCategoriesItem} from "../../redux/newBanknote/newBanknoteReducer";
import {ServiceCategoriesItem, ServicesArray} from "../../redux/services/servicesReducer";
import {useDispatch, useSelector} from "react-redux";
import {BanquetType} from "../../redux/formPostObject/createObjReducer";
import {ProductsOrder} from "./Products/ProductsOrder";
import {TicketsOrder} from "./Tickets/TicketsOrder";
import {ServicesOrder} from "./Services/ServicesOrder";
import {selectMenuKitchen, selectServices, selectTickets} from "../../selectors/selectCreateNew";
import {banquetActions} from "../../redux/banquetInfo/banquetInfoActions";
import {TicketItem} from "../../redux/tickets/ticketsReducer";


export const OrderItems: React.FC = (props) => {
    const d = useDispatch()
    const menuData = useSelector(selectMenuKitchen)
    // const ticketsData = JSON.parse(localStorage.getItem("tickets") || "[]");
    const ticketsData = useSelector(selectTickets)
    // const servicesData = JSON.parse(localStorage.getItem("services") || "[]");
    const servicesData = useSelector(selectServices)
    const menus = menuData?.map((obj: MenuItem) =>
        obj.products.filter((product: ProductCategoriesItem) => product.showAmount).map((item, index) =>
            <ProductsOrder item={item} key={index}/>
        )
    )
    const tickets = ticketsData?.filter((obj: TicketItem) => obj.showAmount).map((item: TicketItem, index) =>
        <TicketsOrder key={index} item={item}/>
    )

    const services = servicesData?.filter((obj: ServiceCategoriesItem) => obj.showAmount).map((item: ServiceCategoriesItem, index) =>
        <ServicesOrder key={index} item={item}/>
    )
    let menu_price = 0
    let tickets_price = 0
    let services_price = 0
    menuData?.map((obj: MenuItem) =>
        obj.products.filter((product: ProductCategoriesItem) => product.showAmount).map((item, index) => {
                menu_price = menu_price + (item.amount as number * item.price)
            }
        )
    )
    ticketsData?.filter((obj: TicketItem) => obj.amount && obj.showAmount).map((item: TicketItem) => {
            tickets_price = tickets_price + (item.amount as number * item.price)
        }
    )

    servicesData?.filter((obj: ServiceCategoriesItem) => obj.showAmount).map((item: ServiceCategoriesItem) => {
            if (item.amount && item.once_paid_price)
                services_price = services_price + (item.amount as number * item.once_paid_price as number)
        }
    )
    const total = menu_price + tickets_price + services_price
    d(banquetActions.setTotalPrice(total))
    return <div>
        <div className={s.order}>
            <div className={s.block}>
                <div className={s.list}>{menus}</div>
                <div className={s.total}>Ціна меню: {menu_price}$</div>
            </div>
            <div className={s.block}>
                <div className={s.list}>{tickets}</div>
                <div className={s.total}>Ціна квитків:{tickets_price}$</div>
            </div>
            <div className={s.block}>

                <div className={s.list}>{services}</div>
                <div className={s.total}>Ціна сервісів: {services_price}$</div>
            </div>
        </div>
        <div className={s.total}>
            Total price: {total}
        </div>
    </div>
}
