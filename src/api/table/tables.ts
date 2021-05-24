import {ApiGetBasicSpacesResponseType, myGetInstance} from "../api";

export const spaces = {
    getListOfSpaces: (token: string) => {
        return myGetInstance.get<ApiGetBasicSpacesResponseType>('/spaces', {
            headers: {
                api_token: token
            }
        })
    },
    getOrderedSpaces: (beg_datetime: string, end_datetime: string, banquet_id: number = 0, token: string) => {
        return myGetInstance.get<ApiGetBasicSpacesResponseType>(`/spaces?beg_datetime=${beg_datetime}&end_datetime=${end_datetime}&banquet_id[except]=${banquet_id}`, {
            headers: {
                api_token: token
            }
        })
    }
}