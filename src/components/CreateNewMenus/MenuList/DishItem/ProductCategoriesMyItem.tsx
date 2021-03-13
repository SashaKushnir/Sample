import React from 'react'
import { ProductCategoriesItem} from "../../../../redux/newBanknote/newBanknoteReducer";
import { ProductItem } from "./ProductItem";

type DishesProps = {
    product_categoriesItem: ProductCategoriesItem
}

export const ProductCategoriesMyItem: React.FC<DishesProps> = (props) => {
    const products = props.product_categoriesItem.products.map((obj) => <ProductItem productItem={obj}/> )
    return <div>
        <div>{props.product_categoriesItem.name}</div>
        <div>{props.product_categoriesItem.description}</div>
        {products}
    </div>
}