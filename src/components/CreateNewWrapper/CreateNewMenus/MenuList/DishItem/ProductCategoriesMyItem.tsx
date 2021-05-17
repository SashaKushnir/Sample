import React from 'react'
import {ProductCategoriesItem} from "../../../../../redux/newBanknote/newBanknoteReducer";
import styles from './ProductCategoriesMyItem.module.css'
import {DishImg} from "../../../../../common/compon/Dish/DishImg";

type DishesProps = {
    product_categoriesItem: ProductCategoriesItem
    showAmount?: boolean
    keyVal: number
}

export const ProductCategoriesMyItem: React.FC<DishesProps> = ({product_categoriesItem, showAmount,keyVal}) => {

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
