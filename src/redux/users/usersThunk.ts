import { Dispatch } from "redux";
import { ActionsTypes } from "../store";
import { commonActions } from "../forCommon/forCommonActions";
import {usersActions} from "./usersActions";
import {users} from "../../api/CreateNew/users";

export const setUsers = () => async (d: Dispatch<ActionsTypes<typeof usersActions | typeof commonActions>>) => {
    try {
        d(commonActions.fetchingToggle(true))
        const response = await users.getAllUsers()
        // Set response to Bll
        if (response.data.response_status && !response.data.response_error) {
            d(usersActions.addUsersInfo(response.data.user))
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
