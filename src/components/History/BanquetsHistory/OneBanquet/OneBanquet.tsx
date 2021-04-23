import React, {useState} from 'react'
import s from "./OneBanquet.module.css"
import {History} from "./../../../../redux/history/newHistoryReducer"
import {MenuItem, ProductCategoriesItem} from "../../../../redux/newBanknote/newBanknoteReducer";
import {ServiceCategoriesItem} from "../../../../redux/services/servicesReducer";
import {ProductsOrder} from "../../../OrderInfo/Products/ProductsOrder";
import {TicketsOrder} from "../../../OrderInfo/Tickets/TicketsOrder";
import {ServicesOrder} from "../../../OrderInfo/Services/ServicesOrder";
import {deleteHistoryT} from "../../../../redux/history/newHistoryThunk";
import {useDispatch, useSelector} from "react-redux";
import {selectMenuKitchen, selectServices, selectTickets} from "../../../../selectors/selectCreateNew";
import {TicketItem} from "../../../../redux/tickets/ticketsReducer";
import {NavLink} from 'react-router-dom';
import {newBanknoteActions} from "../../../../redux/newBanknote/newBanknoteActions";
import {ticketsActions} from "../../../../redux/tickets/ticketsActions";
import {servicesActions} from "../../../../redux/services/servicesActions";
import {banquetActions} from "../../../../redux/banquetInfo/banquetInfoActions";
import {PrintIcon} from "../../../../common/compon/HistoryIcons/PrintIcon";
import {DeleteIcon} from "../../../../common/compon/HistoryIcons/DeleteIcon";
import {HideIcon} from "../../../../common/compon/HistoryIcons/HideIcon";
import {EditIcon} from "../../../../common/compon/HistoryIcons/EditIcon";
import {commonActions} from "../../../../redux/forCommon/forCommonActions";

interface BanquetProps {
    data: History
}


export const OneBanquet: React.FC<BanquetProps> = (props) => {
    const d = useDispatch()
    const [hideProducts, setHideProducts] = useState(false)
    //const [hideAll, setHideAll] = useState(false)
    const data = props.data
    let products = null
    if (props.data.product_order !== null)
        products = props.data.product_order.items.map((obj: ProductCategoriesItem, index: number) =>
            <ProductsOrder item={obj}/>)

    let tickets = null
    if (props.data.ticket_order !== null)
        tickets = props.data.ticket_order.items.map((obj: TicketItem) =>
            <TicketsOrder item={obj}/>)

    let services = null
    if (props.data.service_order !== null)
        services = props.data.service_order.items.map((obj: ServiceCategoriesItem) =>
            <ServicesOrder item={obj}/>)

    const Delete = () => {
        if (window.confirm("Delete this banquet? It can not be restored!!!")) {
            d(deleteHistoryT(data.id, localStorage.getItem("api_token") as string))
        }
    }
    const menus = useSelector(selectMenuKitchen)
    const tickets1 = useSelector(selectTickets)
    const services1 = useSelector(selectServices)
    const ClearAllShowAmount = () => {
        d(commonActions.banquetModeToggle(true))
        menus?.map((obj: MenuItem, index: number) => {
            obj.products.map((item: ProductCategoriesItem, index: number) => {
                d(newBanknoteActions.deleteFullItem(item))
                if (props.data.product_order)
                    props.data.product_order.items.map((history_item: ProductCategoriesItem, index: number) => {
                        if (history_item.id === item.id) {
                            d(newBanknoteActions.addMenuItem(history_item, history_item.amount ? history_item.amount as number : 0))
                        }
                    })
            })
        })

        tickets1?.map((obj: TicketItem) => {
            d(ticketsActions.deleteFullTicketItem(obj))
            if (props.data.ticket_order !== null)
                props.data.ticket_order.items.map((item: TicketItem) => {
                    if (obj.id === item.id) {
                        d(ticketsActions.addTicketItem(item, item.amount ? item.amount as number : 0))
                    }
                })
            return obj
        })

        services1?.map((obj: ServiceCategoriesItem) => {
            d(servicesActions.deleteFullEntertainmentItem(obj))
            if (props.data.service_order !== null)
                services = props.data.service_order.items.map((item: ServiceCategoriesItem) => {
                    if (obj.id === item.id) {
                        d(servicesActions.addEntertainmentItem(item, item.amount ? item.amount as number : 0))
                        d(servicesActions.setDuration(item.duration as number, item.id))
                    }
                })
            return obj
        })

        d(banquetActions.setCustomer(data.customer))
        d(banquetActions.setName(data.name))
        d(banquetActions.setDescription(data.description ? data.description : ""))
        d(banquetActions.setBegining(data.beg_datetime))
        d(banquetActions.setEnd(data.end_datetime))
        d(banquetActions.setAdvance(data.advance_amount))
        //d(banquetActions.setState(data.state))

        localStorage.removeItem("menus")
        localStorage.removeItem("tickets")
        localStorage.removeItem("services")
    }


    const editBanquet = () => {
        ClearAllShowAmount()
    }

    return <div className={s.main}>
        <div className={s.first}>
            <div className={s.buttons}>
                <div onClick={Delete} className={s.btn}><DeleteIcon/></div>

                <NavLink to="/content/new/menus" className={s.navLink}>
                    <div onClick={editBanquet} className={s.btn}><EditIcon/></div>
                </NavLink>
                <div className={s.btn}><PrintIcon/></div>
                <div onClick={() => setHideProducts(!hideProducts)} className={s.btn}><HideIcon/></div>
            </div>
            <div className={s.info}>
                {/*<button onClick={() => setHideAll(!hideAll)}>Hide</button>*/}
                <div className={s.line}>
                    <div className={s.name}>
                        {data.name}
                    </div>
                    <div className={s.total}>
                        {data.total}$

                    </div>
                </div>
                <div className={s.line}>
                    <div className={s.name}>
                        {data.description}
                    </div>
                    <div className={s.total}>
                        {data.end_datetime}
                    </div>
                </div>
                <div className={s.line}>
                    <div className={s.name}>
                        {data.customer.name}
                    </div>
                    <div className={s.total}>
                        {data.beg_datetime}
                    </div>
                </div>
                <div>
                    <div className={s.name}>
                        {data.state.id}
                    </div>
                </div>
            </div>
        </div>
        {hideProducts &&
        <div className={s.second}>
            <div className={s.products}>
                <div className={s.title}>
                    Products
                </div>

                <div className={s.items}>
                    {products}
                </div>
            </div>
            <div className={s.tickets}>
                <div className={s.title}>
                    Tickets
                </div>
                <div className={s.items}>
                    {tickets}
                </div>
            </div>
            <div className={s.enter}>
                <div className={s.title}>
                    Enrtainments
                </div>

                <div className={s.items}>
                    {services}
                </div>
            </div>
        </div>
        }
    </div>
}
