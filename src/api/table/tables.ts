import {ApiBanquetStatesResponseType, ApiGetBasicSpacesResponseType, myGetInstance} from "../api";

export const spaces = {
    getListOfSpaces: (token: string) => {
        return myGetInstance.get<ApiGetBasicSpacesResponseType>('/spaces', {
            headers: {
                api_token: token
            }
        })
    },
    getOrderedSpaces: (beg_datetime: string, end_datetime: string, token: string) => {
        return myGetInstance.get<ApiGetBasicSpacesResponseType>(`/spaces?beg_datetime=${beg_datetime}&end_datetime=${end_datetime}`, {
            headers: {
                api_token: token
            }
        })
    }
}