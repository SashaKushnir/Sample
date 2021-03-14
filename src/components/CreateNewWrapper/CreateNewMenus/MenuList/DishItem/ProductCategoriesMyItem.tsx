import React from 'react'
import { ProductItem } from "./ProductItem";
import { ProductCategoriesItem } from "../../../../../redux/newBanknote/newBanknoteReducer";
import styles from './ProductCategoriesMyItem.module.css'

type DishesProps = {
    product_categoriesItem: ProductCategoriesItem
}

export const ProductCategoriesMyItem: React.FC<DishesProps> = (props) => {
    const products = props.product_categoriesItem.products.map((obj) => <ProductItem productItem={obj}/> )
    return <div>
        <div className={styles.name}>{props.product_categoriesItem.name}</div>
        <button className={styles.btn_hide}>hide</button>
        <div>{props.product_categoriesItem.description}</div>
        {products}
    </div>
}