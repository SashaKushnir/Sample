import React from 'react'
import {Products} from "../../../../../redux/newBanknote/newBanknoteReducer";
import styles from './ProductItem.module.css'

type ProductItemProps = {
    productItem: Products
}

export const ProductItem: React.FC<ProductItemProps> = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.img}><img
                src="https://cdn2.iconfinder.com/data/icons/food-restaurant-1/128/flat-15-512.png"/></div>
            <div className={styles.info}>
                <div className={styles.name_price}>
                    <div className={styles.name}>{props.productItem.name}</div>
                    <div className={styles.price}>{props.productItem.price}</div>
                </div>
                <div className={styles.name_price}>
                    <div className={styles.desc}>{props.productItem.description}</div>
                    <div className={styles.weight}>{props.productItem.weight}</div>
                </div>
            </div>
        </div>
    )
}