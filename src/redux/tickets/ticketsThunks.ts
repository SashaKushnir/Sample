import {Dispatch} from "redux";
import {ActionsTypes, RootState} from "../store";
import {ticketsActions} from "./ticketsActions";
import {commonActions} from "../forCommon/forCommonActions";
import {tickets} from "../../api/CreateNew/tickets";
import {message} from "antd";

export const setTicketsT = () => async (d: Dispatch<ActionsTypes<typeof ticketsActions | typeof commonActions>>, getState: () => RootState) => {

    try {
        d(commonActions.fetchingMenusToggle(true))
        const response = await tickets.getAllTickets(getState().common.userInfo?.api_token as string)
        // Set response to Bll
        if (response.data.success ) {
            d(ticketsActions.setTicketInfo(response.data.data))
            d(commonActions.fetchingMenusToggle(false))
        } else {
            console.warn(response.data.message)
            message.info("Помилка, невдала спроба", 3)
        }
    } catch (error) {
        message.info("Помилка, невдала спроба, перевірте інтернет підключення", 3)
        console.warn(error)
        d(commonActions.fetchingMenusToggle(false))
    }
}
