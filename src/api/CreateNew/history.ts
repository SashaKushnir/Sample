import { ApiHistoryResultType, myGetInstance } from "../api";


export const history = {
    getAllHistory: () => {
        return myGetInstance.get<ApiHistoryResultType>('/banquets')
    }
}
