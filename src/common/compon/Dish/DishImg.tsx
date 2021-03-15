import React from 'react'
import dishimg from '../../images/dish placeholder.svg'
import s from './DishImg.module.css'

export const DishImg = () => {
    return <div className={s.img}>
        <img className={dishimg} src={dishimg} alt="Dish img"/>
    </div>
}