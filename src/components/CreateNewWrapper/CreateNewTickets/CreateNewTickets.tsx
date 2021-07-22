import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {selectTickets} from "../../../selectors/selectCreateNew";
import styles from './CreateNewTickets.module.css'
import {TicketItemMap} from "./TicketItemMap";
import {ticketsActions} from "../../../redux/tickets/ticketsActions";
import {TicketItemMapShowAmount} from "./TicketItemMapShowAmount";
import {setTicketsT} from "../../../redux/tickets/ticketsThunks";
import {ItemType} from "../CreateNewMenus/MenuList/MenuItemComponent";
import {TicketItem} from "../../../redux/tickets/ticketsReducer";
import {CheckForDeleted} from "../../../common/compon/DeletedItems/DeletedItems";

export const CreateNewTickets = () => {

    const ticketData = useSelector(selectTickets)

    const d = useDispatch()

    useEffect(() => {
        let localTickets = JSON.parse(localStorage.getItem("tickets") || "[]");
        if (localTickets.length > 0)
            d(ticketsActions.setTicketInfo(localTickets));
        else
            d(setTicketsT())
    }, [])

    useEffect(() => {
        if (ticketData)
            localStorage.setItem("tickets", JSON.stringify(ticketData))
    })

    let selectedTickets
    if (ticketData) {
        selectedTickets = ticketData.map((obj, index) => {
            if (CheckForDeleted(obj)) return
            return <TicketItemMapShowAmount key={index} showAmount={true} ticketItem={obj}/>
        })
    }

    let categoryIds: Array<string> | undefined = ticketData?.reduce((acum: Array<string>, cur) => {
        acum.push(cur.category.name as never)
        return acum
    }, [])
    categoryIds = Array.from(new Set(categoryIds))


    const resArray = categoryIds.reduce((acum: Array<ItemType<TicketItem>>, resItem) => {
        const items = ticketData?.filter((arrItem) => {
            return arrItem.category.name === resItem
        })
        if (items)
            acum.push({
                category: resItem,
                items: items
            })
        return acum
    }, [])

    return <div className={styles.main}>
        <div className={styles.basket}>
            {selectedTickets}
        </div>
        <div className={styles.tickets}>
            {
                resArray.map((resArrayItem, indexH) => {
                    const items = resArrayItem.items.map((obj, index) => {
                        if (CheckForDeleted(obj)) return
                        return <TicketItemMap key={index} ticketItem={obj} showAmount={false}/>
                    })
                    return <div key={indexH}>
                        <h3 className={styles.category}>{resArrayItem.category}</h3>
                        <div>{items}</div>
                    </div>
                })
            }
        </div>
    </div>
}

