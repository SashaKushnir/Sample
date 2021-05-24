import React from 'react'
import hideIcon from '../../images/hide.png'
import s from './IconsStyle.module.css'

export const HideIcon:React.FC = () => {
    return <img className={s.Icon} src={hideIcon} alt="Hide img"/>
}
