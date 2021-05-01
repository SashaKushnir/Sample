import {ApiGetBasicSpacesResponseType, myGetInstance} from "../api";

export const spaces = {
    getListOfSpaces: (token: string) => {
        return myGetInstance.get<ApiGetBasicSpacesResponseType>('/spaces', {
            headers: {
                api_token: token
            }
        })
    },
}