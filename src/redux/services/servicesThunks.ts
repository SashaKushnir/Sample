import { Dispatch } from "redux";
import { ActionsTypes } from "../store";
import { servicesActions } from "./servicesActions";
import { commonActions } from "../forCommon/forCommonActions";
import { services } from "../../api/CreateNew/services";

export const setServicesT = () => async (d: Dispatch<ActionsTypes<typeof servicesActions | typeof commonActions>>) => {
    try {
        d(commonActions.fetchingMenusToggle(true))
        const response = await services.getAllServices()
        // Set response to Bll
        if (response.data.success) {
            d(servicesActions.setEntertainmentInfo(response.data.data))
            d(commonActions.fetchingMenusToggle(false))
        } else {
            console.warn(response.data.message)
        }
    } catch (error) {
        alert("Something went wrong")
        console.warn(error)
        d(commonActions.fetchingMenusToggle(false))
    }
}