import {ApiCustomersResultType, ApiPostCustomerResponseType, myGetInstance} from "../api";
import {CreateCustomerFormType} from "../../components/CreateNewWrapper/CreateNewWrapper/crCustomer/CreateCustomerForm";

export const customers = {
    getAllUsers: () => {
        return myGetInstance.get<ApiCustomersResultType>('/customers')
    },
    createCustomer: (newCustomerInfo: CreateCustomerFormType,headerToken: string) => {
        return myGetInstance.post<ApiPostCustomerResponseType>('/customers', {
            headers : {
                api_token: headerToken
            },
            data:  newCustomerInfo
        })
    }
}
