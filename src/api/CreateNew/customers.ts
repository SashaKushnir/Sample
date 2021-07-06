import {ApiCustomersResultType, ApiPostCustomerResponseType, myGetInstance} from "../api";
import {CreateCustomerFormType} from "../../components/CreateNewWrapper/CreateNewWrapper/crCustomer/CreateCustomerForm";

export const customers = {
    getAllUsers: (headerToken: string) => {
        return myGetInstance.get<ApiCustomersResultType>('/customers', {
            headers : {
                'api-token': headerToken
            }
        })
    },
    createCustomer: (newCustomerInfo: CreateCustomerFormType,headerToken: string) => {
        return myGetInstance.post<ApiPostCustomerResponseType>('/customers', {
            headers : {
                'api-token': headerToken
            },
            data:  newCustomerInfo
        })
    },
    filterCustomersByName: (searchUnderName: string, headerToken: string) => {
        return myGetInstance.get<ApiCustomersResultType>(`/customers?name=${searchUnderName}`,{
            headers : {
                'api-token': headerToken
            }
        })
    }
}
