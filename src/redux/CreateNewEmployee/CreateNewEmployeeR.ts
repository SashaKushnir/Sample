import {ActionsTypes} from "../store";
import {createNewEmployeeA} from "./CreateNewEmployeeA";
import {UserInter} from "../../api/login/login";


export interface InitialEmployee {
    users?: Array<UserInter>
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
        default:
            return {
            ...createEA
            }
    }
}