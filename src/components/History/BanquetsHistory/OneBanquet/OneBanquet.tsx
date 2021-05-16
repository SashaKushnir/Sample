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
import {RootState} from "../../../../redux/store";
import {getListOfSpaces, gettingSpacesByDate} from "../../../../redux/banquetInfo/banquetInfoT";

interface BanquetProps {
    data: History
}


export const OneBanquet: React.FC<BanquetProps> = ({data}) => {
    const d = useDispatch()
    const spaces = useSelector((state: RootState) => state.banquet.basicSpaces)
    const [hideProducts, setHideProducts] = useState(false)
    let tables = null

    //const [hideAll, setHideAll] = useState(false)

    if (data.space_order?.items)
        tables = data.space_order?.items.map(obj => <div className={s.tables}>Name: {obj.name}, floor: {obj.floor}, number: {obj.number}, price: {obj.price}</div>)
    let products = null
    if (data.product_order !== null)
        products = data.product_order.items.map((obj: ProductCategoriesItem, index: number) =>
            <ProductsOrder item={obj}/>)

    let tickets = null
    if (data.ticket_order !== null)
        tickets = data.ticket_order.items.map((obj: TicketItem) =>
            <TicketsOrder item={obj}/>)

    let services = null
    if (data.service_order !== null)
        services = data.service_order.items.map((obj: ServiceCategoriesItem) =>
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
                if (data.product_order)
                    data.product_order.items.map((history_item: ProductCategoriesItem, index: number) => {
                        if (history_item.id === item.id) {
                            d(newBanknoteActions.addMenuItem(history_item, history_item.amount ? history_item.amount as number : 0))
                        }
                    })
            })
        })

        tickets1?.map((obj: TicketItem) => {
            d(ticketsActions.deleteFullTicketItem(obj))
            if (data.ticket_order !== null)
                data.ticket_order.items.map((item: TicketItem) => {
                    if (obj.id === item.id) {
                        d(ticketsActions.addTicketItem(item, item.amount ? item.amount as number : 0))
                    }
                })
            return obj
        })

        services1?.map((obj: ServiceCategoriesItem) => {
            d(servicesActions.deleteFullEntertainmentItem(obj))
            if (data.service_order !== null)
                services = data.service_order.items.map((item: ServiceCategoriesItem) => {
                    if (obj.id === item.id) {
                        d(servicesActions.addEntertainmentItem(item, item.amount ? item.amount as number : 0))
                        d(servicesActions.setDuration(item.duration as number, item.id))
                    }
                })
            return obj
        })
        if (!spaces)
            d(getListOfSpaces(localStorage.getItem("api_token") || ""))
        d(banquetActions.setCustomer(data.customer))
        d(banquetActions.setName(data.name))
        d(banquetActions.setDescription(data.description ? data.description : ""))
        d(banquetActions.setBegining(data.beg_datetime))
        d(banquetActions.setEnd(data.end_datetime))
        d(gettingSpacesByDate())
        d(banquetActions.setAdvance(data.advance_amount))
        d(banquetActions.setBanquetId(data.id))

        if (data.space_order?.items)
            d(banquetActions.setArrayOfSpacesSelected(data.space_order?.items))
        d(banquetActions.setState(data.state))

        localStorage.removeItem("menus")
        localStorage.removeItem("tickets")
        localStorage.removeItem("services")

        localStorage.setItem("menus", JSON.stringify(menus))
        localStorage.setItem("tickets", JSON.stringify(tickets1))
        localStorage.setItem("services", JSON.stringify(services1))
    }


    const editBanquet = () => {
        ClearAllShowAmount()
        d(commonActions.needAmountToggle(false))
    }

    const createpdf = () => {
        d(commonActions.setBanquetPdf(data))
    }
    const employee = useSelector((state:RootState) => state.common.userInfo?.role)

    return <div className={s.main}>
        <div className={s.first}>
            <div className={s.buttons}>

                {employee?.can_modify &&  <NavLink to="/content/new/menus" className={s.navLink}>
                    <div onClick={editBanquet} className={s.btn}><EditIcon/></div>
                </NavLink>}

                <NavLink to="/OneBanquetPdf" className={s.navLink}>
                    <div onClick={createpdf} className={s.btn}><PrintIcon/></div>
                </NavLink>
                <div onClick={() => setHideProducts(!hideProducts)} className={s.btn}><HideIcon/></div>
            </div>
            <div className={s.info}>
                {/*<button onClick={() => setHideAll(!hideAll)}>Hide</button>*/}
                <div className={s.column_left}>
                    <div className={s.text}>
                        {data.name}
                    </div>
                    <div className={s.text}>
                        {data.description}
                    </div>
                    <div className={s.text}>
                        {data.customer.name}
                    </div>
                    <div className={s.text}>
                        Banquet state: {data.state.name}
                    </div>
                    <div>
                        <NavLink to="/KitchenPdf" className={s.navLink}>
                            <div className={s.btn} onClick={createpdf}>Звіт на кухню, страви</div>
                        </NavLink><NavLink to="/PizzaPdf" className={s.navLink}>
                            <div className={s.btn} onClick={createpdf}>Звіт на кухню, піцца</div>
                        </NavLink>
                    </div>
                </div>
                <div className={s.column_right}>
                    <div className={s.price}>
                        {data.total}$
                    </div>
                    <div className={s.numbers}>
                        {data.end_datetime}
                    </div>
                    <div className={s.numbers}>
                        {data.beg_datetime}
                    </div>
                </div>

            </div>
            {employee?.can_modify &&
            <div>
                <div onClick={Delete} className={s.btn}><DeleteIcon/></div>
            </div>
            }
        </div>
        {hideProducts && <div>
            <div className={s.order}>
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
            <div>
                <h4>Tables</h4>
                {tables}
            </div>
        </div>
        }
    </div>
}
