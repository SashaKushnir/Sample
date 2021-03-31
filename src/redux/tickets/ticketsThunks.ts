import { Dispatch } from "redux";
import { ActionsTypes } from "../store";
import { ticketsActions } from "./ticketsActions";
import ticketsInitial from "../../responses/get_tickets.json";
import { commonActions } from "../forCommon/forCommonActions";
import { tickets } from "../../api/CreateNew/tickets";

export const setTicketsT = () => async (d: Dispatch<ActionsTypes<typeof ticketsActions | typeof commonActions>>) => {

    try {
        d(commonActions.fetchingToggle(true))
        const response = await tickets.getAllTickets()
        // Set response to Bll
        if (response.data.response_status && !response.data.response_error) {
            d(ticketsActions.setTicketInfo(response.data.tickets))
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