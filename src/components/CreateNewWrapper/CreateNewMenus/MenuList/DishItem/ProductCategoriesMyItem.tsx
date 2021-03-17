import React from 'react'
import { ProductCategoriesItem } from "../../../../../redux/newBanknote/newBanknoteReducer";
import styles from './ProductCategoriesMyItem.module.css'
import { DishImg } from "../../../../../common/compon/Dish/DishImg";

type DishesProps = {
    product_categoriesItem: ProductCategoriesItem
    showAmount?: boolean
}

export const ProductCategoriesMyItem: React.FC<DishesProps> = (props) => {
    return    <div className={styles.dish}>
        {props.showAmount && <div>{props.product_categoriesItem.amount && <div className={styles.item}>
            <div className={styles.image}>
                <DishImg productItem={props.product_categoriesItem}/>
            </div>
            <div className={styles.info}>
                <div className={styles.name_price}>
                    <div className={styles.name}>{props.product_categoriesItem.name}</div>
                    <div className={styles.price}>{props.product_categoriesItem.price}$</div>
                </div>
                <div className={styles.name_price}>
                    <div className={styles.amount_text}>Amount</div>
                    <div className={styles.amount}>{props.product_categoriesItem.amount}x</div>
                {/*    <div className={styles.desc}>{props.product_categoriesItem.description}</div>*/}
                {/*    <div className={styles.weight}>{props.product_categoriesItem.weight}</div>*/}
                </div>
            </div>
        </div>}
        </div>}
        {!props.showAmount && <div className={styles.item}>
            <div className={styles.image}>
                <DishImg productItem={props.product_categoriesItem}/>
            </div>
            <div className={styles.info}>
                <div className={styles.name_price}>
                    <div className={styles.name}>{props.product_categoriesItem.name}</div>
                    <div className={styles.price}>{props.product_categoriesItem.price}$</div>
                </div>
                <div className={styles.name_price}>
                    <div className={styles.desc}>{props.product_categoriesItem.description}</div>
                    {/*<div className={styles.weight}>{props.product_categoriesItem.weight}</div>*/}
                </div>
            </div>
        </div>
        }
    </div>
}

// <div className={1} style={"display:inline-block"}>
//     <div className={2}>
//         <img className={3}/>
//     </div>
// </div>