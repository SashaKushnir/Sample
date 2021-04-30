import { UserType } from "../../api/login/login";
import {History} from "./../history/newHistoryReducer"
export const commonActions = {
    fetchingToggle: (status: boolean) => ({type:"FETCHING_TOGGLE", status}) as const,
    authToggle: (status: boolean) => ({type:"AUTH_TOGGLE", status}) as const,
    setAuthorisedData: (payload: UserType | undefined) => ({type: "SET_AUTHORISED_DATA", payload}) as const,
    setErrorMessage: (payload: string) => ({type: "SET_UNAUTHORISED_DATA", payload}) as const,
    logOut: () => ({type: "LOG_OUT"}) as const,
    needRedirectToggle: (statusR: boolean | null ) => ({type: "SET_NEED_REDIRECT", statusR}) as const,
    successTokenToggle: (statusAuthWithToke: boolean | null) => ({type: "AUTH_BY_TOKEN", statusAuthWithToke}) as const,
    needAmountToggle: (amountStatus: boolean) => ({type: "NEED_AMOUNT_TOGGLE", amountStatus}) as const,
    setSaved: (status: boolean) => ({type: "SET_SAVED", status}) as const,
    banquetModeToggle: (banquetModeStatus: boolean) => ({type: "BANQUET_MODE_TOGGLE", banquetModeStatus}) as const,
    setBanquetPdf: (banquet: History) => ({type: "BANQUET_PDF", banquet}) as const
}
