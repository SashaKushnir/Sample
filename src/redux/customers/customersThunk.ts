import {Dispatch} from "redux";
import {ActionsTypes, RootState} from "../store";
import {commonActions} from "../forCommon/forCommonActions";
import {customersActions} from "./customersActions";
import {CreateCustomerFormType} from "../../components/CreateNewWrapper/CreateNewWrapper/crCustomer/CreateCustomerForm";
import {CreateFamilyMember} from "../../components/Customer/CreateFMForm";
import {customers} from "../../api/CreateNew/customers";
import {familyMembers} from "../../api/CreateNew/familyMember";

export const setCustomersT = () => async (d: Dispatch<ActionsTypes<typeof customersActions | typeof commonActions>>) => {
    try {
        d(commonActions.fetchingToggle(true))
        const response = await customers.getAllUsers()

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
export const filterCustomersByName = (filteringName: string) => async (d: Dispatch<ActionsTypes<typeof customersActions | typeof commonActions>>) => {
    try {
        d(commonActions.fetchingToggle(true))
        const response = await customers.filterCustomersByName(filteringName)
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
        if (response.data.success) {
            d(customersActions.pushCreatedCustomer(response.data.data))
            alert("Success")
        } else {
            console.warn(response.data.message)
        }
    } catch (error) {
        alert("Something went wrong")
        console.warn(error)
        d(commonActions.fetchingToggle(false))
    }
// }Dispatch<ActionsTypes<typeof customersActions | typeof commonActions>>
}
export const postFamilyMember = (newFMInfo: CreateFamilyMember, hideForm: () => void) => async (d:
Dispatch<ActionsTypes<typeof customersActions | typeof commonActions>>,
getState: () => RootState) => {
    try {
        d(commonActions.fetchingToggle(true))
        const response = await familyMembers.createFamilyMember(newFMInfo, getState().common.userInfo?.api_token as string)
        // Set response to Bll
        console.log(newFMInfo)
        console.log(response)
        if (response.data.success) {
            hideForm()
            d(customersActions.addFamilyMember(response.data.data, newFMInfo.customer_id))
            alert("Success")
        } else {
            console.warn(response.data.message)
        }
        d(commonActions.fetchingToggle(false))
    } catch (error) {
        alert("Помилка")
        console.warn(error)
        d(commonActions.fetchingToggle(false))
    }
}

