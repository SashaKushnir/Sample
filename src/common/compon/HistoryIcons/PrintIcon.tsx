import React from 'react'
import printIcon from '../../images/print.png'
import s from './IconsStyle.module.css'

export const PrintIcon:React.FC = () => {

    return <img className={s.Icon} src={printIcon} alt="Print img"/>
}
