import {Dispatch} from "redux";
import {ActionsTypes} from "../store";
import {createNewEmployeeA} from "./CreateNewEmployeeA";
import {accounts} from "../../api/workWithAccounts/accounts";
import {CreateNewEmployeeType} from "../../components/CreateEmployeeAccount/CreateNewEmployeeForm";
import {commonActions} from "../forCommon/forCommonActions";


export const createAccount = (data:CreateNewEmployeeType, token: string) => async (d: Dispatch<ActionsTypes<typeof createNewEmployeeA>>) => {
    try {
        const res = await accounts.tryCreateAccount(data, token)
        console.log(res)
    } catch (e) {

    }
}

export const getAllEmployees = (token: string) => async (d: Dispatch<ActionsTypes<typeof createNewEmployeeA |
    typeof commonActions>>) => {
    try {
        d(commonActions.fetchingToggle(true))
        const res = await accounts.getAllAccounts(token)
        console.log("RESSSSSSSSSSSSSSSSs", res)
        if(res.data.users) {
            d(createNewEmployeeA.setAllUsers(res.data.users))
            console.log("Present Users")
        } else {
            console.log("Epsent Users")
        }

        d(commonActions.fetchingToggle(false))
    }catch (e) {
        d(commonActions.fetchingToggle(false))

    }
}