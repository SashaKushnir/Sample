import {Dispatch} from "redux";
import {ActionsTypes} from "../store";
import {ticketsActions} from "./ticketsActions";
import {commonActions} from "../forCommon/forCommonActions";
import {tickets} from "../../api/CreateNew/tickets";

export const setTicketsT = () => async (d: Dispatch<ActionsTypes<typeof ticketsActions | typeof commonActions>>) => {

    try {
        d(commonActions.fetchingMenusToggle(true))
        const response = await tickets.getAllTickets()
        // Set response to Bll
        if (response.data.success ) {
            d(ticketsActions.setTicketInfo(response.data.data))
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