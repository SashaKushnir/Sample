import React, {ChangeEvent, useEffect, useState} from 'react'
import s from './BlankHeader.module.css'
import {useDispatch, useSelector} from "react-redux";
import {selectBanquet, selectBanquetsStates} from "../../../selectors/selectCreateNew";
import {banquetActions} from "../../../redux/banquetInfo/banquetInfoActions";
import {RootState} from "../../../redux/store";
import {commonActions} from "../../../redux/forCommon/forCommonActions";
import {clearAllBasket} from "../../../redux/forCommon/forCommonThunks";
import {gettingSpacesByDate} from "../../../redux/banquetInfo/banquetInfoT";
import {SpaceI} from "../../../common/compon/SpaceI/SpaceI";
import {BanquetState} from "../../../redux/BanquetState/BanquetStatesR";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import {DatePicker, TimePicker} from "antd";

type PropsType = {
    isEdit: boolean
    CusMenuSwitch?: any
}


export const BlankHeader: React.FC<PropsType> = ({isEdit, CusMenuSwitch}) => {

    const d = useDispatch()
    const all_states = useSelector(selectBanquetsStates)
    const states = all_states?.map((obj: BanquetState, index) =>
        <option key={index}>{obj.name}</option>)

    const isEditMode = useSelector((state: RootState) => state.common.banquetEditMode)
    const spaces = useSelector((state: RootState) => state.banquet.basicSpaces)?.map((spaceI, index) =>
        <SpaceI key={index} spaceI={spaceI} editMode={isEdit}/>)
    const nonEditableSpaces = useSelector((state: RootState) => state.banquet.basicSpaces)?.filter((spaceI) => spaceI.selected)
        ?.map((spaceI, index) =>
        <SpaceI key={index} spaceI={spaceI} editMode={isEdit}/>)

    const setName = (e: ChangeEvent<HTMLInputElement>) => {
        d(banquetActions.setName(e.target.value.trim() as any))
    }
    const setDesc = (e: ChangeEvent<HTMLTextAreaElement>) => {
        d(banquetActions.setDescription(e.target.value.trim() as any))
    }
    const setAdvance = (e: ChangeEvent<HTMLInputElement>) => {
        d(banquetActions.setAdvance(e.target.value.trim() as any))
    }



    const setState = (e: ChangeEvent<HTMLSelectElement>) => {
        all_states?.forEach(obj => {
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

    const [show_time, Show_time] = useState(false);

    useEffect(() => {
        if (data.beginning) {
            Show_time(true)
        }
    }, [])
    useEffect(() => {
        if(all_states)
        d(banquetActions.setState(all_states[0]))
    }, [])

    const setDate = (e: any, text: string) => {
        d(banquetActions.clearAllInfoAboutSpaces())
        Show_time(false);
        if (text !== "" && data.beginning !== '' && data.end !== '') {
            let date = data.beginning
            date = date.slice(-9)
            console.log(text,date)
            setBegining(text,date)

            let date1 = data.end
            date1 = date1.slice(-9)
            console.log(text,date1)
            setBegining(text,date1)
            Show_time(true);
        } else if(text !== ""){
            Show_time(true);
            setBegining(text," 00:00:00")
            setEnd(text," 23:59:00")
        }
        else{
            Show_time(false);
        }

        if(text)
        d(gettingSpacesByDate(false))
    }

    const setBegining = (date: string, time: string) => {
        date += time
        d(banquetActions.setBegining(date))
    }
    const setEnd = (date: string, time: string) => {
        date += time
        d(banquetActions.setEnd(date))
    }

    const SetBegTime = (e: any, time: string) => {
        if(time===''){
            return
        }
        let beg: string = data.beginning
        beg = beg.slice(0, -8)
        beg += time + ':00'
        console.log(beg)
        d(banquetActions.setBegining(beg))
    }
    const SetEndTime = (e: any, time: string) => {
        if(time===''){
            return
        }
        let end: string = data.end
        end = end.slice(0, -8)
        end += time + ':00'
        console.log(end)
        d(banquetActions.setEnd(end))
    }


    // const [changed, Change] = useState(false)
    // const ChangeDate = (inc:boolean) => {
    //     inc_dec_Date(true)
    //     // if(inc){
    //     //     if(changed){
    //     //
    //     //     }else{
    //     //         inc_dec_Date(true)
    //     //     }
    //     // }else{
    //     //     if(changed){
    //     //         inc_dec_Date(false)
    //     //     }else{
    //     //
    //     //     }
    //     // }
    // }
    //
    // const inc_dec_Date = (inc:boolean) => {
    //     if(inc){
    //         let end: string = data.end
    //         end.replace(' ','T')
    //         let date = new Date(end);
    //         date.setDate(date.getDate() + 1);
    //         end = convert(date)
    //         end += ' ' + data.end.slice(-8)
    //         console.log('setting to store',date,end);
    //         d(banquetActions.setEnd(end))
    //     }else{
    //         let end: string = data.end
    //         end.replace(' ','T')
    //         let date = new Date(end);
    //         date.setDate(date.getDate() - 1);
    //         end = convert(date)
    //         end += ' ' + data.end.slice(-8)
    //         console.log('result ',end);
    //         d(banquetActions.setEnd(end))
    //     }
    //
    // }
    //
    //
    // const CompareTime = (time1:string, time2:string) => {
    //     let h1 = time1.slice(10,13)
    //     let h2 = time2.slice(10,13)
    //     let m1 = time1.slice(13,15)
    //     let m2 = time2.slice(13,15)
    //     // console.log('hours ',h1, h2)
    //     // if(h1 > h2){
    //     //     console.log("need to switch")
    //     //     ChangeDate(true)
    //     //
    //     // }else if(time1.slice(2) === time2.slice(2)){
    //     //     ChangeDate(false)
    //     //     console.log("false")
    //     // }
    //
    //     console.log("final result",data.beginning, data.end)
    //
    // }
    //
    // const convert = (current_datetime:any) => {
    //     let month = current_datetime.getMonth() + 1
    //     if(month < 10){
    //         month = "0"+month
    //     }
    //     let formatted_date = current_datetime.getFullYear() + "-" + month + "-" + current_datetime.getDate();
    //     return formatted_date;
    // }

    const stopEditMode = () => {
        d(commonActions.banquetModeToggle(false))
        clearBasket()
        d(banquetActions.removeBanquetId())
        d(banquetActions.clearFlagsToPreventSpacesBeingDisabled())
        d(banquetActions.clearAllInfoAboutSpaces())
        d(gettingSpacesByDate(false))
    }
    const clearBasket = () => {
        d(clearAllBasket())
        localStorage.removeItem("menus")
        localStorage.removeItem("tickets")
        localStorage.removeItem("services")
    }

    const format = 'HH:mm';
    const formate_date = 'YYYY/MM/DD';
    return <div className={s.all}>
        {isEdit && <>
            <div className={s.main_block}>
                <div className={s.empty}>

                </div>
                <div className={s.main}>
                    <div className={s.name_desc + ' ' + s.blocks}>
                        <input className={s.input + " " + s.input_name} placeholder={"Назва банкета"}
                               onChange={setName} defaultValue={data.name ? data.name : ""}/>
                        <textarea className={s.input} placeholder={"Опис"} onChange={setDesc}
                                  defaultValue={data.description ? data.description : ""}/>
                        <div onClick={ChooseCustomer} className={s.customer}>
                            Замовник: {customerInfo ? customerInfo?.name : ""}
                        </div>


                    </div>
                    <div className={s.advance + ' ' + s.blocks}>
                        Аванс <input className={s.input_advance + ' ' + s.input} type="number" onChange={setAdvance}
                                     defaultValue={data.advance_amount}/>
                    </div>
                    <div className={s.time + ' ' + s.blocks}>
                        {data.beginning &&
                        <DatePicker onChange={(e: any, time: string) => {setDate(e, time)}}
                                    defaultValue={moment(data.beginning.slice(0, -9), formate_date)}/>
                        }
                        {!data.beginning &&
                        <DatePicker onChange={(e: any, time: string) => {setDate(e, time)}}/>
                        }
                        {show_time && <>
                            <TimePicker format={format} onChange={(e: any, time: string) => {SetBegTime(e, time)}} inputReadOnly={false}
                                        defaultValue={moment(data.beginning ? data.beginning.slice(11) : '00:00', format)}/>
                            <TimePicker format={format} onChange={(e: any, time: string) => {SetEndTime(e, time)}} inputReadOnly={true}
                                        defaultValue={moment(data.end ? data.end.slice(11) : '23:59', format)}/>
                        </>
                        }

                    </div>

                    <div className={s.state + ' ' + s.blocks}>
                        Стан <select className={s.input_state} onChange={setState}
                                     defaultValue={data.state?.name || 'none'}>
                        {states}
                    </select>
                    </div>
                    <div className={s.edit + ' ' + s.blocks}>
                        {isEditMode && <div>
                            Режим редагування
                            <button onClick={stopEditMode}>
                                Зупинити режим редагування
                            </button>
                        </div>
                        }
                        {!isEditMode && <div>

                        </div>
                        }
                        <div>
                            <button onClick={clearBasket}>Очистити корзину</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className={s.spaces}>
                Столи
                <div className={s.spacesWrapper}>
                    {spaces}
                </div>
            </div>
        </>
        }
        {!isEdit && <>
            <div className={s.main_block}>
                <div className={s.empty}>

                </div>
                <div className={s.main}>
                    <div className={s.name_desc + ' ' + s.blocks}>
                        <input className={s.input + " " + s.input_name} value={data.name} readOnly/>
                        <textarea className={s.input} value={data.description ? data.description : ""} readOnly/>
                        <div onClick={ChooseCustomer} className={s.customer}>
                            Замовник: {customerInfo?.name}
                        </div>
                    </div>
                    <div className={s.advance}>
                        Аванс <input type="text" className={s.input_advance + ' ' + s.input} value={data.advance_amount}
                                     readOnly/>
                    </div>
                    <div className={s.time + ' ' + s.blocks}>
                        <DatePicker
                            value={moment(data.beginning ? data.beginning.slice(0, -9) : "2001-01-01", formate_date)}/>
                        <TimePicker format={format}
                                    value={moment(data.beginning ? data.beginning.slice(11) : '00:00', format)}/>
                        <TimePicker format={format}
                                    value={moment(data.beginning ? data.end.slice(11) : '23:59', format)}/>
                    </div>

                    <div className={s.state}>
                        Стан <select defaultValue={data.state?.name} aria-readonly>
                        <option>{data.state?.name}</option>
                    </select>
                    </div>
                    <div>
                        None
                    </div>

                </div>
            </div>
            <div>
                Spaces
                <div className={s.spacesWrapper}>
                    {nonEditableSpaces}
                </div>
            </div>
        </>
        }
    </div>
}
// <div>
// <div className={s.info_bock}>
// {isEdit && <div className={s.margin}>
// <div className={s.banquetWithName}>
// <input className={s.input} placeholder={"Banquet name"}
//                        onChange={setName} defaultValue={data.name ? data.name : ""}/>
//             </div>
//             <div>
//                     <textarea className={s.input} placeholder={"Description"} onChange={setDesc}
//                               defaultValue={data.description ? data.description : ""}/>
//             </div>
//             {isEditMode && <div>
//                 Edit Mode
//                 <button onClick={stopEditMode}>
//                     Stop Edit Mode
//                 </button>
//             </div>
//             }
//             {!isEditMode && <div>
//                 Creating Mode
//             </div>
//             }
//             <div>
//                 <button onClick={clearBasket}>Clear Basket</button>
//             </div>
//         </div>
//         }
//         {!isEdit && <div className={s.margin}>
//             <div className={s.banquetWithName}>
//                 <input className={s.input} placeholder={"Banquet name"}
//                        onChange={setName} value={data.name} readOnly/>
//             </div>
//             <div>
//                     <textarea className={s.input} placeholder={"Description"} onChange={setDesc}
//                               value={data.description ? data.description : ""} readOnly/>
//             </div>
//         </div>
//         }
//
//         <hr className={s.solid}/>
//     </div>
//     <div className={s.info_bock}>
//
//         {isEdit && <div className={s.margin}>
//             <div onClick={ChooseCustomer} className={s.customer}>
//                 Customer: {customerInfo ? customerInfo?.name : ""}
//             </div>
//             <input type="datetime-local" id="meeting-time" className={s.time} onChange={setBegining}
//                    defaultValue={setDefaultTime(data.beginning)}/>
//         </div>
//         }
//         {!isEdit && <div className={s.margin}>
//             <div className={s.customer}>
//                 Customer: {customerInfo?.name}
//             </div>
//             <input type="datetime-local" id="meeting-time" className={s.time} value={setDefaultTime(data.beginning)}
//                    readOnly/>
//         </div>
//         }
//         <div className={s.margin}>
//             {isEdit && <div className={s.advance}>
//                 Advance <input type="number" onChange={setAdvance} defaultValue={data.advance_amount} />
//                 <input type="datetime-local" id="meeting-time" className={s.time} onChange={setEnd}
//                        defaultValue={setDefaultTime(data.end)}/>
//                 <div className={s.advance}>
//                     State <select onChange={setState} defaultValue={data.state?.name}>
//                     {states}
//                 </select>
//                 </div>
//             </div>}
//             {!isEdit &&
//             <div className={s.advance}>
//                 Advance <input type="text" value={data.advance_amount} readOnly/>
//                 <input type="datetime-local" id="meeting-time" className={s.time} value={setDefaultTime(data.end)}
//                        readOnly/>
//                 <div className={s.advance}>
//                     State <select defaultValue={data.state?.name} aria-readonly>
//                     <option>{data.state?.name}</option>
//                 </select>
//                 </div>
//             </div>}
//         </div>
//         <hr className={s.solid}/>
//     </div>
//     <div>
//         Spaces
//         <div className={s.spacesWrapper}>
//             {spaces}
//         </div>
//     </div>
//
// </div>
