import { Dispatch } from "redux";
import { ActionsTypes, RootState } from "../store";
import { LoginFormType } from "../../components/Authorisation/LoginForm";
import { commonActions } from "./forCommonActions";
import { login } from "../../api/login/login";
import { newBanknoteActions } from "../newBanknote/newBanknoteActions";
import { ticketsActions } from "../tickets/ticketsActions";
import { servicesActions } from "../services/servicesActions";


export const tryLoginT = (loginObject: LoginFormType) => async (d: Dispatch<ActionsTypes<typeof commonActions>>, getState: () => RootState) => {
    d(commonActions.fetchingToggle(true))
    try {
        const res = await login.tryLogin(loginObject)
        console.log("resLogin", res)
        if (res.data.user) {
            d(commonActions.setAuthorisedData(res.data.user))
            d(commonActions.authToggle(true))
            d(commonActions.fetchingToggle(false))
        } else {
            console.warn("error")
            if (res.data.message)
                d(commonActions.setUnauthorisedMessage(res.data.message))
            d(commonActions.fetchingToggle(false))
        }
    } catch (error) {
        console.warn(error)
        d(commonActions.fetchingToggle(false))
    }
}

export const logOutT = () => (d: Dispatch<ActionsTypes<typeof commonActions | typeof newBanknoteActions
    | typeof ticketsActions | typeof servicesActions>>, state: RootState) => {
    d(newBanknoteActions.deleteAllAmount())
    d(ticketsActions.deleteAllAmounts())
    d(servicesActions.deleteAllAmount())
    d(commonActions.logOut())
    d(commonActions.successTokenToggle(false))
}

export const logInWithToken = (token: string) => async (d: Dispatch<ActionsTypes<typeof commonActions>>) => {
    try {
        d(commonActions.fetchingToggle(true))
        const res = await login.loginByToken(token)
        console.log(res)
        if(res.data.user){
            d(commonActions.successTokenToggle(true))
            d(commonActions.setAuthorisedData(res.data.user))
            d(commonActions.authToggle(true))
            d(commonActions.fetchingToggle(false))
        } else {
            alert("Something wrong with your token, please login with name and password")
            d(commonActions.successTokenToggle(false))
            d(commonActions.authToggle(false))
            d(commonActions.setAuthorisedData(undefined))
            d(commonActions.fetchingToggle(false))
        }
    } catch (error) {
        console.warn(error)
        alert("Error")
        d(commonActions.fetchingToggle(false))
    }
}