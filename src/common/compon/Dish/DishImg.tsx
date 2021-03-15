import React, { useState } from 'react'
import dishimg from '../../images/dish placeholder.svg'
import s from './DishImg.module.css'
import { useDispatch } from "react-redux";
import { Product } from "../../../redux/newBanknote/newBanknoteReducer";
import { newBanknoteActions } from "../../../redux/newBanknote/newBanknoteActions";

interface DishImgProps {
    productItem: Product
}

export const DishImg: React.FC<DishImgProps> = ({productItem}) => {
    let [amount, setAmount] = useState(0)
    const d = useDispatch()
    const productI = {...productItem}
    const addProduct = () => {
        setAmount(amount + 1)
        productI.amount = amount
        d(newBanknoteActions.addMenuItem(productI))
    }
    return <div onDoubleClick={addProduct} className={s.img}>
        <img className={dishimg} src={dishimg} alt="Dish img"/>
    </div>
}