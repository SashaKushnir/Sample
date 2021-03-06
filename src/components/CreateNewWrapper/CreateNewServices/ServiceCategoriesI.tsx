import React from "react";

import {ServiceCategoriesItem} from "../../../redux/services/servicesReducer";
import styles from "./ServiceCategoriesI.module.css";
import {IntertaimentImg} from "../../../common/compon/Intartaiment/EntertainmentImg";

interface ServiceCategoriesItemProps {
    serviceItem: ServiceCategoriesItem
    showAmount?: boolean
}

export const ServiceCategoriesI: React.FC<ServiceCategoriesItemProps> = ({serviceItem, showAmount}) => {

    return <div className={styles.intertaiment}>
            <div className={styles.img}>
             <IntertaimentImg entertainmentI={serviceItem}/>
            </div>
            <div className={styles.item}>
                <div className={styles.name}>
                    {serviceItem.name}
                </div>
                <div className={styles.desc}>
                    {serviceItem.description}
                </div>
                <div className={styles.price1}>
                    <div className={styles.text}>Одноразова оплата</div>
                    <div className={styles.price}>{serviceItem.once_paid_price}$</div>
                </div>
                <div className={styles.price2}>
                    <div className={styles.text}>Оплата за годину</div>
                    <div className={styles.price}>{serviceItem.hourly_paid_price}$</div>
                </div>
            </div>
        </div>

}
