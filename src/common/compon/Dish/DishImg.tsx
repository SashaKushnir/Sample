import React, { useState } from 'react'
import dishimg from '../../images/dish placeholder.svg'
import s from './DishImg.module.css'
import { useDispatch } from "react-redux";
import { ProductCategoriesItem } from "../../../redux/newBanknote/newBanknoteReducer";
import { newBanknoteActions } from "../../../redux/newBanknote/newBanknoteActions";

interface DishImgProps {
    productItem: ProductCategoriesItem
}

export const DishImg: React.FC<DishImgProps> = ({productItem}) => {
    let [amount, setAmount]= useState(productItem.amount?productItem.amount:1)
    const d = useDispatch()
    const productI = {...productItem}
    const addProduct = () => {
        setAmount(amount + 1)
        productI.amount = amount
      d(newBanknoteActions.addMenuItem(productI, null))
    }
    return <div onClick={addProduct} className={s.img}>
        <img className={s.dishimg} src={dishimg} alt="Dish img"/>
    </div>
}