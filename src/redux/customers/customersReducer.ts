import {ActionsTypes} from "../store";
import {customersActions} from "./customersActions";

let initialState: UsersInitial = {}

export interface CustomerType {
    name:string
    id: number
    surname: string | null
    phone: string
    email: string | null
    birthdate: string | null
    created_at: string | null
    updated_at: string | null
}

export type CustomersArray = Array<CustomerType>

export type UsersInitial = {
    customers?: CustomersArray
}

export const customersReducer = (customers = initialState, action: ActionsTypes<typeof customersActions>): UsersInitial => {

    switch (action.type) {
        case "ADD_USER_INFO":
                return{
                    ...customers,
                    customers: [...action.customers]
                }
        case "DELETE_ONE_USER":
            return{
                ...customers,
                customers: customers.customers?.filter((obj:CustomerType) => obj.id !== action.customer.id)
            }
        default:
            return customers
    }
}

