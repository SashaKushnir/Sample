import React from 'react'
import {Product} from "../../../../../redux/newBanknote/newBanknoteReducer";
import styles from './ProductItem.module.css'
import { DishImg } from "../../../../../common/compon/Dish/DishImg";

type ProductItemProps = {
    productItem: Product
}

export const ProductItem: React.FC<ProductItemProps> = (props) => {
    return (
        <div className={styles.item}>
                <DishImg productItem={props.productItem}/>
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