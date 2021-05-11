import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {selectHistory, selectMenuKitchen, selectServices, selectTickets} from "../../../selectors/selectCreateNew";
import {OneBanquet} from "./OneBanquet/OneBanquet";
import {History} from "../../../redux/history/newHistoryReducer";
import {setHistoryT} from "../../../redux/history/newHistoryThunk";
import {setMenuT} from "../../../redux/newBanknote/newBanknoteThunks";
import {setServicesT} from "../../../redux/services/servicesThunks";
import {setTicketsT} from "../../../redux/tickets/ticketsThunks";
import {OneDayPDF} from "../../PDF/OneDayPDF/OneDayPDF";
import {NavLink} from "react-router-dom";
import s from "./OneBanquet/OneBanquet.module.css";
import {PrintIcon} from "../../../common/compon/HistoryIcons/PrintIcon";

export const Banquets: React.FC = () => {
    const d = useDispatch()
    const historyData = useSelector(selectHistory)
    const menus = useSelector(selectMenuKitchen)
    const tickets = useSelector(selectTickets)
    const services = useSelector(selectServices)
    const history = historyData?.map((obj: History) => <OneBanquet data={obj}/>).reverse()
    useEffect(() => {
        d(setHistoryT())
        if(!menus)
            d(setMenuT())
        if(!services)
            d(setServicesT())
        if(!tickets)
            d(setTicketsT())
    }, [])

    const searchForBegDateTime = () => {

    }

    return <div>
        <NavLink to="/OneDayPdf" className={s.navLink}>
            <div className={s.btn}>Звіт на день</div>
        </NavLink>
        <div>
            <input type="datetime-local" id="meeting-time" className={s.time} onChange={searchForBegDateTime}/>
        </div>
        {history}
    </div>


}
