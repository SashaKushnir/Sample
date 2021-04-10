import { Dispatch } from "redux";
import { ActionsTypes } from "../store";
import { commonActions } from "../forCommon/forCommonActions";
import {customersActions} from "./customersActions";
import {customers} from "../../api/CreateNew/customers";

export const setUsers = () => async (d: Dispatch<ActionsTypes<typeof customersActions | typeof commonActions>>) => {
    try {
        d(commonActions.fetchingToggle(true))
        const response = await customers.getAllUsers()
        // Set response to Bll
        if (response.data.response_status && !response.data.response_error) {
            d(customersActions.addUsersInfo(response.data.customers))
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
