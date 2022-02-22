import {
    ApiCustomersResultType,
    ApiPostCustomerResponseType,
    ApiResultType,
    myGetInstance,
    myPostInstance
} from "../api";
import {CreateCustomerFormType} from "../../components/CreateNewWrapper/CreateNewWrapper/crCustomer/CreateCustomerForm";
import {BanquetType} from "../../redux/formPostObject/createObjReducer";
import {CustomerType} from "../../redux/customers/customersReducer";

export const customers = {
    getAllUsers: (headerToken: string) => {
        return myGetInstance.get<ApiCustomersResultType>('/customers', {
            headers: {
                'api-token': headerToken
            }
        })
    },
    createCustomer: (newCustomerInfo: CreateCustomerFormType, headerToken: string) => {
        return myGetInstance.post<ApiPostCustomerResponseType>('/customers',
            {
                'data': newCustomerInfo
            },
            {
                headers: {
                    'api-token': headerToken
                },

            })
    },
    filterCustomersByName: (searchUnderName: string, headerToken: string) => {
        return myGetInstance.get<ApiCustomersResultType>(`/customers?name=${searchUnderName}`, {
            headers: {
                'api-token': headerToken
            }
        })
    },
    deleteCustomer: (id: number, api_token: string) => {
        const obj = {
            "id": id
        }
        console.log(obj)
        return myPostInstance.delete<ApiResultType>('/customers',
            {
            headers: {
                'api-token': api_token
            },
            data: obj
        })
    },
    patchCustomer: (obj: CreateCustomerFormType, id: number, token: string) => {
        const patchObj = {
            name: obj.name,
            email: obj.email,
            birthday: obj.birthdate,
            phone: obj.phone,
            surname: obj.surname,
            id
        }

        console.log(patchObj)
        return myPostInstance.patch('/customers', {
                "data": patchObj
            }, {
                headers: {
                    'api-token': token
                }
            }
        )
    },
}
