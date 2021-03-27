import { Dispatch } from "redux";
import { ActionsTypes } from "../store";
import { newBanknoteActions } from "./newBanknoteActions";
import initialMenu from "../../responses/get_menu2.json";
import { createObjActions } from "../formPostObject/createObjActions";

export const setMenuT = () => async (d: Dispatch<ActionsTypes<typeof newBanknoteActions | typeof createObjActions>>) => {
    try {
        d(createObjActions.fetchingToggle(true))
        const response = initialMenu
        // Set response to Bll
        if (response.response_status) {
            d(newBanknoteActions.setMenuInfo(response.menus))
            d(createObjActions.fetchingToggle(false))
        } else {
            console.warn(response.response_error)
        }
    } catch (error) {
        alert("Something went wrong")
        console.warn(error)
        d(createObjActions.fetchingToggle(false))
    }
    // Catch don't forget
}
