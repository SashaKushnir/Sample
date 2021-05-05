import React, {ChangeEvent, useEffect, useState} from 'react'
import s from './BlankHeader.module.css'
import {useDispatch, useSelector} from "react-redux";
import {BanquetsStates, selectBanquet, selectUsers} from "../../../selectors/selectCreateNew";
import {banquetActions} from "./../../../redux/banquetInfo/banquetInfoActions";
import {RootState} from "../../../redux/store";
import {commonActions} from "../../../redux/forCommon/forCommonActions";
import {clearAllBasket} from "../../../redux/forCommon/forCommonThunks";
import {getListOfSpaces} from "../../../redux/banquetInfo/banquetInfoT";
import {SpaceI} from "../../../common/compon/SpaceI/SpaceI";
import {BanquetState} from "../../../redux/BanquetState/BanquetStatesR";

type PropsType = {
    isEdit: boolean
    CusMenuSwitch?: any
}


export const BlankHeader: React.FC<PropsType> = ({isEdit, CusMenuSwitch}) => {

    const d = useDispatch()
    const all_states = useSelector(BanquetsStates)
    const states = all_states?.map((obj: BanquetState) => <option>{obj.name}</option>)

    const isEditMode = useSelector((state: RootState) => state.common.banquetEditMode)
    const spaces = useSelector((state: RootState) => state.banquet.basicSpaces)?.map((spaceI, index) =>
        <SpaceI key={index} spaceI={spaceI} editMode={isEdit}/>)

    const setName = (e: ChangeEvent<HTMLInputElement>) => {
        d(banquetActions.setName(e.target.value as any))
    }
    const setDesc = (e: ChangeEvent<HTMLTextAreaElement>) => {
        d(banquetActions.setDescription(e.target.value as any))
    }
    const setAdvance = (e: ChangeEvent<HTMLInputElement>) => {
        d(banquetActions.setAdvance(e.target.value as any))
    }
    const setState = (e: ChangeEvent<HTMLSelectElement>) => {
        all_states?.map(obj => {
            if (e.target.value === obj.name)
                d(banquetActions.setState(obj))
        })
    }
    const data = useSelector(selectBanquet)

    const customers = useSelector(selectBanquet)
    const customerInfo = customers.customer

    const ChooseCustomer = () => {
        CusMenuSwitch(true)
    }

    const setBegining = (e: ChangeEvent<HTMLInputElement>) => {
        let time = e.target.value.replace("T", " ")
        console.log(time)
        time += ":00"
        d(banquetActions.setBegining(time))
    }
    const setEnd = (e: ChangeEvent<HTMLInputElement>) => {
        let time = e.target.value.replace("T", " ")
        time += ":00"
        d(banquetActions.setEnd(time))
    }

    const setDefaultTime = (my_time: string) => {
        if (my_time) {
            let time = my_time.replace(" ", "T")
            time = time.slice(0, -3)
            return time
        }
    }

    const stopEditMode = () => {
        d(commonActions.banquetModeToggle(false))
        clearBasket()
        d(banquetActions.removeBanquetId())
    }
    const clearBasket = () => {
        d(clearAllBasket())
        localStorage.removeItem("menus")
        localStorage.removeItem("tickets")
        localStorage.removeItem("services")
    }


    return <div>
        <div className={s.info_bock}>
            {isEdit && <div className={s.margin}>
                <div className={s.banquetWithName}>
                    <input className={s.input} placeholder={"Banquet name"}
                           onChange={setName} defaultValue={data.name ? data.name : ""}/>
                </div>
                <div>
                    <textarea className={s.input} placeholder={"Description"} onChange={setDesc}
                              defaultValue={data.description ? data.description : ""}/>
                </div>
                {isEditMode && <div>
                    Edit Mode
                    <button onClick={stopEditMode}>
                        Stop Edit Mode
                    </button>
                </div>
                }
                {!isEditMode && <div>
                    Creating Mode
                </div>
                }
                <div>
                    <button onClick={clearBasket}>Clear Basket</button>
                </div>
            </div>
            }
            {!isEdit && <div className={s.margin}>
                <div className={s.banquetWithName}>
                    <input className={s.input} placeholder={"Banquet name"}
                           onChange={setName} value={data.name} readOnly/>
                </div>
                <div>
                    <textarea className={s.input} placeholder={"Description"} onChange={setDesc}
                              value={data.description ? data.description : ""} readOnly/>
                </div>
            </div>
            }

            <hr className={s.solid}/>
        </div>
        <div className={s.info_bock}>

            {isEdit && <div className={s.margin}>
                <div onClick={ChooseCustomer} className={s.customer}>
                    Customer: {customerInfo ? customerInfo?.name : ""}
                </div>
                <input type="datetime-local" id="meeting-time" className={s.time} onChange={setBegining}
                       defaultValue={setDefaultTime(data.beginning)}/>
            </div>
            }
            {!isEdit && <div className={s.margin}>
                <div className={s.customer}>
                    Customer: {customerInfo?.name}
                </div>
                <input type="datetime-local" id="meeting-time" className={s.time} value={setDefaultTime(data.beginning)}
                       readOnly/>
            </div>
            }
            <div className={s.margin}>
                {isEdit && <div className={s.advance}>
                    Advance <input type="text" onChange={setAdvance} defaultValue={data.advance_amount}/>
                    <input type="datetime-local" id="meeting-time" className={s.time} onChange={setEnd}
                           defaultValue={setDefaultTime(data.end)}/>
                    <div className={s.advance}>
                        State <select onChange={setState} defaultValue={data.state?.name}>
                        {states}
                    </select>
                    </div>
                </div>}
                {!isEdit &&
                <div className={s.advance}>
                    Advance <input type="text" value={data.advance_amount} readOnly/>
                    <input type="datetime-local" id="meeting-time" className={s.time} value={setDefaultTime(data.end)}
                           readOnly/>
                    <div className={s.advance}>
                        State <select defaultValue={data.state?.name} aria-readonly>
                        <option>{data.state?.name}</option>
                    </select>
                    </div>
                </div>}
            </div>
            <hr className={s.solid}/>
        </div>
        <div>
            Spaces
            <div className={s.spacesWrapper}>
                {spaces}
            </div>
        </div>

    </div>
}
