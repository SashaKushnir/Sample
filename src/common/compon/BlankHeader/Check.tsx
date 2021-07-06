import React from 'react'
import basketIcon from '../../images/basket.png'
import s from './Styles.module.css'

export const CheckIcon:React.FC = () => {

    return <img className={s.Icon} src={basketIcon} alt="Check img"/>
}
