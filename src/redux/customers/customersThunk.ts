import {Dispatch} from "redux";
import {ActionsTypes, RootState} from "../store";
import {commonActions} from "../forCommon/forCommonActions";
import {customersActions} from "./customersActions";
import {CreateCustomerFormType} from "../../components/CreateNewWrapper/CreateNewWrapper/crCustomer/CreateCustomerForm";
import {CreateFamilyMember} from "../../components/Customer/CreateFMForm";
import {customers} from "../../api/CreateNew/customers";
import {familyMembers} from "../../api/CreateNew/familyMember";
import {message} from "antd";
import {historyActions} from "../history/newHistoryAction";
import {history} from "../../api/CreateNew/history";

export const setCustomersT = () => async (d: Dispatch<ActionsTypes<typeof customersActions | typeof commonActions>>, getState: () => RootState) => {
    try {
        d(commonActions.fetchingToggle(true))
        const response = await customers.getAllUsers(getState().common.userInfo?.api_token as string)

        if (response.data.success) {
            d(customersActions.setCustomersInfo(response.data.data))
            d(commonActions.fetchingToggle(false))
        } else {
            console.warn(response.data.message)
            message.info("Помилка, невдала спроба", 3)
        }
    } catch (error) {
        message.info("Помилка, невдала спроба, перевірте інтернет підключення", 3)
        console.warn(error)
        d(commonActions.fetchingToggle(false))
    }
}
export const filterCustomersByName = (filteringName: string) => async (d: Dispatch<ActionsTypes<typeof customersActions | typeof commonActions>>, getState: () => RootState) => {
    try {
        d(commonActions.fetchingToggle(true))
        const response = await customers.filterCustomersByName(filteringName, getState().common.userInfo?.api_token as string)
        // Set response to Bll
        if (response.data.success) {
            d(customersActions.setCustomersInfo(response.data.data))
            d(commonActions.fetchingToggle(false))
        } else {
            console.warn(response.data.message)
            message.info("Помилка, невдала спроба", 3)
        }
    } catch (error) {
        message.info("Помилка, невдала спроба, перевірте інтернет підключення", 3)
        console.warn(error)
        d(commonActions.fetchingToggle(false))
    }
}

export const postCustomer = (newCustomerInfo: CreateCustomerFormType) => async (d: Dispatch<ActionsTypes<typeof customersActions | typeof commonActions>>,
                                                                                getState: () => RootState) => {
    try {
        d(commonActions.fetchingPostCustomerToggle(true))
        const response = await customers.createCustomer(newCustomerInfo, getState().common.userInfo?.api_token as string)
        // Set response to Bll
        if (response.data.success) {
            d(customersActions.pushCreatedCustomer(response.data.data))
            message.info("Створено", 3)
        } else {
            message.info("Помилка, невдала спроба", 3)
            console.warn(response.data.message)
        }
        d(commonActions.fetchingPostCustomerToggle(false))
    } catch (error) {
        message.info("Помилка, невдала спроба, перевірте інтернет підключення", 3)
        console.warn(error)
        d(commonActions.fetchingPostCustomerToggle(false))
    }
}
export const postFamilyMember = (newFMInfo: CreateFamilyMember, hideForm: () => void) => async (d:
                                                                                                    Dispatch<ActionsTypes<typeof customersActions | typeof commonActions>>,
                                                                                                getState: () => RootState) => {
    try {
        d(commonActions.fetchingToggle(true))
        const response = await familyMembers.createFamilyMember(newFMInfo, getState().common.userInfo?.api_token as string)

        if (response.data.success) {
            hideForm()
            d(customersActions.addFamilyMember(response.data.data, newFMInfo.customer_id))
            message.info("Створено", 3)
        } else {
            console.warn(response.data.message)
            message.info("Помилка, невдала спроба", 3)
        }
        d(commonActions.fetchingToggle(false))
    } catch (error) {
        message.info("Помилка, невдала спроба, перевірте інтернет підключення", 3)
        console.warn(error)
        d(commonActions.fetchingToggle(false))
    }
}

// export const deleteFamilyMember = (id:number, api_token:string) => async (d: Dispatch<ActionsTypes<typeof historyActions | typeof commonActions>>) => {
//
//     try {
//         d(commonActions.fetchingToggle(true))
//         const response = await history.deleteHistory(id, api_token)
//
//         // Set response to Bll
//         if (response.data.success) {
//             d(historyActions.deleteOneHistoty(id))
//             d(commonActions.fetchingToggle(false))
//             message.info("Видалено", 3)
//         } else {
//             console.warn(response.data.message)
//             d(commonActions.fetchingToggle(false))
//             message.info("Помилка, невдала спроба", 3)
//         }
//     } catch (error) {
//         message.info("Помилка, невдала спроба, перевірте інтернет підключення", 3)
//         console.warn(error)
//         d(commonActions.fetchingToggle(false))
//     }
// }
