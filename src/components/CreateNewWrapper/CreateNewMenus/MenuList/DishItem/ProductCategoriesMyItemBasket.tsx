import React, {ChangeEvent, createRef, useEffect, useRef, useState} from 'react'
import {ProductCategoriesItem} from "../../../../../redux/newBanknote/newBanknoteReducer";
import styles from './ProductCategoriesMyItem.module.css'
import {DishImg} from "../../../../../common/compon/Dish/DishImg";
import {useDispatch} from "react-redux";
import {newBanknoteActions} from "../../../../../redux/newBanknote/newBanknoteActions";
import {NumericInput} from "../../../../../common/compon/InputNumber/InputNumber";
import _uniqueId from 'lodash/uniqueId';
import {number} from "yup";

type DishesProps = {
    product_categoriesItem: ProductCategoriesItem
    showAmount?: boolean
    keyVal: number
}

export const ProductCategoriesMyItemBasket: React.FC<DishesProps> = ({product_categoriesItem, showAmount, keyVal}) => {
    const d = useDispatch()
    const textInput = React.createRef<HTMLInputElement>()
    useEffect(() => {
        if (product_categoriesItem.showAmount) {
            textInput.current?.focus()
        }
    }, [product_categoriesItem.showAmount])

    const deleteItem = () => {
        d(newBanknoteActions.deleteFullItem(product_categoriesItem))
    }
    const changeCurA = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.match(/^(\d)*$/))
            d(newBanknoteActions.addMenuItem(product_categoriesItem, e.target.value as any))
    }
    const [id] = useState(_uniqueId('prefix-'))

    return <div> {product_categoriesItem.showAmount && <div className={styles.dish}>
        <div className={styles.item}>
            <div className={styles.image}>
                <DishImg productItem={product_categoriesItem}/>
            </div>
            <div className={styles.info}>
                <div className={styles.name_price}>
                    <div className={styles.name}>{product_categoriesItem.name}</div>
                    <div className={styles.price}>{product_categoriesItem.price}$</div>
                </div>
                <div className={styles.input_block}>
                    <label htmlFor={"def"} className={styles.input_label}>Amount</label>
                    <input className={styles.input}
                        onChange={changeCurA}
                           value={!product_categoriesItem.amount ? "" : String(product_categoriesItem.amount) ?
                               String(product_categoriesItem.amount) : ""}
                           placeholder={"Amount"}
                           ref={textInput}/>
                </div>

                {/*{*/}
                {/*    <div className={styles.weight_basket}>{product_categoriesItem.weight}</div>*/}
                {/*}*/}
                <button onClick={deleteItem} className={styles.btn}>Delete</button>
            </div>
        </div>
    </div>}
    </div>
}
