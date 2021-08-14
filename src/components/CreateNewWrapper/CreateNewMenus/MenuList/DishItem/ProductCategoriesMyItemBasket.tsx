import React, {ChangeEvent, useEffect} from 'react'
import {ProductCategoriesItem} from "../../../../../redux/newBanknote/newBanknoteReducer";
import styles from './ProductCategoriesMyItem.module.css'
import {AddComment, DishImg} from "../../../../../common/compon/Dish/DishImg";
import {useDispatch} from "react-redux";
import {newBanknoteActions} from "../../../../../redux/newBanknote/newBanknoteActions";
import {CommentI} from "../../../../../common/compon/CommentI/CommentI";
import {DeleteIcon} from "../../../../../common/compon/HistoryIcons/DeleteIcon";

export interface CommentMainProperties {
    id?: number
    text: string
    target_id: number
    target_type: string
}

type DishesProps = {
    product_categoriesItem: ProductCategoriesItem
    showAmount?: boolean
    keyVal: number
}

export const ProductCategoriesMyItemBasket: React.FC<DishesProps> = ({product_categoriesItem, showAmount, keyVal}) => {
    const comments = product_categoriesItem.comments?.map((commentI, index) =>
        <CommentI commentI={commentI} key={index} parentId={product_categoriesItem.id} index={index}/>)
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

    const createCommentI = () => {
        d(newBanknoteActions.addComment({
            target_id: product_categoriesItem.id,
            target_type: product_categoriesItem.type ? product_categoriesItem.type : "unknown",
            text: ""
        }))
    }

    const changeCurA = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.match(/^(\d)*$/))
            d(newBanknoteActions.addMenuItem(product_categoriesItem, e.target.value as any))
    }

    return <div> {product_categoriesItem.showAmount && <div className={styles.dish_basket}>
        <div className={styles.item}>
            <div className={styles.image}>
                {/*<DishImg productItem={product_categoriesItem}/>*/}
                <div onClick={createCommentI} className={styles.add_comment_button}>
                    <AddComment/>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.name_price}>
                    <div className={styles.name}>{product_categoriesItem.name}</div>
                    <div className={styles.delete_price}>
                        <div className={styles.price_basket}><p>{product_categoriesItem.price}$</p></div>
                        <div onClick={deleteItem} className={styles.delete_icon}><DeleteIcon/></div>
                    </div>
                    <div className={styles.input_block}>
                        {/*<label htmlFor={"def"} className={styles.input_label}>Кількість</label>*/}
                        <input className={product_categoriesItem.ready ? styles.input : styles.input_wrong}
                               onChange={changeCurA}
                               value={!product_categoriesItem.amount ? "" : String(product_categoriesItem.amount) ?
                                   String(product_categoriesItem.amount) : ""}
                               placeholder={"Кількість"}
                               ref={textInput}/>
                    </div>
                </div>

                <div>
                    {/*<button onClick={createCommentI} className={styles.add_comment_button}>Додати коментар</button>*/}
                    {comments}
                </div>
                {/*<button onClick={deleteItem} className={styles.btn}>Delete</button>*/}

            </div>
        </div>
    </div>}
    </div>
}
