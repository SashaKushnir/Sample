import React, { useState } from 'react'
import deleteIcon from '../../images/delete.png'
import s from './IconsStyle.module.css'

export const DeleteIcon:React.FC = () => {

    return <img className={s.Icon} src={deleteIcon} alt="Delete img"/>
}
