import {ApiHistoryResultType, ApiResultType, myGetInstance, myPostInstance} from "../api";
import {BanquetType} from "../../redux/formPostObject/createObjReducer";


export const history = {
    getAllHistory: (beg_datetime: string = "", end_datetime: string = "") => {
        return myGetInstance.get<ApiHistoryResultType>(`/banquets`)
    },
    getFilteredHistory: (beg_datetime: string = "", end_datetime: string = "") => {
        return myGetInstance.get<ApiHistoryResultType>(`/banquets?beg_datetime[min]=${beg_datetime}&end_datetime[max]=${end_datetime}`)
    },
    postHistory: (obj: BanquetType, api_token: string) => {
        return myPostInstance.post('/banquets', {data: obj}, {
            headers: {
                "api_token": api_token
            }
        })
    },
    patchHistory: (patchBanquet: BanquetType, token: string) => {
        return myPostInstance.patch('/banquets', {
                "data": patchBanquet
            }, {
                headers: {
                    api_token: token
                }
            }
        )
    },
    deleteHistory: (id: number, api_token: string) => {
        const obj = {
            "id": id
        }
        
        return myPostInstance.delete<ApiResultType>('/banquets', {
            headers: {
                "api_token": api_token
            },
            data: obj
        })
    },
}
