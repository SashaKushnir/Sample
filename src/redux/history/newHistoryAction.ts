import {History} from "./newHistoryReducer";


export const historyActions = {
    setHistoryInfo: (history: Array<History>) => ({type: "SET_HISTORY_INFO", history}) as const,
    deleteOneHistoty: (id:number) => ({type: "DELETE_ONE_HISTORY", id}) as const
}
