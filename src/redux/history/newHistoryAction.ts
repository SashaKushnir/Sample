import {History} from "./newHistoryReducer";


export const historyActions = {
    setHistoryInfo: (history: Array<History>) => ({type: "SET_HISTORY_INFO", history}) as const,
    deleteOneHistoty: (id:number) => ({type: "DELETE_ONE_HISTORY", id}) as const,
    setBegDatetime: (beg_datetime: string) => ({type: "SET_BEG_DATETIME", beg_datetime}) as const,
    setEndDatetime: (end_datetime: string) => ({type: "SET_END_DATETIME", end_datetime}) as const,
}
