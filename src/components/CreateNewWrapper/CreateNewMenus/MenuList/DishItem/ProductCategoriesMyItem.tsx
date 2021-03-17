import React, { ChangeEvent, useEffect, useState } from 'react'
import { ProductCategoriesItem } from "../../../../../redux/newBanknote/newBanknoteReducer";
import styles from './ProductCategoriesMyItem.module.css'
import { DishImg } from "../../../../../common/compon/Dish/DishImg";
import { useDispatch } from "react-redux";
import { newBanknoteActions } from "../../../../../redux/newBanknote/newBanknoteActions";
import { NumericInput } from "../../../../../common/compon/InputNumber/InputNumber";

type DishesProps = {
    product_categoriesItem: ProductCategoriesItem
    showAmount?: boolean
}

export const ProductCategoriesMyItem: React.FC<DishesProps> = (props) => {

    let [currentA, setCurrentA] = useState(props.product_categoriesItem.amount)
    const d = useDispatch()
    const deleteItem = () => {
        d(newBanknoteActions.deleteFullItem(props.product_categoriesItem))
        setCurrentA(0)
    }
    useEffect(() => {
        setCurrentA(props.product_categoriesItem.amount)
    }, [props.product_categoriesItem.amount])
    const changeCurA = (value: number) => {
        setCurrentA(value)
        //d(newBanknoteActions.addMenuItem(props.product_categoriesItem, value))
    }
    return <div>
        {props.showAmount && <div>{props.product_categoriesItem.amount && props.product_categoriesItem.amount !== 0
        && <div className={styles.item}>
            <DishImg productItem={props.product_categoriesItem}/>
            <div className={styles.info}>
                <div className={styles.name_price}>
                    <div className={styles.name}>{props.product_categoriesItem.name}</div>
                    <div className={styles.price}>{props.product_categoriesItem.price}</div>
                    <div className={styles.price}>Amount <NumericInput defaultValue={1}
                                                                       style={{width: 120}}
                                                                       value={String(currentA)}
                                                                       onChange={changeCurA}/>
                    </div>

                </div>
                <div className={styles.name_price}>
                    {
                        <div className={styles.weight}>{props.product_categoriesItem.weight}</div>
                    }
                </div>
                <button onClick={deleteItem}>Delete</button>
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