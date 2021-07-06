import React, {ChangeEvent, useEffect, useState} from 'react'
import s from './BlankHeader.module.css'
import {useDispatch, useSelector} from "react-redux";
import {selectBanquet, selectBanquetsStates, selectHistory} from "../../../selectors/selectCreateNew";
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
import {DeleteIcon} from "../../../common/compon/HistoryIcons/DeleteIcon";
import {BasketIcon} from "../../../common/compon/BlankHeader/Basket";
import {CheckIcon} from "../../../common/compon/BlankHeader/Check";

type PropsType = {
    isEdit: boolean
    CusMenuSwitch?: any
}


export const BlankHeader: React.FC<PropsType> = ({isEdit, CusMenuSwitch}) => {

    const d = useDispatch()
    const all_states = useSelector(selectBanquetsStates)
    const banquet = useSelector(selectBanquet)
    //const history_count = useSelector(selectHistory)?.length // add banquet id to name input
    const customerInfo = banquet.customer
    const currentStateInBLL = useSelector((state: RootState) => state.banquet.state?.name)
    const format = 'HH:mm';
    const format_date = 'YYYY/MM/DD';
    const [currentState, setCurrentState] = useState(currentStateInBLL ? currentStateInBLL : (all_states ? all_states[0].name : undefined))
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
        setCurrentState(e.target.value)
        all_states?.forEach(obj => {
            if (e.target.value === obj.name)
                d(banquetActions.setState(obj))
        })
    }
    const ChooseCustomer = () => {
        CusMenuSwitch(true)
    }
    const [show_time, Show_time] = useState(false);

    useEffect(() => {
        if (banquet.beginning) {
            Show_time(true)
        }
    }, [])
    const setDate = (e: any, text: string) => {
        d(banquetActions.clearAllInfoAboutSpaces())
        Show_time(false);
        if (text !== "" && banquet.beginning !== '' && banquet.end !== '') {
            let date = banquet.beginning
            date = date.slice(-9)
            setBegining(text, date)

            let date1 = banquet.end
            date1 = date1.slice(-9)
            setEnd(text, date1)
            Show_time(true);
        } else if (text !== "") {
            Show_time(true);
            setBegining(text, " 00:00:00")
            setEnd(text, " 23:59:00")
        } else {
            Show_time(false);
            d(banquetActions.setEnd(""))
            d(banquetActions.setBegining(""))
        }

        if (text) {
            if (isEdit)
                d(gettingSpacesByDate(true))
            else
                d(gettingSpacesByDate(false))
        }

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
        if (time === '') {
            return
        }
        let beg: string = banquet.beginning
        beg = beg.slice(0, -8)
        beg += time + ':00'
        d(banquetActions.setBegining(beg))
    }
    const SetEndTime = (e: any, time: string) => {
        if (time === '') {
            return
        }
        let end: string = banquet.end
        end = end.slice(0, -8)
        end += time + ':00'
        d(banquetActions.setEnd(end))
    }

    const stopEditMode = () => {
        d(commonActions.banquetModeToggle(false))
        clearBasket()
        d(banquetActions.removeBanquetId())
        d(banquetActions.clearFlagsToPreventSpacesBeingDisabled())
        d(banquetActions.clearAllInfoAboutSpaces())
        d(banquetActions.clearAllBlankInfoL())
        Show_time(false);
    }
    const clearBasket = () => {
        d(clearAllBasket())
        localStorage.removeItem("menus")
        localStorage.removeItem("tickets")
        localStorage.removeItem("services")
    }

    return <div className={s.all}>
        {isEdit && <>
          <div className={s.main_block}>
            <div className={s.empty}>

            </div>
            <div className={s.main}>
              <div className={s.name_desc + ' ' + s.blocks}>
                <input className={s.input + " " + s.input_name} placeholder={"Назва банкета"}
                       onChange={setName} defaultValue={banquet.name ? banquet.name : ""}/>
                <textarea className={s.input} placeholder={"Опис"} onChange={setDesc}
                          defaultValue={banquet.description ? banquet.description : ""}/>
                <div onClick={ChooseCustomer} className={s.customer}>
                  Замовник: {customerInfo ? customerInfo?.name + " " + customerInfo?.surname : ""}
                </div>


              </div>
              <div className={s.advance + ' ' + s.blocks}>
                Аванс <input className={s.input_advance + ' ' + s.input} type="number" onChange={setAdvance}
                             defaultValue={banquet.advance_amount}/>
              </div>
              <div className={s.select_time + ' ' + s.blocks}>
                  {banquet.beginning &&
                  <DatePicker onChange={(e: any, time: string) => {
                      setDate(e, time)
                  }}
                              defaultValue={moment(banquet.beginning.slice(0, -9), format_date)}/>
                  }
                  {!banquet.beginning &&
                  <DatePicker onChange={(e: any, time: string) => {
                      setDate(e, time)
                  }}/>
                  }
                  {show_time && <div className={s.time}>
                    <div className={s.start_time}>

                      <p className={s.date_text}>{banquet.beginning.slice(0, -9)}</p>
                      <p></p>
                      <p></p>
                    </div>
                    <div className={s.time_picker}>
                      <TimePicker format={format} onChange={(e: any, time: string) => {
                          SetBegTime(e, time)
                      }} inputReadOnly={false}
                                  defaultValue={moment(banquet.beginning ? banquet.beginning.slice(11) : '00:00', format)}/>
                      <div className={s.ture}><p>-</p></div>
                      <TimePicker format={format} onChange={(e: any, time: string) => {
                          SetEndTime(e, time)
                      }} inputReadOnly={true}
                                  defaultValue={moment(banquet.end ? banquet.end.slice(11) : '23:59', format)}/>
                    </div>
                    <div className={s.end_time}>
                      <p></p>
                      <p></p>
                      <p className={s.date_text}>{banquet.end.slice(0, -9)}</p>
                    </div>
                  </div>
                  }

              </div>

              <div className={s.state + ' ' + s.blocks}>
                Стан <select className={s.input_state} onChange={setState} value={currentState}>
                <option style={{display: "none"}}></option>
                  {states}
              </select>
              </div>
              <div className={s.edit + ' ' + s.blocks}>
                  {isEditMode && <div>
                    <h4>Режим редагування</h4>
                    <div onClick={stopEditMode}>
                      <DeleteIcon/>
                    </div>
                  </div>
                  }
                  {/*<div>*/}
                  {/*    <div onClick={clearBasket} className={s.btn} title=""><DeleteIcon/></div>*/}
                  {/*</div>*/}
                <div>
                  <div onClick={clearBasket} className={s.btn} title=""><BasketIcon/></div>
                </div>
              </div>

            </div>
          </div>
          <div className={s.spaces}>
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
                <input className={s.input + " " + s.input_name} value={banquet.name} readOnly/>
                <textarea className={s.input} value={banquet.description ? banquet.description : ""} readOnly/>
                <div className={s.customer}>
                  Замовник: {customerInfo?.name + " " + customerInfo?.surname}
                </div>
              </div>
              <div className={s.advance}>
                Аванс <input type="text" className={s.input_advance + ' ' + s.input}
                             value={banquet.advance_amount}
                             readOnly/>
              </div>
              <div className={s.time + ' ' + s.blocks}>
                <div className={s.select_time + ' ' + s.blocks}>
                  <DatePicker
                    value={moment(banquet.beginning ? banquet.beginning.slice(0, -9) : "2001-01-01", format_date)}/>
                </div>
                <div className={s.start_time}>

                  <p className={s.date_text}>{banquet.beginning.slice(0, -9)}</p>
                  <p></p>
                  <p></p>
                </div>

                <div className={s.time_picker}>
                  <TimePicker format={format}
                              value={moment(banquet.beginning ? banquet.beginning.slice(11) : '00:00', format)}/>
                  <div className={s.ture}><p>-</p></div>
                  <TimePicker format={format}
                              value={moment(banquet.end ? banquet.end.slice(11) : '23:59', format)}/>
                </div>
                <div className={s.end_time}>
                  <p></p>
                  <p></p>
                  <p className={s.date_text}>{banquet.end.slice(0, -9)}</p>
                </div>

              </div>

              <div className={s.state}>
                Стан <select value={banquet.state?.name} aria-readonly>
                <option>{banquet.state?.name}</option>
              </select>
              </div>
              <div>
                None
              </div>

            </div>
          </div>
          <div>
            <div className={s.spacesWrapper}>
                {nonEditableSpaces}
            </div>
          </div>
        </>
        }
    </div>
}
