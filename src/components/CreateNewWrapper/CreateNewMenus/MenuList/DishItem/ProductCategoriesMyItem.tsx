import React from 'react'
import { ProductCategoriesItem } from "../../../../../redux/newBanknote/newBanknoteReducer";
import styles from './ProductCategoriesMyItem.module.css'
import { DishImg } from "../../../../../common/compon/Dish/DishImg";

type DishesProps = {
    product_categoriesItem: ProductCategoriesItem
    showAmount?: boolean
}

export const ProductCategoriesMyItem: React.FC<DishesProps> = (props) => {
    return    <div>
        {props.showAmount && <div>{props.product_categoriesItem.amount && <div className={styles.item}>
            <DishImg productItem={props.product_categoriesItem}/>
            <div className={styles.info}>
                <div className={styles.name_price}>
                    <div className={styles.name}>{props.product_categoriesItem.name}</div>
                    <div className={styles.price}>{props.product_categoriesItem.price}</div>
                    <div className={styles.price}>Amount {props.product_categoriesItem.amount}</div>
                    <div></div>
                </div>
                <div className={styles.name_price}>
                    <div className={styles.desc}>{props.product_categoriesItem.description}</div>
                    <div className={styles.weight}>{props.product_categoriesItem.weight}</div>
                </div>
            </div>
        </div>}
        </div>}
        {!props.showAmount && <div className={styles.item}>
            <DishImg productItem={props.product_categoriesItem}/>
            <div className={styles.info}>
                <div className={styles.name_price}>
                    <div className={styles.name}>{props.product_categoriesItem.name}</div>
                    <div className={styles.price}>{props.product_categoriesItem.price}</div>
                </div>
                <div className={styles.name_price}>
                    <div className={styles.desc}>{props.product_categoriesItem.description}</div>
                    <div className={styles.weight}>{props.product_categoriesItem.weight}</div>
                </div>
            </div>
        </div>
        }
    </div>
}