import React, { ChangeEvent, createRef, useEffect, useRef, useState } from 'react'
import { ProductCategoriesItem } from "../../../../../redux/newBanknote/newBanknoteReducer";
import styles from './ProductCategoriesMyItem.module.css'
import { DishImg } from "../../../../../common/compon/Dish/DishImg";
import { useDispatch } from "react-redux";
import { newBanknoteActions } from "../../../../../redux/newBanknote/newBanknoteActions";
import { NumericInput } from "../../../../../common/compon/InputNumber/InputNumber";
import _uniqueId from 'lodash/uniqueId';

type DishesProps = {
    product_categoriesItem: ProductCategoriesItem
    showAmount?: boolean
    keyVal: number
}

export const ProductCategoriesMyItem: React.FC<DishesProps> = ({product_categoriesItem, showAmount,keyVal}) => {
    const d = useDispatch()
    const deleteItem = () => {
        d(newBanknoteActions.deleteFullItem(product_categoriesItem))
    }
    const changeCurA = (value: number) => {
            d(newBanknoteActions.addMenuItem(product_categoriesItem, value))
    }
    const [id] = useState(_uniqueId('prefix-'))

    return <div className={styles.dish}>
        <div className={styles.item}>
            <div className={styles.image}>
                <DishImg productItem={product_categoriesItem}/>
            </div>
            <div className={styles.info}>
                <div className={styles.name_price}>
                    <div className={styles.name}>{product_categoriesItem.name}</div>
                    <div className={styles.price}>{product_categoriesItem.price}$</div>
                </div>
                <div className={styles.name_price}>
                    <div className={styles.desc}>{product_categoriesItem.description}</div>
                    <div className={styles.weight}>{product_categoriesItem.weight}кг.</div>
                </div>
            </div>
        </div>
    </div>
}
