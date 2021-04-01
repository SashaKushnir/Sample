import { ActionsTypes } from "../store";
import { commonActions } from "./forCommonActions";


const initialState = {
    isFetching: false,
    isAuthorised: true
}


export const commonReducer = (common = initialState, action: ActionsTypes<typeof commonActions>) => {

    switch (action.type) {
        case "FETCHING_TOGGLE":
            return {
                ...common,
                isFetching: action.status
            }
        case "AUTH_TOGGLE":
            return {
                ...common,
                isAuthorised: action.status
            }
        default:
            return common
    }
}
