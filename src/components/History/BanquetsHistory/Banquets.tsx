import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {selectHistory, selectMenuKitchen, selectServices, selectTickets} from "../../../selectors/selectCreateNew";
import {OneBanquet} from "./OneBanquet/OneBanquet";
import {History} from "../../../redux/history/newHistoryReducer";
import {getFilteredHistory, setHistoryT} from "../../../redux/history/newHistoryThunk";
import {setMenuT} from "../../../redux/newBanknote/newBanknoteThunks";
import {setServicesT} from "../../../redux/services/servicesThunks";
import {setTicketsT} from "../../../redux/tickets/ticketsThunks";
import {NavLink} from "react-router-dom";
import s from "./OneBanquet/OneBanquet.module.css";
import {commonActions} from "../../../redux/forCommon/forCommonActions";
import {DatePicker} from "antd";

const { RangePicker } = DatePicker
const dateFormat = 'YYYY-MM-DD';


export const Banquets: React.FC = () => {
    const d = useDispatch()
    const historyData = useSelector(selectHistory)
    const menus = useSelector(selectMenuKitchen)
    const tickets = useSelector(selectTickets)
    const services = useSelector(selectServices)
    const history = historyData?.map((obj: History, index) =>
        <OneBanquet key={index} data={obj}/>).reverse()
    const once = () => {
        d(setHistoryT())
        if(!menus)
            d(setMenuT())
        if(!services)
            d(setServicesT())
        if(!tickets)
            d(setTicketsT())
    }
    useEffect(() => {
        once()
    }, [])

    const createpdf = () => {
        if (historyData)
            d(commonActions.setOneBanquetPdf(historyData))
    }
    let date = ''
    const rangePicker = (val: any, str: any) => {
        d(commonActions.setPDF_date(str[0]))
        if(str[0] && str[1])
        d(getFilteredHistory(str[0], str[1]))
    }

    return <div>
        <NavLink to="/OneDayPdf" className={s.navLink}>
            <div className={s.btn} onClick={createpdf}>Звіт на день</div>
        </NavLink>
        <div>
            <RangePicker
                format={dateFormat}
                onChange={rangePicker}
            />
        </div>
        {history}
    </div>


}
