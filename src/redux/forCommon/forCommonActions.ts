import { UserType } from "../../api/login/login";

export const commonActions = {
    fetchingToggle: (status: boolean) => ({type:"FETCHING_TOGGLE", status}) as const,
    authToggle: (status: boolean) => ({type:"AUTH_TOGGLE", status}) as const,
    setAuthorisedData: (payload: UserType) => ({type: "SET_AUTHORISED_DATA", payload}) as const,
    setUnauthorisedMessage: (payload: string) => ({type: "SET_UNAUTHORISED_DATA", payload}) as const,
    logOut: () => ({type: "LOG_OUT"}) as const,
    needRedirectToggle: (statusR: boolean | null ) => ({type: "SET_NEED_REDIRECT", statusR}) as const,
}
