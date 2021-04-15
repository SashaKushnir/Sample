import React, {ChangeEvent} from 'react'
import s from './BlankHeader.module.css'
import {useDispatch, useSelector} from "react-redux";
import {selectBanquet, selectUsers} from "../../../selectors/selectCreateNew";
import {banquetActions} from "./../../../redux/banquetInfo/banquetInfoActions";

type PropsType = {
    isEdit: boolean
    CusMenuSwitch?: any
}

export const BlankHeader: React.FC<PropsType> = ({isEdit, CusMenuSwitch}) => {

    const d = useDispatch()

    const setName = (e: ChangeEvent<HTMLInputElement>) => {
        d(banquetActions.setName(e.target.value as any))
    }
    const setDesc = (e: ChangeEvent<HTMLTextAreaElement>) => {
        d(banquetActions.setDescription(e.target.value as any))
    }

    const data = useSelector(selectBanquet)

    const customers = useSelector(selectUsers)
    console.log(customers)
    const customerInfo = customers.selectedCustomer

    const ChooseCustomer = () => {
        CusMenuSwitch(true)
    }

    let date = ""
    let time = ""
    const SetTime = (text:string) => {
        time = text
    }
    return <div>
        <div className={s.item}>
            {!isEdit && <div>
                <div className={s.banquetWithName}><input className={s.input} placeholder={"Banquet name"} onChange={setName} value={data.name}  readOnly/></div>
                <div><textarea className={s.input} placeholder={"Description"} onChange={setDesc} value={data.decription ? data.decription : ""} readOnly></textarea></div>
            </div>
            }
            {isEdit && <div>
                <div className={s.banquetWithName}><input className={s.input} placeholder={"Banquet name"} onChange={setName}/></div>
                <div><textarea className={s.input} placeholder={"Description"} onChange={setDesc} ></textarea></div>
            </div>
            }
            <hr className={s.solid}/>
            <div>
                <input type="time" id="start" name="trip-start"/>
            </div>
            <div>
                <input type="date" id="start" onChange={(event) => console.log(event.target.value) } name="trip-start"/>
            </div>
        </div>
        <div className={s.item}>
            {isEdit && <div onClick={ChooseCustomer}>
                Customer: {customerInfo ? customerInfo?.name : ""}
            </div>
            }
            {!isEdit && <div>
                Customer: {customerInfo?.name}
            </div>
            }
            <hr className={s.solid}/>
        </div>

    </div>
}
