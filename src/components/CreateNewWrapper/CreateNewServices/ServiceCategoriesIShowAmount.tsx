import React, {ChangeEvent, useEffect} from "react";

import {ServiceCategoriesItem} from "../../../redux/services/servicesReducer";
import styles from "./ServiceCategoriesI.module.css";
import {IntertaimentImg} from "../../../common/compon/Intartaiment/EntertainmentImg";
import {useDispatch} from "react-redux";
import {servicesActions} from "../../../redux/services/servicesActions";
import {CommentI} from "../../../common/compon/CommentI/CommentI";
import {ticketsActions} from "../../../redux/tickets/ticketsActions";

interface ServiceCategoriesItemProps {
    serviceItem: ServiceCategoriesItem
    showAmount?: boolean
}

export const ServiceCategoriesIShowAmount: React.FC<ServiceCategoriesItemProps> = ({serviceItem, showAmount}) => {
    const d = useDispatch()
    const comments = serviceItem.comments?.map((commentI, index) =>
        <CommentI commentI={commentI} key={index} parentId={serviceItem.id} index={index}/>)
    const textInput = React.createRef<HTMLInputElement>()

    useEffect(() => {
        if (serviceItem.showAmount) {
            textInput.current?.focus()
        }
    }, [serviceItem.showAmount])

    const deleteItem = () => {
        d(servicesActions.deleteFullEntertainmentItem(serviceItem))

    }
    const changeCurS = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.match(/^(\d)*$/))
            d(servicesActions.addEntertainmentItem(serviceItem, e.target.value as any))
    }

    const changeCurD = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.match(/^(\d)*$/))
            d(servicesActions.setDuration(e.target.value, serviceItem.id))
    }
    const createCommentI = () => {
        d(servicesActions.addServiceEmptyComment({
            target_id: serviceItem.id,
            target_type: serviceItem.type?serviceItem.type:"unknown",
            text: ""
        }))
    }

    return <div>
        <div className={styles.intertaiment}>
            <div className={styles.img}>
                <IntertaimentImg entertainmentI={serviceItem}/>
            </div>
            <div className={styles.item}>
                <div className={styles.name}>
                    {serviceItem.name}
                </div>
                <div className={styles.price1}>
                    <div className={styles.text}>Одноразова оплата</div>
                    <div className={styles.price}>{serviceItem.once_paid_price}$</div>
                </div>
                <div className={styles.price2}>
                    <div className={styles.text}>Оплата за годину</div>
                    <div className={styles.price}>{serviceItem.hourly_paid_price}$</div>
                </div>

                <div className={styles.input_block}>
                    <label htmlFor={"def"} className={styles.input_label}>Amount</label>
                    <input className={serviceItem.ready ? styles.input : styles.input_wrong}
                           onChange={changeCurS}
                           value={serviceItem.amount ? String(serviceItem.amount) : ""}
                           placeholder={"Amount"}
                           ref={textInput}/>
                </div>
                <div>
                    Comments:
                    <button onClick={createCommentI}>Add comment</button>
                    {comments}
                </div>

                <div className={styles.input_block}>
                    <label htmlFor={"def"} className={styles.input_label}>Duration</label>
                    <input className={styles.input}
                           onChange={changeCurD}
                           value={serviceItem.duration ? String(serviceItem.duration) : ""}
                           placeholder={"Duration"}
                           ref={textInput}/>
                </div>

                <button onClick={deleteItem} className={styles.btn}>Delete</button>
            </div>
        </div>
    </div>
}
