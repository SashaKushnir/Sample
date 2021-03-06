import {ApiGetUsersResultType, ApiPatchUserResponseType, ApiResultType, myGetInstance} from "../api";
import {CreateNewEmployeeType} from "../../components/CreateEmployeeAccount/CreateNewEmployeeForm";
import {EditUserObjectType} from "../../components/CreateEmployeeAccount/EditUserForm/EditUserForm";

export const accounts = {
    tryCreateAccount: (signUpObject: CreateNewEmployeeType, api_token: string) => {
        return myGetInstance.post('/users', {data: signUpObject},{
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
    },
    editAccountByToken: (newUserData: EditUserObjectType, token: string) => {
        return myGetInstance.patch<ApiPatchUserResponseType>('/users', {data: newUserData}, {
            headers: {
                api_token: token
            }
        })
    },
    deleteAccountById: (id: number, headerToken: string) => {
        return myGetInstance.delete<ApiResultType>('/users',  {
            headers: {
                api_token: headerToken
            },
            data: {id: id}
        })
    },
}