import React from 'react'
import { Products } from "../../../../../redux/newBanknote/newBanknoteReducer";

type ProductItemProps = {
    productItem: Products
}

export const ProductItem: React.FC<ProductItemProps> = (props) => {
    return <div>
        <div>{props.productItem.name}</div>
        <div>{props.productItem.price}</div>
        <div>{props.productItem.description}</div>
        <div>{props.productItem.weight}</div>
    </div>
}