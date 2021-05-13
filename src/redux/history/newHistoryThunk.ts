import { Dispatch } from "redux";
import { ActionsTypes } from "../store";
import { commonActions } from "../forCommon/forCommonActions";
import { history } from "../../api/CreateNew/history";
import {historyActions} from "./newHistoryAction";
import {BanquetType} from "../formPostObject/createObjReducer";

export const setHistoryT = () => async (d: Dispatch<ActionsTypes<typeof historyActions | typeof commonActions>>) => {

    try {
        d(commonActions.fetchingToggle(true))
        const response = await history.getAllHistory()
        // Set response to Bll
        if (response.data.success ) {
            d(historyActions.setHistoryInfo(response.data.data))
        } else {
            console.warn(response.data.message)
        }
        d(commonActions.fetchingToggle(false))
    } catch (error) {
        alert("Something went wrongПП")
        console.warn(error)
        d(commonActions.fetchingToggle(false))
    }
}

export const getFilteredHistory = (beg_datetime: string, end_datetime:string) => async (d: Dispatch<ActionsTypes<typeof historyActions | typeof commonActions>>) => {

    try {
        d(commonActions.fetchingToggle(true))
        end_datetime+=' 23:59:59'
        const response = await history.getFilteredHistory(beg_datetime, end_datetime)
        // Set response to Bll
        if (response.data.success ) {
            d(historyActions.setHistoryInfo(response.data.data))
        } else {
            console.warn(response.data.message)
        }
        d(commonActions.fetchingToggle(false))
    } catch (error) {
        alert("No results")
        console.warn(error)
        d(commonActions.fetchingToggle(false))
    }
}

export const updateHistoryT = (updObj: BanquetType, token: string) => async (d: Dispatch<ActionsTypes<typeof historyActions | typeof commonActions>>) => {

    try {
        d(commonActions.fetchingToggle(true))
        const response = await history.patchHistory(updObj, token)
        if (true) {

        } else {
        }
        d(commonActions.fetchingToggle(false))
    } catch (error) {
        alert("Something went wrong")
        console.warn(error)
        d(commonActions.fetchingToggle(false))
    }
}
export const deleteHistoryT = (id:number, api_token:string) => async (d: Dispatch<ActionsTypes<typeof historyActions | typeof commonActions>>) => {

    try {
        d(commonActions.fetchingToggle(true))
        const response = await history.deleteHistory(id, api_token)

        // Set response to Bll
        if (response.data.success) {
            d(historyActions.deleteOneHistoty(id))
            d(commonActions.fetchingToggle(false))
        } else {
            console.warn(response.data.message)
            d(commonActions.fetchingToggle(false))
        }
    } catch (error) {
        alert("Something went wrong")
        console.warn(error)
        d(commonActions.fetchingToggle(false))
    }
}
