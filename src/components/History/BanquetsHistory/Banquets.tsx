import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector, useStore} from "react-redux";
import {selectHistory, selectMenuKitchen, selectServices, selectTickets} from "../../../selectors/selectCreateNew";
import {OneBanquet} from "./OneBanquet/OneBanquet";
import {History} from "../../../redux/history/newHistoryReducer";
import {getFilteredHistory, setHistoryT} from "../../../redux/history/newHistoryThunk";
import {setMenuT} from "../../../redux/newBanknote/newBanknoteThunks";
import {setServicesT} from "../../../redux/services/servicesThunks";
import {setTicketsT} from "../../../redux/tickets/ticketsThunks";
import {NavLink} from "react-router-dom";
import s from "./Banquets.module.css";
import {commonActions} from "../../../redux/forCommon/forCommonActions";
import {DatePicker} from "antd";
import {RootState} from "../../../redux/store";
import {historyActions} from "../../../redux/history/newHistoryAction";
import moment from 'moment';
import {pathPrefix} from "../../../App";
import {CheckForDeleted} from "../../../common/compon/DeletedItems/DeletedItems";

const {RangePicker} = DatePicker
const dateFormat = 'YYYY-MM-DD';

export const Banquets: React.FC = () => {
    const d = useDispatch()
    const [page, setPage] = useState(1);
    const historyData = useSelector(selectHistory)
    const menus = useSelector(selectMenuKitchen)
    const tickets = useSelector(selectTickets)
    const services = useSelector(selectServices)
    const history = historyData?.map((obj: History, index) => {
        if (CheckForDeleted(obj)) return
        return <OneBanquet key={index} data={obj}/>
    }).reverse()

    const beg_datetime = useSelector((state: RootState) => state.history.beg_datetime)
    const end_datetime = useSelector((state: RootState) => state.history.end_datetime)
    const once = () => {
        if (!(beg_datetime && end_datetime))
            d(setHistoryT(page));
        if (!menus)
            d(setMenuT())
        if (!services)
            d(setServicesT())
        if (!tickets)
            d(setTicketsT())
    }
    useEffect(() => {
      once();
      console.log(page)
    }, [page]);

    const createpdf = () => {
        if (historyData)
            d(commonActions.setOneDayBanquetPdf(historyData))
    }
    const rangePicker = (val: any, str: Array<string>) => {
        d(historyActions.setBegDatetime(str[0]))
        d(historyActions.setEndDatetime(str[1]))
        d(commonActions.setPDF_date(str[0]))
        if (str[0] && str[1])
            d(getFilteredHistory(str[0], str[1]))
        else
            d(setHistoryT(page));
    }

    return (
      <div>
        <NavLink to={`${pathPrefix}/OneDayPdf`} className={s.ForDayPdfNavLink}>
          <div className={s.btn} onClick={createpdf}>
            Звіт на день
          </div>
        </NavLink>
        <div>
          {beg_datetime && end_datetime ? (
            <RangePicker
              defaultValue={[
                moment(beg_datetime, dateFormat),
                moment(end_datetime, dateFormat),
              ]}
              format={dateFormat}
              onChange={rangePicker}
            />
          ) : (
            <RangePicker format={dateFormat} onChange={rangePicker} />
          )}
          <div>
            <div
              onClick={() => {
                setPage((state) => state - 1);
              }}
            >
              Попередня
            </div>
            <div
              onClick={() => {
                setPage((state) => state + 1);
              }}
            >
              Наступна
            </div>
          </div>
        </div>
        {history}
      </div>
    );


}
