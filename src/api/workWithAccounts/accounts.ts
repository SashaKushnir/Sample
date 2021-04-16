import {ApiGetUsersResultType, ApiPatchUserResponseType, myGetInstance} from "../api";
import {CreateNewEmployeeType} from "../../components/CreateEmployeeAccount/CreateNewEmployeeForm";
import {EditUserObjectType} from "../../components/CreateEmployeeAccount/EditUserForm/EditUserForm";

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
    },
    editAccountByToken: (newUserData: EditUserObjectType, token: string) => {
        return myGetInstance.patch<ApiPatchUserResponseType>('/users', {user: newUserData}, {
            headers: {
                api_token: token
            }
        })
    },
    deleteAccountByToken: (tokenForDelete: string, headerToken: string) => {
        return myGetInstance.delete('/users',  {
            headers: {
                api_token: headerToken
            },
            data: {user: {api_token: tokenForDelete}}
        })
    },
}