import React from 'react'
import editIcon from '../../images/edit.png'
import s from './IconsStyle.module.css'

export const EditIcon:React.FC = () => {

    return <img className={s.Icon} src={editIcon} alt="Edit img"/>
}
