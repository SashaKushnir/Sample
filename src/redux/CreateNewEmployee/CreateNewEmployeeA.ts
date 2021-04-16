import {UserInter} from "../../api/login/login";

export const createNewEmployeeA = {
    setAllUsers: (users: Array<UserInter>) => ({type:"SET_ALL_USERS", users})
}