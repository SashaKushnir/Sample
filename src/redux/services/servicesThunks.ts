import { Dispatch } from "redux";
import { ActionsTypes } from "../store";
import { servicesActions } from "./servicesActions";
import { commonActions } from "../forCommon/forCommonActions";
import { services } from "../../api/CreateNew/services";

export const setServicesT = () => async (d: Dispatch<ActionsTypes<typeof servicesActions | typeof commonActions>>) => {
    try {
        d(commonActions.fetchingToggle(true))
        const response = await services.getAllServices()
        // Set response to Bll
        if (response.data.response_status && !response.data.response_error) {
            d(servicesActions.setEntertainmentInfo(response.data.services))
            d(commonActions.fetchingToggle(false))
        } else {
            console.warn(response.data.response_error)
        }
    } catch (error) {
        alert("Something went wrong")
        console.warn(error)
        d(commonActions.fetchingToggle(false))
    }
}