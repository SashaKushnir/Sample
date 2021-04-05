import { User } from "../users/usersReducer";

export const ticketsActions = {
    addUser: (user: User) => ({type: "ADD_USER", user}) as const
}
