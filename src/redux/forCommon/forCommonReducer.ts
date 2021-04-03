import { ActionsTypes } from "../store";
import { commonActions } from "./forCommonActions";
import { UserType } from "../../api/login/login";


interface InitialCommonType {
    isFetching: boolean
    isAuthorised: boolean
    userInfo?: UserType
    message?: string
}

const initialState: InitialCommonType = {
    isFetching: false,
    isAuthorised: false,
}


export const commonReducer = (common = initialState, action: ActionsTypes<typeof commonActions>): InitialCommonType => {

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
        case "SET_UNAUTHORISED_DATA":
            return {
                ...common,
                message: action.payload
            }
        case "SET_AUTHORISED_DATA":
            return {
                ...common,
                userInfo: {...action.payload} as any
            }
        default:
            return common
    }
}
