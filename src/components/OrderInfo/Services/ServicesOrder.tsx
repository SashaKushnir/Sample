import React from "react";
import {ServiceCategoriesItem} from "../../../redux/services/servicesReducer";
import styles from "./../ItemsStyles.module.css";

type Items = {
    item: ServiceCategoriesItem
}

export const ServicesOrder: React.FC<Items> = ({item}) => {

    return <div className={styles.dish}>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.amount_price}>
            <div className={styles.amount}>x{item.amount}</div>
            {item.duration ? <div className={styles.amount}>{item?.duration}хв</div> : <></>}
            <div className={styles.price}>${item.once_paid_price}</div>
        </div>
    </div>
}

// return <div>
//     <div className={styles.intertaiment}>
//         <div className={styles.img}>
//             <IntertaimentImg entertainmentI={item}/>
//         </div>
//         <div className={styles.item}>
//             <div className={styles.name}>
//                 {item.name}
//             </div>
//             <div className={styles.price}>
//                 {item.once_paid_price}
//             </div>
//             <div className={styles.price1}>
//                 <div className={styles.text}>Amount: </div>
//                 <div className={styles.price}>{item.amount}$</div>
//             </div>
//             <div className={styles.price2}>
//                 <div className={styles.text}>Duration: </div>
//                 <div className={styles.price}>{item.duration}$</div>
//             </div>
//         </div>
//     </div>
// </div>
