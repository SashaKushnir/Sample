import { ActionsTypes } from "../store";
import { commonActions } from "./forCommonActions";
import { UserType } from "../../api/login/login";
import {History} from "../history/newHistoryReducer"
interface InitialCommonType {
    isFetching: boolean
    isMenusFetching: boolean
    isCustomerPosting: boolean
    isAuthorised: boolean | null
    userInfo?: UserType
    message?: string
    needRedirect: boolean | null
    authByToken: boolean | null
    fullEmptyAmount: boolean
    isSaved: boolean
    banquetEditMode: boolean
    banquet_pdf: History | null
    oneDay_pdf: Array<History> | null
    pdf_date: string
}

const initialState: InitialCommonType = {
    isFetching: false,
    isCustomerPosting: false,
    isMenusFetching: false,
    needRedirect: false,
    isAuthorised: null,
    authByToken: false,
    fullEmptyAmount: true,
    isSaved: false,
    banquetEditMode: false,
    banquet_pdf: null,
    oneDay_pdf: null,
    pdf_date: ""
}

export const commonReducer = (common = initialState, action: ActionsTypes<typeof commonActions>): InitialCommonType => {

    switch (action.type) {
        case "FETCHING_TOGGLE":
            return {
                ...common,
                isFetching: action.status
            }
        case "FETCHING_CUSTOMER_POSTING_TOGGLE":
            return {
                ...common,
                isCustomerPosting: action.status
            }
        case "FETCHING_MENUS_TOGGLE":
            return {
                ...common,
                isMenusFetching: action.status
            }
        case "BANQUET_MODE_TOGGLE":
            return {
                ...common,
                banquetEditMode: action.banquetModeStatus
            }
        case "NEED_AMOUNT_TOGGLE":
            return {
                ...common,
                fullEmptyAmount: action.amountStatus
            }
        case "AUTH_BY_TOKEN":
            return {
                ...common,
                authByToken: action.statusAuthWithToke
            }
        case "AUTH_TOGGLE":
            return {
                ...common,
                isAuthorised: action.status
            }
        case "SET_NEED_REDIRECT":
            return {
                ...common,
                needRedirect: action.statusR
            }
        case "SET_UNAUTHORISED_DATA":
            return {
                ...common,
                message: action.payload
            }
        case "SET_AUTHORISED_DATA":
            return {
                ...common,
                userInfo: {...action.payload} as any,
                message: ""
            }
        case "LOG_OUT":
            return {
                ...common,
                userInfo: null,
                isAuthorised: false
            }
        case "SET_SAVED":
            return {
                ...common,
                isSaved: action.status
            }
        case "BANQUET_PDF":
            return{
                ...common,
                banquet_pdf: action.banquet
            }
        case "ONE_BANQUET_PDF":
            return{
                ...common,
                oneDay_pdf: action.banquet
            }
        case "PDF_DATE":
            return{
                ...common,
                pdf_date: action.date
            }
        default:
            return common
    }
}
