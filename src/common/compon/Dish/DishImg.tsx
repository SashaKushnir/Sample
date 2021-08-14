import React, { useState } from 'react'
import dishimg from '../../images/dish placeholder.svg'
import comment from '../../images/addcomment.png'
import s from './DishImg.module.css'
import { useDispatch } from "react-redux";
import { ProductCategoriesItem } from "../../../redux/newBanknote/newBanknoteReducer";
import { newBanknoteActions } from "../../../redux/newBanknote/newBanknoteActions";
import { message } from "antd";
import customerI from "../../images/customer.png";

interface DishImgProps {
    productItem: ProductCategoriesItem
}

export const DishImg: React.FC<DishImgProps> = ({productItem}) => {
    let [amount, setAmount]= useState(productItem.amount?productItem.amount:1)
    const d = useDispatch()
    const productI = {...productItem}
    const info = () => {
        message.info('You have already selected this item',1);
    };
    const addProduct = () => {
        if(!productItem.showAmount  ) {
            setAmount(amount as number + 1)
            productI.amount = amount
            d(newBanknoteActions.addMenuItem(productI, null))
        } else {
            info()
        }
    }
    return <div onClick={addProduct} className={s.img}>
        <img className={s.dishimg} src={dishimg} alt="Dish img"/>
    </div>
}

export const AddComment:React.FC = () => {

    return <img className={s.comment} src={comment} alt="add comment"/>
}
