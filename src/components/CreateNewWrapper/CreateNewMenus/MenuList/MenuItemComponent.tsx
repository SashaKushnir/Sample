import React from 'react'
import { ProductCategoriesMyItem } from "./DishItem/ProductCategoriesMyItem";
import { MenuItem } from "../../../../redux/newBanknote/newBanknoteReducer";
import styles from './MenuItemComponent.module.css'
export const MenuItemComponent: React.FC<{ Menuitem: MenuItem,
    showAmount?: boolean  }> = ({Menuitem, showAmount}) => {
    let product_categoriesItems= Menuitem.product_categories.map((obj)=>
        <ProductCategoriesMyItem showAmount={showAmount} product_categoriesItem={obj} />)
    return <div className={styles.item}>
        <div className={styles.name}>
            {Menuitem.menu_category.name}
        </div>
        {/*<div>*/}
        {/*    {Menuitem.menu_category.description}*/}
        {/*</div>*/}
        <div>
            {product_categoriesItems}
        </div>
    </div>
}