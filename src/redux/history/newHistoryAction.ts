import {MenuArray, ProductCategoriesItem} from "../newBanknote/newBanknoteReducer";
import {History} from "./newHistoryReducer";


export const historyActions = {
    setHistoryInfo: (history: Array<History>) => ({type: "SET_HISTORY_INFO", history}) as const
}
