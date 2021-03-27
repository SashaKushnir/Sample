import { Dispatch } from "redux";
import { ActionsTypes } from "../store";
import { servicesActions } from "./servicesActions";
import services from "../../responses/get_services_list.json";
import { createObjActions } from "../formPostObject/createObjActions";

export const setServicesT = () => async (d: Dispatch<ActionsTypes<typeof servicesActions | typeof createObjActions>>) => {
    try {
        d(createObjActions.fetchingToggle(true))
        const response = services
        // Set response to Bll
        if (response.response_status) {
            d(servicesActions.setEntertainmentInfo(response.services))
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