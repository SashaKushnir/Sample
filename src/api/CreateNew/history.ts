import {ApiHistoryResultType, ApiResultType, myGetInstance, myPostInstance} from "../api";
import {BanquetType} from "../../redux/formPostObject/createObjReducer";


export const history = {
    getAllHistory: () => {
        return myGetInstance.get<ApiHistoryResultType>('/banquets')
    },
    postHistory: (obj: BanquetType, api_token: string) => {
        return myPostInstance.post('/banquets', {banquet: obj}, {
            headers: {
                "api_token": api_token
            }
        })
    },
    deleteHistory: (id:number,api_token: string) => {
        const obj = {
            "banquet": {
                "id": id
            }
        }

        return myPostInstance.delete<ApiResultType>('/banquets', {
            headers: {
                "api_token": api_token
            },
            data: obj
        })
    },
}
