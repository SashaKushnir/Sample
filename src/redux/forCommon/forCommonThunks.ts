import { Dispatch } from "redux";
import { ActionsTypes, RootState } from "../store";
import { LoginFormType } from "../../components/Authorisation/LoginForm";
import { commonActions } from "./forCommonActions";
import { login } from "../../api/login/login";


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