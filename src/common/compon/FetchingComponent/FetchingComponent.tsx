import React from 'react'
import fetchingImg from '../../images/kto-pridumal-indikator-vypolneniya-7.gif'
import s from './FetchingComponent.module.css'

export const FetchingComponent = () => {
    return <div className={s.toCenter}>
        <img src={fetchingImg} alt="Fetching data"/>
    </div>
}