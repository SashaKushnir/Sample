import {ActionsTypes} from "../store";
import {ticketsActions} from "./usersActions";

let initialState: UsersInitial = {}

export interface User {
    name:string
    id: number
}

export type UserArray = Array<User>

export type UsersInitial = {
    users?: UserArray
}

export const usersReducer = (users = initialState, action: ActionsTypes<typeof ticketsActions>): UsersInitial => {

    switch (action.type) {
        case "ADD_USER":
                return{
                    ...users,
                   // users: [...users.users, action.user]
                }
        default:
            return users
    }
}

