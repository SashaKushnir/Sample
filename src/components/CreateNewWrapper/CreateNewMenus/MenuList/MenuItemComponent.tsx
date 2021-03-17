import React from 'react'
import {ProductCategoriesMyItem} from "./DishItem/ProductCategoriesMyItem";
import {MenuItem} from "../../../../redux/newBanknote/newBanknoteReducer";
import styles from './MenuItemComponent.module.css'

interface MenuItemComponentProps {
    Menuitem: MenuItem
    showAmount?: boolean
}

export const MenuItemComponent: React.FC<MenuItemComponentProps> = ({Menuitem, showAmount}) => {
    let product_categoriesItems = Menuitem.products.map((obj) =>
        <ProductCategoriesMyItem showAmount={showAmount} product_categoriesItem={obj}/>)
    return <div className={styles.item_show}>
                 <div className={styles.name}>
                     {Menuitem.name}
                 </div>
                 <div className={styles.hide}>
                     <label>hide</label>
                 </div>
                 {/*<div>*/}
                 {/*    {Menuitem.menu_category.description}*/}
                 {/*</div>*/}
               <div>
                     {product_categoriesItems}
                 </div>
             </div>
}

// <div className={styles.all_menu}>
//     {showAmount && <div className={styles.item_show}>
//         <div className={styles.name}>
//             {Menuitem.name}
//         </div>
//         <div className={styles.hide}>
//             <label>hide</label>
//         </div>
//         {/*<div>*/}
//         {/*    {Menuitem.menu_category.description}*/}
//         {/*</div>*/}
//         <div>
//             {product_categoriesItems}
//         </div>
//     </div>}
//     {!showAmount && <div className={styles.item_not_show}>
//         <div className={styles.name}>
//             {Menuitem.name}
//         </div>
//         <div className={styles.hide}>
//             <label>hide</label>
//         </div>
//         {/*<div>*/}
//         {/*    {Menuitem.menu_category.description}*/}
//         {/*</div>*/}
//         <div>
//             {product_categoriesItems}
//         </div>
//     </div>}
// </div>