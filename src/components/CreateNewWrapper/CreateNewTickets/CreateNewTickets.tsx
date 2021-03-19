import React from 'react'
import { useSelector } from "react-redux";
import { selectTickets } from "../../../selectors/selectCreateNew";
import styles from './CreateNewTickets.module.css'
import { TicketItemMap } from "./TicketItemMap";
import { ProductCategoriesMyItem } from "../CreateNewMenus/MenuList/DishItem/ProductCategoriesMyItem";

export const CreateNewTickets = () => {

    const tickets = useSelector(selectTickets).map((obj, index)=>
        <ProductCategoriesMyItem key={index} keyVal={index}  showAmount={false} product_categoriesItem={obj}/>)

    const selectedTickets = useSelector(selectTickets).map((obj, index)=>
        <ProductCategoriesMyItem key={index} keyVal={index}  showAmount={true} product_categoriesItem={obj}/>)

    return <div className={styles.main}>
        <div className={styles.basket}>
            {/*{selectedTickets}*/}
        </div>
        <div className={styles.tickets}>
            {tickets}
        </div>

    </div>
}

