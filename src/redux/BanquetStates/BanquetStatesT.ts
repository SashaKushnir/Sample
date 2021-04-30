import { Dispatch } from "redux";
import { ActionsTypes } from "../store";
import { commonActions } from "../forCommon/forCommonActions";
import {BanquetStateActions} from "./BanquetStatesA";
import {BanquetStates} from "../../api/CreateNew/states";

export const setBanqueStateT = () => async (d: Dispatch<ActionsTypes<typeof BanquetStateActions | typeof commonActions>>) => {

    try {
        d(commonActions.fetchingToggle(true))
        const response = await BanquetStates.getBanquetStates()
        // Set response to Bll
        if (response.data.response_status && !response.data.response_error) {
            console.log(response.data.states)
            d(BanquetStateActions.setStates(response.data.states))
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
