import React from 'react'
import {CreateNewEmployeeForm} from "./CreateNewEmployeeForm";
import s from './CreateNewEmployeePage.module.css'

export const CreateNewEmployeePage = () => {

    return <div>
        <div className={s.formWrap}>
            <CreateNewEmployeeForm/>
        </div>
    </div>
}