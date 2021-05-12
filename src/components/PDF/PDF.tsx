import s from "./pdfStyles.module.css";
import React from "react";


export const Pidpus = () => {
    return  <div>
        <div className={s.left}>
            <div className={s.pid}></div>
            <div className={s.center}>ПІД</div>
        </div>
        <div className={s.right}>
            <div className={s.date}></div>
            <div className={s.center}>Підпис</div>
        </div>
        <div className={s.right}>
            <div className={s.pidpys_down}></div>
            <div className={s.center}>Дата</div>
        </div>

    </div>
}
