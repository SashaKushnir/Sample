import {UserInter} from "../../api/login/login";

export const createNewEmployeeA = {
    setAllUsers: (users: Array<UserInter>) => ({type:"SET_ALL_USERS", users}) as const,
    editUser: (name: string, password: string, role_id: number, api_token: string) => ({type: "EDIT_USER", name, password, role_id, api_token}) as const,
    editSuccess: (refreshedUser: UserInter) => ({type:"SET_REFRESHED_USER", refreshedUser}) as const
}