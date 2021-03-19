import React from "react";

import {ServiceCategoriesItem} from "../../../redux/services/servicesReducer";
import styles from "./ServiceCategoriesI.module.css";
import {IntertaimentImg} from "../../../common/compon/Intartaiment/IntertaimentImg";

interface ServiceCategoriesItemProps {
    serviceItem: ServiceCategoriesItem
}

export const ServiceCategoriesI: React.FC<ServiceCategoriesItemProps> = ({serviceItem}) => {

    return <div className={styles.intertaiment}>
        <div className={styles.img}>
            <IntertaimentImg />
        </div>
        <div className={styles.item}>
            <div className={styles.name}>
                {serviceItem.name}
            </div>
            <div className={styles.desc}>
                {serviceItem.description}
            </div>
            <div className={styles.price1}>
               Одноразова оплата {serviceItem.once_paid_price}$
            </div>
            <div className={styles.price2}>
               Оплата за годину {serviceItem.hourly_paid_price}$
            </div>
        </div>
    </div>
}