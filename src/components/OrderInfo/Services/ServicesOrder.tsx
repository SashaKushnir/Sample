import React from "react";
import {useDispatch} from "react-redux";
import {ProductCategoriesItem} from "../../../redux/newBanknote/newBanknoteReducer";
import {ServiceCategoriesItem} from "../../../redux/services/servicesReducer";
import styles from "../../CreateNewWrapper/CreateNewServices/ServiceCategoriesI.module.css";
import {IntertaimentImg} from "../../../common/compon/Intartaiment/EntertainmentImg";

type Items = {
    item: ServiceCategoriesItem
}

export const ServicesOrder: React.FC<Items> = ({item}) => {
    const d = useDispatch()
    const menus = {}
    return <div>
        <div className={styles.intertaiment}>
            <div className={styles.img}>
                <IntertaimentImg entertainmentI={item}/>
            </div>
            <div className={styles.item}>
                <div className={styles.name}>
                    {item.name}
                </div>
                <div className={styles.price}>
                    {item.once_paid_price}
                </div>
                <div className={styles.price1}>
                    <div className={styles.text}>Amount: </div>
                    <div className={styles.price}>{item.amount}$</div>
                </div>
                <div className={styles.price2}>
                    <div className={styles.text}>Duration: </div>
                    <div className={styles.price}>{item.duration}$</div>
                </div>
            </div>
        </div>
    </div>
}

