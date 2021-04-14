import {Dispatch} from "redux";
import {ActionsTypes} from "../store";
import {CreateNewEmployeeA} from "./CreateNewEmployeeA";
import {accounts} from "../../api/workWithAccounts/accounts";
import {CreateNewEmployeeType} from "../../components/CreateEmployeeAccount/CreateNewEmployeeForm";


export const createAccount = (data:CreateNewEmployeeType, token: string) => async (d: Dispatch<ActionsTypes<typeof CreateNewEmployeeA>>) => {
    try {
        const res = await accounts.tryCreateAccount(data, token)
        console.log("CreateAccount", res)
    } catch (e) {

    }
}