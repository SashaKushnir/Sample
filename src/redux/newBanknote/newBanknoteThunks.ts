import { Dispatch } from "redux";
import { ActionsTypes } from "../store";
import { newBanknoteActions } from "./newBanknoteActions";
import { menus } from "../../api/CreateNew/menus";
import { commonActions } from "../forCommon/forCommonActions";

export const setMenuT = () => async (d: Dispatch<ActionsTypes<typeof newBanknoteActions | typeof commonActions>>) => {
    try {
        d(commonActions.fetchingMenusToggle(true))
        const response = await menus.getAllMenus()
         if (response.data.success) {
            d(newBanknoteActions.setMenuInfo(response.data.data))
            d(commonActions.fetchingMenusToggle(false))
         } else {
            console.warn(response.statusText)
        }
    } catch (error) {
        alert("Something went wrong")
        console.warn(error)
        d(commonActions.fetchingMenusToggle(false))
    }
    // Catch don't forget
}
