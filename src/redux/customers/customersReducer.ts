import {ActionsTypes} from "../store";
import {customersActions} from "./customersActions";

let initialState: UsersInitial = {}

export interface CustomerType {
    name: string
    id: number
    surname: string | null
    phone: string
    email: string | null
    birthdate: string | null
    created_at: string | null
    updated_at: string | null
    family_members: Array<FamilyMemberGetter>
    type: string
}

export interface FamilyMemberGetter {
    birthdate: string
    created_at: string
    customer_id: number
    id: number
    name: string
    type: string
    updated_at: string
}

export type CustomersArray = Array<CustomerType>

export type UsersInitial = {
    customers?: CustomersArray
}

export const customersReducer = (customers = initialState, action: ActionsTypes<typeof customersActions>): UsersInitial => {

    switch (action.type) {
        case "ADD_CUSTOMER_INFO":
            return {
                ...customers,
                customers: [...action.customers]
            }
        case "DELETE_ONE_CUSTOMER":
            return {
                ...customers,
                customers: customers.customers?.filter((obj: CustomerType) => obj.id !== action.customer.id)
            }
        case "PUSH_FAMILY_MEMBER":
            return {
                ...customers,
                customers: customers.customers?.map((customerI) => {
                    if(customerI.id === action.customerId) {
                        customerI.family_members.push(action.familyMember)
                    }
                    return customerI
                })
            }
        case "PUSH_CUSTOMER":
            return {
                ...customers,
                customers: customers.customers?[action.customer, ...customers.customers
                ]:[action.customer]
            }

        // case "SELECT_CUSTOMER":
        //     return {
        //         ...customers,
        //         customers: customers.customers?.map((obj: CustomerType) => {
        //             obj.isCustomerSelected = false
        //             if (obj.id === action.customer.id) {
        //                 action.customer.isCustomerSelected = true
        //             }
        //             return obj
        //         })
        //     }
        // case "UN_SELECT_ALL_CUSTOMER":
        //     return {
        //         ...customers,
        //         customers: customers.customers?.map((obj: CustomerType) => {
        //             obj.isCustomerSelected = false
        //             return obj
        //         })
        //     }
        default:
            return customers
    }
}




