import React from 'react'
import { useSelector } from "react-redux";
import { selectTickets } from "../../../selectors/selectCreateNew";
import styles from './CreateNewTickets.module.css'
import { MenuList } from "../CreateNewMenus/MenuList/MenuList";
import {TicketItemMap} from "./TicketItemMap";
import { MenuItemComponent } from "../CreateNewMenus/MenuList/MenuItemComponent";
import { ProductCategoriesMyItem } from "../CreateNewMenus/MenuList/DishItem/ProductCategoriesMyItem";

export const CreateNewTickets = () => {
    const tickets = useSelector(selectTickets).map((obj, index)=>
        <ProductCategoriesMyItem key={index} keyVal={index}  showAmount={false} product_categoriesItem={obj}/>)
    return <div className={styles.tickets}>
        {tickets}
    </div>
}

// export const CreateNewMenus = () => {
//     const d = useDispatch()
//     useEffect(()=>{
//         d(setMenuT())
//     },[])
//     return <div className={styles.wrap}>
//         <MenuList showAmount={true} />
//         <MenuList/>
//     </div>
// }