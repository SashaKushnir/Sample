import {Dispatch} from "redux";
import {ActionsTypes, RootState} from "../store";
import {createNewEmployeeA} from "./CreateNewEmployeeA";
import {accounts} from "../../api/workWithAccounts/accounts";
import {CreateNewEmployeeType} from "../../components/CreateEmployeeAccount/CreateNewEmployeeForm";
import {commonActions} from "../forCommon/forCommonActions";
import {EditUserObjectType} from "../../components/CreateEmployeeAccount/EditUserForm/EditUserForm";


export const createAccount = (data: CreateNewEmployeeType, token: string) => async (d: Dispatch<ActionsTypes<typeof createNewEmployeeA>>) => {
    try {
        const res = await accounts.tryCreateAccount(data, token)
    } catch (e) {

    }
}

export const getAllEmployees = (token: string) => async (d: Dispatch<ActionsTypes<typeof createNewEmployeeA |
    typeof commonActions>>) => {
    try {
        d(commonActions.fetchingToggle(true))
        const res = await accounts.getAllAccounts(token)
        if (res.data.data && res.data.success) {
            d(createNewEmployeeA.setAllUsers(res.data.data))
        } else {
        }

        d(commonActions.fetchingToggle(false))
    } catch (e) {
        d(commonActions.fetchingToggle(false))

    }
}

export const editUser = (newUser: EditUserObjectType) => async (d: Dispatch<ActionsTypes<typeof createNewEmployeeA |
    typeof commonActions>>, getState: () => RootState) => {
    try {
        d(commonActions.fetchingToggle(true))
        const res = await accounts.editAccountByToken(newUser, getState().common.userInfo?.api_token as string)
        if (res.data.success) {
            d(createNewEmployeeA.editSuccess(res.data.data))
        } else {
            if (res.data.message)
                d(commonActions.setErrorMessage(res.data.message))
        }
        d(commonActions.fetchingToggle(false))
    } catch (e) {
        d(commonActions.setErrorMessage(e.message))
        console.warn("Something went wrong")
        d(commonActions.fetchingToggle(false))

    }
}
export const deleteUser = (token: string ,id: number) => async (d: Dispatch<ActionsTypes<typeof createNewEmployeeA |
    typeof commonActions>>, getState: () => RootState) => {
    try {
        d(commonActions.fetchingToggle(true))
        const res = await accounts.deleteAccountById(id, getState().common.userInfo?.api_token as string)
        if (res.data.success) {
            d(createNewEmployeeA.deleteSuccess(token))
            if(getState().accounts.editUserInfo?.api_token === token)
                d(createNewEmployeeA.editUser(undefined))
        } else {
        }
        d(commonActions.fetchingToggle(false))
    } catch (e) {
        console.warn("Something went wrong")
        d(commonActions.fetchingToggle(false))
    }
}

