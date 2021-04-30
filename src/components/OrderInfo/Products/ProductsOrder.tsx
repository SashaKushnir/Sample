import React from "react";
import {useDispatch} from "react-redux";
import {ProductCategoriesItem} from "../../../redux/newBanknote/newBanknoteReducer";
import styles from "./../ItemsStyles.module.css";
import {DishImg} from "../../../common/compon/Dish/DishImg";

type Items = {
    item: ProductCategoriesItem
}

export const ProductsOrder: React.FC<Items> = ({item}) => {
    const d = useDispatch()

    const menus = {}
    return <div className={styles.dish}>

        <div className={styles.name}>{item.name}</div>
        <div className={styles.amount_price}>
            <div className={styles.amount}>x{item.amount}</div>
            <div className={styles.price}>${item.price}</div>
        </div>


    </div>
}

// return <div className={styles.dish}>
//     <div className={styles.item}>
//         <div className={styles.image}>
//             <DishImg productItem={item}/>
//         </div>
//         <div className={styles.info}>
//             <div className={styles.name_price}>
//                 <div className={styles.name}>{item.name}</div>
//                 <div className={styles.price}>{item.price}$</div>
//             </div>
//             <div className={styles.name_price}>
//                 <div className={styles.desc}>Amount:</div>
//                 <div className={styles.weight}>{item.amount}</div>
//             </div>
//         </div>
//     </div>
// </div>
