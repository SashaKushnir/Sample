import React from 'react'
import { MenuItem } from "../../../redux/newBanknote/newBanknoteReducer";
import { ProductCategoriesMyItem } from "./DishItem/ProductCategoriesMyItem";

export const MenuItemComponent: React.FC<{ Menuitem: MenuItem }> = ({Menuitem}) => {
    let product_categoriesItems= Menuitem.product_categories.map((obj)=> <ProductCategoriesMyItem product_categoriesItem={obj} />)
    return <div>
        <div>
            {Menuitem.menu_category.name}
        </div>
        <div>
            {Menuitem.menu_category.description}
        </div>
        <div>
            {product_categoriesItems}
        </div>
    </div>
}