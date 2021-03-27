import { Dispatch } from "redux";
import { ActionsTypes } from "../store";
import { ticketsActions } from "./ticketsActions";
import ticketsInitial from "../../responses/get_tickets.json";
import { createObjActions } from "../formPostObject/createObjActions";

export const setTicketsT = () => (d: Dispatch<ActionsTypes<typeof ticketsActions | typeof createObjActions>>) => {

    try {
        d(createObjActions.fetchingToggle(true))
        const response = ticketsInitial
        // Set response to Bll
        if (response.response_status) {
            d(ticketsActions.setTicketInfo(response.tickets))
            d(createObjActions.fetchingToggle(false))
        } else {
            console.warn(response.response_error)
        }
    } catch (error) {
        alert("Something went wrong")
        console.warn(error)
        d(createObjActions.fetchingToggle(false))
    }
}