import {ActionsTypes} from "../store";
import {createNewEmployeeA} from "./CreateNewEmployeeA";
import {UserInter} from "../../api/login/login";


export interface InitialEmployee {
    users?: Array<UserInter>
    editUserInfo?: {
        name: string
        password: string
        role_id: number
        api_token: string
        id?: number
    }
}

const initialEmployee = {

}


export const CreateNewEmployeeR = (createEA: InitialEmployee = initialEmployee,
                                   action: ActionsTypes<typeof createNewEmployeeA>): InitialEmployee => {
    switch (action.type) {
        case "SET_ALL_USERS":
            return {
                ...createEA,
                users: [...action.users]
            }
        case "SET_REFRESHED_USER":
            return {
                ...createEA,
                users: createEA.users?[...createEA.users.map((userI) => {
                    if(action.refreshedUser?.api_token === userI.api_token)
                        userI = {...action.refreshedUser}
                        return userI
                })]: [action.refreshedUser]
            }
        case "SET_REFRESHED_USERS_AFTER_DELETE":
            return {
                ...createEA,
                users: createEA.users?[...createEA.users.filter((userI) =>
                    userI.api_token !== action.api_token
                )]:undefined
            }
        case "EDIT_USER":
            return {
                ...createEA,
                editUserInfo: action.payload?{...action.payload}: undefined
            }
        default:
            return {
            ...createEA
            }
    }
}