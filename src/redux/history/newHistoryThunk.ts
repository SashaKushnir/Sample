import { Dispatch } from "redux";
import { ActionsTypes } from "../store";
import { commonActions } from "../forCommon/forCommonActions";
import { history } from "../../api/CreateNew/history";
import {historyActions} from "./newHistoryAction";

export const setHistoryT = () => async (d: Dispatch<ActionsTypes<typeof historyActions | typeof commonActions>>) => {

    try {
        d(commonActions.fetchingToggle(true))
        const response = await history.getAllHistory()
        // Set response to Bll
        if (response.data.response_status && !response.data.response_error) {
            console.log(response.data.banquets)
            d(historyActions.setHistoryInfo(response.data.banquets))
            console.log(response.data.banquets[1].comments)
        } else {
            console.warn(response.data.response_error)
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
        if (response.data.response_status && !response.data.response_error) {
            d(historyActions.deleteOneHistoty(id))
            d(commonActions.fetchingToggle(false))
        } else {
            console.warn(response.data.response_error)
            d(commonActions.fetchingToggle(false))
        }
    } catch (error) {
        alert("Something went wrong")
        console.warn(error)
        d(commonActions.fetchingToggle(false))
    }
}
