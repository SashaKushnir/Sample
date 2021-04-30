import { Dispatch } from "redux";
import { ActionsTypes } from "../store";
import { newBanknoteActions } from "./newBanknoteActions";
import { menus } from "../../api/CreateNew/menus";
import { commonActions } from "../forCommon/forCommonActions";

export const setMenuT = () => async (d: Dispatch<ActionsTypes<typeof newBanknoteActions | typeof commonActions>>) => {
    try {
        d(commonActions.fetchingToggle(true))
        const response = await menus.getAllMenus()
        console.log("res", response)
        // Set response to Bll


         if (response.data.response_status && !response.data.response_error) {
            d(newBanknoteActions.setMenuInfo(response.data.menus))
            d(commonActions.fetchingToggle(false))
         } else {
            console.warn(response.statusText)
        }
    } catch (error) {
        alert("Something went wrong")
        console.warn(error)
        d(commonActions.fetchingToggle(false))
    }
    // Catch don't forget
}
