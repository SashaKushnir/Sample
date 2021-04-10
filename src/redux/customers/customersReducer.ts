import {ActionsTypes} from "../store";
import {customersActions} from "./customersActions";

let initialState: UsersInitial = {}

export interface Role {
    id: number
    name: string
    description: boolean
    can_read: boolean
    can_insert: boolean
    can_modify: boolean
    is_owner: boolean
    created_at: string
    updated_at: string
}

export interface CustomerType {
    name:string
    id: number
    password: string
    api_token: string
    role_id: number
    role: Role
    created_at: string
    updated_at: string
}

export type CustomersArray = Array<CustomerType>

export type UsersInitial = {
    users?: CustomersArray
}

export const customersReducer = (users = initialState, action: ActionsTypes<typeof customersActions>): UsersInitial => {

    switch (action.type) {
        case "ADD_USER_INFO":
                return{
                    ...users,
                    users: [...action.user]
                }
        case "DELETE_ONE_USER":
            return{
                ...users,
                users: users.users?.filter((obj:CustomerType) => obj.id !== action.user.id)
            }
        default:
            return users
    }
}

