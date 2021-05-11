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
        if (response.data.success) {
            d(BanquetStateActions.setStates(response.data.data))
        } else {
            console.warn(response.data.message)
        }
        d(commonActions.fetchingToggle(false))
    } catch (error) {
        alert("Something went wrong")
        console.warn(error)
        d(commonActions.fetchingToggle(false))
    }
}
