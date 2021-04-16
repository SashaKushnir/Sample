import {ApiGetUsersResultType, myGetInstance} from "../api";
import {CreateNewEmployeeType} from "../../components/CreateEmployeeAccount/CreateNewEmployeeForm";

export const accounts = {
    tryCreateAccount: (signUpObject: CreateNewEmployeeType, api_token: string) => {
        return myGetInstance.post('/users', {user: signUpObject},{
            headers: {
                api_token: api_token
            }
        })
    },
    getAllAccounts: (token: string) => {
        return myGetInstance.get<ApiGetUsersResultType>('/users',{
            headers:{
                api_token: token
            }
        })
    }
}