import {ActionsTypes} from "../store";
import {usersActions} from "./usersActions";

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

export interface User {
    name:string
    id: number
    password: string
    api_token: string
    role_id: number
    role: Role
    created_at: string
    updated_at: string
}

export type UserArray = Array<User>

export type UsersInitial = {
    users?: UserArray
}

export const usersReducer = (users = initialState, action: ActionsTypes<typeof usersActions>): UsersInitial => {

    switch (action.type) {
        case "ADD_USER_INFO":
                return{
                    ...users,
                    users: [...action.user]
                }
        case "DELETE_ONE_USER":
            return{
                ...users,
                users: users.users?.filter((obj:User) => obj.id !== action.user.id)
            }
        default:
            return users
    }
}

