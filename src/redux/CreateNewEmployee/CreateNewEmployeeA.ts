import {UserInter} from "../../api/login/login";
import {EditUserType} from "../../components/CreateEmployeeAccount/EditDelete/UserItem";

export const createNewEmployeeA = {
    setAllUsers: (users: Array<UserInter>) => ({type:"SET_ALL_USERS", users}) as const,
    editUser: (payload: EditUserType | undefined) => ({type: "EDIT_USER", payload}) as const,
    editSuccess: (refreshedUser: UserInter) => ({type:"SET_REFRESHED_USER", refreshedUser}) as const,
    deleteSuccess: (api_token: string) => ({type:"SET_REFRESHED_USERS_AFTER_DELETE", api_token}) as const
}