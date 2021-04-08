import React, {useEffect} from 'react'
import styles from './Banquets.module.css'
import {useDispatch, useSelector} from "react-redux";
import {selectHistory} from "../../../selectors/selectCreateNew";
import {OneBanquet} from "./OneBanquet/OneBanquet";
import {History} from "../../../redux/history/newHistoryReducer";
import {RootState} from "../../../redux/store";
import {setHistoryT} from "../../../redux/history/newHistoryThunk";

export const Banquets: React.FC = () => {
    const d = useDispatch()
    const historyData = useSelector(selectHistory)

    const history = historyData?.map((obj: History) => <OneBanquet data={obj}/>).reverse()
    useEffect(() => {
        d(setHistoryT())
    }, [])
    return <>
        {history}
    </>


}
