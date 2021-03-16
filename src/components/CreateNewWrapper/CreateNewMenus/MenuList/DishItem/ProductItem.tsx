import React from 'react'
import { Product } from "../../../../../redux/newBanknote/newBanknoteReducer";
import styles from './ProductItem.module.css'
import { DishImg } from "../../../../../common/compon/Dish/DishImg";

type ProductItemProps = {
    productItem: Product
    showAmount?: boolean
}

export const ProductItem: React.FC<ProductItemProps> = (props) => {
    return (
        <div>
            {props.showAmount && <div>{props.productItem.amount && <div className={styles.item}>
                <DishImg productItem={props.productItem}/>
                <div className={styles.info}>
                    <div className={styles.name_price}>
                        <div className={styles.name}>{props.productItem.name}</div>
                        <div className={styles.price}>{props.productItem.price}</div>
                        <div className={styles.price}>Amount {props.productItem.amount}</div>
                        <div></div>
                    </div>
                    <div className={styles.name_price}>
                        <div className={styles.desc}>{props.productItem.description}</div>
                        <div className={styles.weight}>{props.productItem.weight}</div>
                    </div>
                </div>
            </div>}
            </div>}
            {!props.showAmount && <div className={styles.item}>
                <DishImg productItem={props.productItem}/>
                <div className={styles.info}>
                    <div className={styles.name_price}>
                        <div className={styles.name}>{props.productItem.name}</div>
                        <div className={styles.price}>{props.productItem.price}</div>
                        <div className={styles.price}>{props.productItem.amount}</div>
                    </div>
                    <div className={styles.name_price}>
                        <div className={styles.desc}>{props.productItem.description}</div>
                        <div className={styles.weight}>{props.productItem.weight}</div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}