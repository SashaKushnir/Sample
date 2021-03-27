import React from 'react'
import s from './BlankHeader.module.css'

export const BlankHeader = () => {

    return <div>
        <div className={s.item}>
            <div className={s.banquetWithName}><b>Banquet Name:</b></div>
            <div>Optional description</div>
            <hr className={s.solid}/>
        </div>
    </div>
}
