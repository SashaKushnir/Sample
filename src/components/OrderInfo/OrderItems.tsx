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


export const OrderItems: React.FC = (props) => {
    const menuData = JSON.parse(localStorage.getItem("menus") || "[]");
    const ticketsData = JSON.parse(localStorage.getItem("tickets") || "[]");
    const servicesData = JSON.parse(localStorage.getItem("services") || "[]");
    const menus = menuData.map((obj: MenuItem) =>
        obj.products.filter((product: ProductCategoriesItem) => product.showAmount).map((item, index) =>
            <ProductsOrder item={item} key={index}/>
        )
    )
    const tickets = ticketsData?.filter((obj: ProductCategoriesItem) => obj.showAmount).map((item: ProductCategoriesItem) =>
        <TicketsOrder item={item}/>
    )

    const services = servicesData?.filter((obj: ServiceCategoriesItem) => obj.showAmount).map((item: ServiceCategoriesItem) =>
        <ServicesOrder item={item}/>
    )
    let menu_price = 0
    let tickets_price = 0
    let services_price = 0
    menuData.map((obj: MenuItem) =>
        obj.products.filter((product: ProductCategoriesItem) => product.showAmount).map((item, index) => {
                if (item.amount)
                    menu_price = menu_price + (item.amount as number * item.price)
            else console.log("amount null")
            }
        )
    )
    ticketsData?.filter((obj: ProductCategoriesItem) => obj.showAmount).map((item: ProductCategoriesItem) => {
            tickets_price += item.price
        }
    )

    servicesData?.filter((obj: ServiceCategoriesItem) => obj.showAmount).map((item: ServiceCategoriesItem) => {
            if (item.amount && item.once_paid_price)
                services_price = services_price + (item.amount as number * item.once_paid_price as number)
        }
    )
    return <div className={s.order}>
        <div>{menus}</div>
        {menu_price}123
        <div>{tickets}</div>{tickets_price}
        <div>{services}</div>
        {services_price}
    </div>
}
