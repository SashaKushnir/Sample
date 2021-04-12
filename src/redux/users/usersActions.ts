import {User, UserArray} from "../users/usersReducer";

export const usersActions = {
    addUsersInfo: (user: UserArray) => ({type: "ADD_USER_INFO", user}) as const,
    deleteOneUser: (user: User) => ({type: "DELETE_ONE_USER", user}) as const
}
