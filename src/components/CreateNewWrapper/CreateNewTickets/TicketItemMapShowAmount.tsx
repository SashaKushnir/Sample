import React, {ChangeEvent, useEffect} from 'react'

import styles from './TicketItemMap.module.css'
import {TicketImg} from "../../../common/compon/Ticket/TicketImg";
import {ticketsActions} from "../../../redux/tickets/ticketsActions";
import {TicketItem} from "../../../redux/tickets/ticketsReducer";
import {CommentI} from "../../../common/compon/CommentI/CommentI";
import {useDispatch} from "react-redux";
import {AddComment} from "../../../common/compon/Dish/DishImg";
import {DeleteIcon} from "../../../common/compon/HistoryIcons/DeleteIcon";

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
    const createCommentI = () => {
        d(ticketsActions.addTicketEmptyComment({
            target_id: ticketItem.id,
            target_type: ticketItem.type?ticketItem.type:"unknown",
            text: ""
        }))
    }

    return <div>{ticketItem.showAmount &&
    <div className={styles.ticket}>
        <div className={styles.img}>
            <div onClick={createCommentI} className={styles.add_comment_button}>
                <AddComment/>
            </div>
        </div>
        <div className={styles.item}>
            <div className={styles.title}>
                <div className={styles.name}>
                    {ticketItem.name}
                </div>
                <div className={styles.delete_price}>
                    <div className={styles.price_basket}><p>{ticketItem.price}$</p></div>
                    <div onClick={deleteItem} className={styles.delete_icon}><DeleteIcon/></div>
                </div>
                <div className={styles.input_block}>
                    {/*<label htmlFor={"def"} className={styles.input_label}>Amount</label>*/}
                    <input className={ticketItem.ready ? styles.input : styles.input_wrong} ref={textInput} placeholder={"Amount"}
                           value={ticketItem.amount ? String(ticketItem.amount) : ""} onChange={changeCurr}/>
                </div>
            </div>


            <div>
                {/*Comments:*/}
                {/*<button onClick={createCommentI}>Add comment</button>*/}
                {comments}
            </div>
            {/*<button onClick={deleteItem} className={styles.btn}>Delete</button>*/}
            {/*<div className={styles.desc}>*/}
            {/*    /!*{ticketItem.description}*!/*/}
            {/*</div>*/}
        </div>
    </div>}
    </div>
};
