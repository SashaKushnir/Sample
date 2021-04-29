import React, {ChangeEvent, useEffect} from 'react'

import styles from './TicketItemMap.module.css'
import {TicketImg} from "../../../common/compon/Ticket/TicketImg";
import {ticketsActions} from "../../../redux/tickets/ticketsActions";
import {TicketItem} from "../../../redux/tickets/ticketsReducer";
import {CommentI} from "../../../common/compon/CommentI/CommentI";
import {useDispatch} from "react-redux";
import {CommentItem} from "../../../redux/history/newHistoryReducer";

interface TicketItemProps {
    ticketItem: TicketItem
    showAmount?: boolean
}

export const TicketItemMapShowAmount: React.FC<TicketItemProps> = ({ticketItem, showAmount}) => {

    const comments = ticketItem.comments?.map((commentItem, index) =>
        <CommentI commentI={commentItem} key={index} parentId={ticketItem.id} index={index}/>)

    const textInput = React.createRef<HTMLInputElement>()
    const d = useDispatch()
    useEffect(() => {
        if (ticketItem.showAmount) {
            textInput.current?.focus()
        }
    }, [ticketItem.showAmount])
    const deleteItem = () => {
        d(ticketsActions.deleteFullTicketItem(ticketItem))
    }
    const changeCurr = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.match(/^(\d)*$/))
            d(ticketsActions.addTicketItem(ticketItem, e.target.value as any))
    }


    return <div>{ticketItem.showAmount &&
    <div className={styles.ticket}>
        <div className={styles.img}>
            <TicketImg ticketI={ticketItem}/>
        </div>
        <div className={styles.item}>
            <div className={styles.title}>
                <div className={styles.name}>
                    {ticketItem.name}
                </div>
                <div className={styles.price}>
                    {ticketItem.price}$
                </div>
            </div>

            <div className={styles.input_block}>
                <label htmlFor={"def"} className={styles.input_label}>Amount</label>
                <input className={styles.input} ref={textInput} placeholder={"Amount"}
                       value={ticketItem.amount ? String(ticketItem.amount) : ""} onChange={changeCurr}/>
            </div>
            <div>
                Comments:
                {comments}
            </div>
            <button onClick={deleteItem} className={styles.btn}>Delete</button>
            {/*<div className={styles.desc}>*/}
            {/*    /!*{ticketItem.description}*!/*/}
            {/*</div>*/}
        </div>
    </div>}
    </div>
};
