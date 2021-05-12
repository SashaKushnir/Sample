import { Dispatch } from "redux";
import {ActionsTypes, RootState} from "../store";
import { commonActions } from "../forCommon/forCommonActions";
import {customersActions} from "./customersActions";
import {customers} from "../../api/CreateNew/customers";
import {CreateCustomerFormType} from "../../components/CreateNewWrapper/CreateNewWrapper/crCustomer/CreateCustomerForm";

export const setCustomersT = () => async (d: Dispatch<ActionsTypes<typeof customersActions | typeof commonActions>>) => {
    try {
        d(commonActions.fetchingToggle(true))
        const response = await customers.getAllUsers()
        // Set response to Bll
        if (response.data.success) {
            d(customersActions.setCustomersInfo(response.data.data))
            d(commonActions.fetchingToggle(false))
        } else {
            console.warn(response.data.message)
        }
    } catch (error) {
        alert("Something went wrong")
        console.warn(error)
        d(commonActions.fetchingToggle(false))
    }
}

export const postCustomer = (newCustomerInfo: CreateCustomerFormType) => async (d: Dispatch<ActionsTypes<typeof customersActions | typeof commonActions>>,
                                                                                getState: () => RootState) => {
    try {
        d(commonActions.fetchingToggle(true))
        const response = await customers.createCustomer(newCustomerInfo, getState().common.userInfo?.api_token as string)
        // Set response to Bll
        console.log(response)
        if (response.data.success) {
            d(customersActions.pushCreatedCustomer(response.data.data))
        } else {
            console.warn(response.data.message)
        }
    } catch (error) {
        alert("Something went wrong")
        console.warn(error)
        d(commonActions.fetchingToggle(false))
    }
}

