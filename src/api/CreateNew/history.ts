import {ApiHistoryResultType, ApiResultType, myGetInstance, myPostInstance} from "../api";
import {BanquetType} from "../../redux/formPostObject/createObjReducer";


export const history = {
    getAllHistory: (headerToken: string, page: number, beg_datetime: string = "", end_datetime: string = "") => {
        console.log("here")
        return myGetInstance.get<ApiHistoryResultType>(`/banquets?page[number]=${page}&page[size]=30`,{
            headers : {
                'api-token': headerToken
            }
        })
    },
    getFilteredHistory: (beg_datetime: string = "", end_datetime: string = "", api_token: string) => {
        return myGetInstance.get<ApiHistoryResultType>(`/banquets?beg_datetime[min]=${beg_datetime}&end_datetime[max]=${end_datetime}`, {
            headers: {
                'api-token': api_token
            }
        })
    },
    postHistory: (obj: BanquetType, api_token: string) => {
        return myPostInstance.post('/banquets', {data: obj}, {
            headers: {
                'api-token': api_token
            }
        })
    },
    patchHistory: (patchBanquet: BanquetType, token: string) => {
        return myPostInstance.patch('/banquets', {
                "data": patchBanquet
            }, {
                headers: {
                    'api-token': token
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
                'api-token': api_token
            },
            data: obj
        })
    },
}
