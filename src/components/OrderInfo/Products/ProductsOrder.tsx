import React from "react";
import {ProductCategoriesItem} from "../../../redux/newBanknote/newBanknoteReducer";
import styles from "./../ItemsStyles.module.css";

type Items = {
    item: ProductCategoriesItem
}

export const ProductsOrder: React.FC<Items> = ({item}) => {
    return <div className={styles.dish}>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.amount_price}>
            <div className={styles.amount}>x{item.amount}</div>
            <div className={styles.price}>${item.price}</div>
        </div>
    </div>
}
